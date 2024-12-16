import * as Yup from 'yup';

declare module 'yup' {
  interface NumberSchema {
    moreThanSumOfFields(fields: string[]): this;
  }
}