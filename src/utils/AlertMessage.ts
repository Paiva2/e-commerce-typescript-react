import Swal from "sweetalert2";
import { SweetAlertIcon } from "sweetalert2";

export const AlertMessage = (icon: SweetAlertIcon, alertText: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: alertText,
  });
};
