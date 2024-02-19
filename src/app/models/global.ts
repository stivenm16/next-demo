export type TypeWithKey<T> = { [key: string]: T }

export interface ApiResponse<T> {
  data: T
  status: string
  statusCode: number
  message: string
}

export interface DynamicFormFieldProps {
  columna: string
  requerido: boolean
  tipo: string
  defecto: string | null
  tamano: number | null
  dependiente: any
  idSeccionAtributo: number
  ordenEdicion: number
  mostrarEnFormulario: boolean
}

export interface FormData {
  columnas: DynamicFormFieldProps[]
}

interface TipoNotificacion {
  id: number
  tipoNotificacion: string
  codigo: string | null
  accionesNotificacion: AccionNotificacion[]
}

interface AccionNotificacion {
  id: number
  accionNotificacion: string
  accionNotificacionCodigo: string
  idTipoNotificacion: number
}

interface Usuario {
  id: number
  usuario: string
  codigo: string | null
  nombre: string | null
  email: string
  idPerfil: number
}

export interface Notificacion {
  id: number
  uid: string
  eid: string
  idUsuarioModifico: number
  idUsuarioCreo: number
  fechaModificacion: string
  fechaCreacion: string
  active: boolean
  notificacion: string
  notificacionCodigo: string | null
  tipoNotificacion: TipoNotificacion
  usuarioOrigen: Usuario
  usuarioDestino: Usuario
  datos: string
  multiempresa: string
}

export interface NotificacionData {
  notificaciones: Notificacion[]
}
