import * as Yup from 'yup';
import { validationMessages } from './validationMessages';

// Добавляем метод для проверки суммы полей
Yup.addMethod(Yup.number, 'moreThanSumOfFields', function (fields: string[]) {
  return this.test('moreThanSumOfFields', `Общая площадь должна быть больше суммы полей ${fields.join(', ')}`, function (value) {
    // Проверяем, что все поля определены
    if (value !== undefined) {
      const sum = fields.reduce((acc, field) => {
        const fieldValue = this.parent[field];
        return acc + (fieldValue || 0); // Добавляем значение поля или 0, если оно не определено
      }, 0);
      return value > sum;
    }
    // Если value undefined, пропускаем тест
    return true;
  });
});

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(validationMessages.required),
  address: Yup.string().required(validationMessages.required),
  floor: Yup.number()
    .min(-1, validationMessages.min)
    .max(Yup.ref('totalFloors'), 'Этаж не может превышать количество этажей в доме')
    .required(validationMessages.required),
  totalFloors: Yup.number()
    .min(-3, validationMessages.min)
    .max(200, validationMessages.max)
    .required(validationMessages.required),
  square: Yup.number()
    .min(0, validationMessages.min)
    .max(400, validationMessages.max)
    .moreThanSumOfFields(['livingSquare', 'kitchenSquare'])
    .required(validationMessages.required),
    livingSquare: Yup.number()
      .min(0, validationMessages.min)
      .required(validationMessages.required),
    kitchenSquare: Yup.number()
      .min(0, validationMessages.min)
      .required(validationMessages.required),
  });