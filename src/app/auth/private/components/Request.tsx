'use client'
import { Button } from '@/app/components'

import { useState } from 'react'
import { Notificacion } from 'samm-frontend-resources-test/models'

interface Props {
  req: Notificacion
  handleRequest: (id: number) => void
}

export const Request = ({ req, handleRequest }: Props) => {
  const [note, setNote] = useState('')

  const handleNoteChange = (text: any) => {
    setNote(text)
  }
  return (
    <div className="bg-container-light dark:bg-container-dark shadow-xl border-container-light dark:border-container-dark border-4 h-48 w-60 p-5 rounded-xl justify-between flex flex-col">
      <h4 className="text-white dark:text-btn-dark">{req.notificacion}</h4>

      <input
        style={{
          height: 30,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          flexWrap: 'wrap',
        }}
        onChange={handleNoteChange}
        value={note}
        placeholder="Agregar un mensaje..."
      />
      <div className="flex gap-2">
        {req.tipoNotificacion.accionesNotificacion.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              console.log(
                req,
                note,
                req.notificacion,
                'req, note, req.notificacion',
              )
              handleRequest(req.id)
            }}
          >
            {item.accionNotificacion}
          </Button>
        ))}
      </div>
    </div>
  )
}
