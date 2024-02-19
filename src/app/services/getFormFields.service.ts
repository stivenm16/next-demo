import { formRegister } from '../utils/fakeResponses'

export const getFormFields = async () => {
  // Replace this with your actual implementation to retrieve the form fields
  // return await axios.get(
  //   `http://localhost:5150/sammapi/${ROUTES.GET_FORM_FIELDS}`,
  // )
  return formRegister.data.columnas
}
