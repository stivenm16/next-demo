interface Props {
  description: string
  idTipoNotificacion?: number
  idUsuarioOrigen?: number
  idUsuarioDestino?: number
  data: any
}

export async function createRequest({
  description,
  idTipoNotificacion = 1,
  idUsuarioDestino = 1,
  idUsuarioOrigen = 1,
  data,
}: Props): Promise<any> {
  // const { data: response } = await axios.post(
  //   `http://localhost:5150/sammapi/${ROUTES.CREATE_REQUEST}`, {
  //     description, idTipoNotificacion, idUsuarioDestino, idUsuarioOrigen, data
  //   },
  // ).then((res)=> {
  //   return res
  // })

  // return response.data
  return true
}
