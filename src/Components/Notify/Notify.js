import Swal from "sweetalert2";

export const notify = (type, text) => {
  return Swal.fire({
    title: text,
    text: "Oops...",
    icon: type,
    showConfirmButton: false,
    timer: 1500,
  });
};
