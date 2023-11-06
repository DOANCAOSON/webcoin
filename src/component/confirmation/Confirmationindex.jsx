import axios from "axios";
import { useEffect } from "react";
import { AUTH_CONFIRM_ENDPOINT, BE_ENDPOINT } from "../../constant/Apiendpoint";
const Confirmationindex = () => {
    useEffect(() => {
            // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
            axios
                .post(
                    BE_ENDPOINT + AUTH_CONFIRM_ENDPOINT + location.search
                )
                .then((res) => {
                    if(res.data) {
                        const {email} = res.data
                        localStorage.setItem("user", email)
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

    </div>
  )
}

export default Confirmationindex