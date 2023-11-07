import axios from "axios";
import { useEffect } from "react";
import { AUTH_CONFIRM_ENDPOINT, BE_ENDPOINT } from "../../constant/Apiendpoint";
import useEmailStore from '../../zustand/ZustandEmail';

const Confirmationindex = () => {
    // Tạo một store Zustand
  
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
                    useEmailStore.setState({ email });
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

    const email = useEmailStore((state) => state.email);
    console.log(
        email
    );
    return (
        <div>
            confirmation
        </div>
    )
}

export default Confirmationindex