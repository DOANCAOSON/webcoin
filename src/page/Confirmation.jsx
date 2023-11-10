import axios from "axios";
import { useEffect } from "react";
import { AUTH_CONFIRM_ENDPOINT, BE_ENDPOINT } from "../constant/APIEndpoint";
import { GmailStore } from '../store/store';

const Confirmation = () => {

  const { gmail, updateGmail } = GmailStore();
  console.log(
      gmail
  );

  useEffect(() => {
      // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
      axios
          .post(
              BE_ENDPOINT + AUTH_CONFIRM_ENDPOINT + location.search
          )
          .then((res) => {
              if (res.data) {
                  const { email } = res.data
                  // Sử dụng setEmail để cập nhật trạng thái email trong store
                  localStorage.setItem("user", email)
                  updateGmail(email)
              }
              location.assign("/")
          })
          .catch(() => {
              location.assign("/confirmation/error")
          });
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  }, []);

  return (
    <div>
      Confirmationindex
    </div>
  )
}

export default Confirmation