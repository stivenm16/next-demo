'use client'
import { useState } from 'react'
import { ToggleTheme } from './components'
import { DynamicForm, LoginForm } from './components/forms'

const handlePress = async () => {
  // const response = await getUser()
}
export default function Home() {
  const [isRegister, setIsRegister] = useState(true)

  return (
    <div className="flex  flex-col w-full justify-center items-center pt-48">
      <div className="bg-container-light dark:bg-container-dark p-8 rounded-2xl shadow-2xl  ">
        {isRegister ? <LoginForm /> : <DynamicForm />}

        <span className="text-center mt-8 dark:text-background-dark">
          {!isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes aun cuenta?'}
          <span
            className="cursor-pointer text-container-dark dark:text-background-light dark:hover:text-btn-dark placeholder-opacity-60 font-sm hover:text-background-light transition ease-in-out duration-300"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? ' Registrarse' : ' Ingresar'}
          </span>
        </span>
      </div>
      <div className=" flex mt-5 gap-5">
        <ToggleTheme />
      </div>
    </div>
  )
}
