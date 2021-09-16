import { toast } from 'react-toastify';

export const errorToast = (text) =>
  toast.error(text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });
