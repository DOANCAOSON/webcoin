import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const InstructIndex = () => {
    const [responseData, setResponseData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
        axios
            .get(
                `https://be-trending.onrender.com/landing/home/static/fit-guide?fbclid=IwAR2ZBLPQ-l1wLoYm1ESTs1LrYyEb9alNHX9vb4szmhsJMp8z0DiyVMhLXpQ`
            )
            .then((response) => {
                setResponseData(response.data);
                console.log(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const htmlString = responseData?.html;
    

    return (
        <div>
            <div className="w-[100%] flex justify-center items-center">

                <div className="mt-[100px] w-[100%] lg:w-[1400px] px-[20px] lg:p-[0px]">
                    {loading ? (
                        <Loading /> // Nếu đang tải dữ liệu, hiển thị Loading
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default InstructIndex