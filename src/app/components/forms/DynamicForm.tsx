'use client'
import { DynamicFormFieldProps } from '@/app/models'
import { createRequest, getFormFields } from '@/app/services'
import { createSchema, removeEmptyFields } from '@/app/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { forwardRef, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, InputField, Spinner, ErrorField } from '..'


interface FormStructure {
  email: string
  nombre?: string
  profesion?: string
  telefono?: string
}
// eslint-disable-next-line react/display-name
export const DynamicForm = forwardRef(({ ...props }, ref) => {
  const [fields, setFields] = useState([] as any)

  // const fetchFields = async () => await getFormFields().then((res) => setFields(res.data.data.columnas))
  const fetchFields = async () =>
    await getFormFields().then((res) => setFields(res))

  useEffect(() => {
    fetchFields()
  }, [])

  const onSubmit = async (data: any) => {
    if (data) {
      const filteredData: FormStructure = removeEmptyFields(data)
      createRequest({
        description: filteredData.email,
        data: filteredData.email,
      })
    }
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createSchema(fields)) })
  return (
    <div className="items-center flex flex-col gap-1">
      {fields.length > 0 ? (
        fields.map((fieldForm: DynamicFormFieldProps, index: number) => {
          return (
            <Controller
              key={index}
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <InputField
                    {...field}
                    key={index}
                    value={field.value}
                    ref={ref}
                    fieldName={fieldForm.columna}
                  />
                  {errors[fieldForm.columna] && (
                    <ErrorField
                      message={errors[fieldForm.columna]?.message as string}
                    />
                  )}
                </div>
              )}
              name={fieldForm.columna}
              rules={{
                required: fieldForm.requerido
                  ? `${fieldForm.columna} is a required field`
                  : undefined,
              }}
            />
          )
        })
      ) : (
        <Spinner />
      )}
      <Button onClick={handleSubmit(onSubmit)} customStyles="my-2 w-full">
        Registrarse
      </Button>
    </div>
  )
})
