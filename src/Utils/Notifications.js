import Swal from "sweetalert2";

export const notifySuccess = (title, text = "") => {
  return Swal.fire({
    icon: "success",
    title,
    text,
    timer: 2000,
    showConfirmButton: false,
    color: "#252525",
    customClass: {
      popup: "swal-popup",
      icon: "swal-icon",
    },
  });
};
