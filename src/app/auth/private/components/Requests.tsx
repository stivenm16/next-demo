'use client'
import { Spinner } from '@/app/components'

import { useEffect, useState } from 'react'

import { Notificacion } from 'samm-frontend-resources-test/models'
import { getAdminRequests } from 'samm-frontend-resources-test/services'
import { Request } from '.'

export const Requests = () => {
  const [requests, setRequests] = useState<Notificacion[]>()

  const handleRequest = (id: number) =>
    setRequests((prev) => prev?.filter((req) => req.id !== id))

  const fetchFields = async () => {
    try {
      const res = await getAdminRequests()
      setRequests(res)
    } catch (error) {
      console.error('Error fetching requests:', error)
    }
  }

  useEffect(() => {
    fetchFields()
  }, [])

  return (
    <>
      {!!requests ? (
        <div className="w-full flex h-48 flex-wrap p-10 gap-5 ">
          {requests.map((req) => (
            <Request req={req} key={req.id} handleRequest={handleRequest} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
