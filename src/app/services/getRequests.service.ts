import { adminRequests } from '../utils'

export const getAdminRequests = async () => {
  // return await axiosInstance.get(
  //   `/${ROUTES.GET_REQUESTS}`,
  // )
  return adminRequests.data.notificaciones
}
