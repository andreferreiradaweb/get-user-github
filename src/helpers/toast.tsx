import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastError = (message: String) => {
  toast.error(message)
}
