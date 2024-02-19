import { DynamicFormFieldProps } from '../models'
import * as yup from 'yup'

export const createSchema = (fields: any) => {
  const schema = {} as any
  fields.forEach((field: DynamicFormFieldProps) => {
    schema[field.columna] = field.requerido
      ? yup.string().required(`${field.columna} is a required field`)
      : yup.string()
  })
  return yup.object().shape(schema)
}
