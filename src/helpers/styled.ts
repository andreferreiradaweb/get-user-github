import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast-body {
    color: #fff;
  }
  .Toastify__close-button {
    svg {
      fill: #ffffff;
    }
  }
`