import { toast } from "react-toastify";

function Company() {
  const ctaHanlder = () => {
    toast.error("Something went wrong! please try again later!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const ctaHanlderSuccess = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      Company
      <button onClick={ctaHanlder}>error</button>
      <button onClick={ctaHanlderSuccess}>sucess</button>
    </div>
  );
}

export default Company;
