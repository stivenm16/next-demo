'use client'
import { yupResolver } from '@hookform/resolvers/yup'

import { Controller, useForm } from 'react-hook-form'

import getToken from '@/app/services/getToken.service'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { forwardRef } from 'react'
import * as yup from 'yup'
import { Button, InputField } from '..'
import ErrorField from './components/ErrorField'

interface IFormInput {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    //.email('El email debe ser ser válido')
    .required('El email es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(4, 'La contraseña debe tener al menos 4 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Las contraseñas no coinciden'),
})
// eslint-disable-next-line react/display-name
export const LoginForm = forwardRef(({ ...props }, ref) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const route = useRouter()
  const onSubmit = async (data: IFormInput) => {
    if (data) {
      try {
        const token = await getToken({
          username: data.email,
          password: data.password,
        })
        signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: '/auth/private',
        })
      } catch (error) {
        console.log('Credenciales invalidas', error)
      }
    }
  }

  return (
    <div className="items-center flex flex-col justify-center w-full gap-2">
      <Controller
        control={control}
        render={({ field }) => (
          <div style={{ gap: 10 }} className="w-full">
            <InputField
              {...field}
              ref={ref}
              value={field.value}
              fieldName={`Email`}
            />
            {errors.email && <ErrorField message={errors.email.message!} />}
          </div>
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <div style={{ gap: 10 }} className="w-full">
            <InputField
              {...field}
              ref={ref}
              value={field.value}
              fieldName={`Contraseña`}
              type="password"
            />
            {errors.password && (
              <ErrorField message={errors.password.message!} />
            )}
          </div>
        )}
        name="password"
      />

      <Button customStyles="mb-2 w-full" onClick={handleSubmit(onSubmit)}>
        <h4 style={{ alignSelf: 'center' }}>{'Ingresar'}</h4>
      </Button>
    </div>
  )
})
