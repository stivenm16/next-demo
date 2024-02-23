'use client'
import { BackgroundImage } from '@/app/auth/private/components'
import { useState } from 'react'
import { AuxBtns, Button } from '..'

const defaultForm = [
  {
    key: '',
  },
]
export const FormGenerator = () => {
  const [formFields, setForm] = useState<any>(defaultForm)

  const handleFormFieldChange = (value: string, type: 'key', index: number) => {
    const newFormFields = formFields.map((formField: any, i: any) => {
      if (index === i) {
        return { ...formField, [type]: value }
      }
      return formField
    })

    const activeformField = newFormFields[index]
    const isLastRow = index === newFormFields.length - 1

    if (isLastRow && activeformField.key.trim() !== '') {
      setForm([...newFormFields, { key: '' }])
    } else {
      if (newFormFields.length > 1 && activeformField.key.trim() === '') {
        const updatedFormFields = newFormFields.filter(
          (formField: any, i: number) => i !== index,
        )
        setForm(updatedFormFields)
      } else {
        setForm(newFormFields)
      }
    }
  }

  const sendForm = () => {
    const form = formFields.filter((formField: any) => formField.key !== '')
    console.log('Form:', form)
  }

  return (
    <div>
      <BackgroundImage />
      <div className="flex justify-center items-center flex-col relative">
        <div className=" justify-center w-[17rem] mx-auto mt-56 mb-5 p-5 bg-container-light dark:bg-container-dark rounded-md shadow-xl ">
          <h4 className="text-background-light dark:text-btn-dark text-center text-xl font-extrabold py-1 text-wrap">
            Generador de formularios
          </h4>
          {formFields.map((formField: any, index: number) => (
            <div key={index} className="flex flex-col gap-2 w-full mb-2">
              <span className="dark:text-background-dark dark:opacity-70 overflow-hidden ">
                {formField.key || 'Key'}
              </span>
              <input
                type="text"
                placeholder="Key"
                className=" bg-white h-9 rounded-sm px-5 text-btn-dark"
                value={formField.key}
                onChange={(e) =>
                  handleFormFieldChange(e.target.value, 'key', index)
                }
              />
            </div>
          ))}
          <Button
            label="Guardar formulario"
            customStyles="mx-auto mt-5"
            onClick={sendForm}
          />
        </div>
        <AuxBtns path="/auth/private" />
      </div>
    </div>
  )
}
