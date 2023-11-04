import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Banner = () => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
        axios
            .get("https://admin.traveltreasurepro.site/api/list-slide")
            .then((response) => {
                setResponseData(response.data.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div className="lg:w-[100%] mx-[auto] mt-[150px]">
            <div className="h-[700px] w-[100%]">
                <div
                    style={{
                        backgroundImage: `url(https://admin.traveltreasurepro.site//${responseData[2]?.url_img})`,
                    }}
                    className="w-[100%] h-[100%] bg-cover bg-no-repeat banner-container"
                >

                    <div className="flex items-center justify-center h-[100%] py-[20px] rounded-lg  w-[100%] text-colorBlack">
                            <div className="mb-[18px] lg:w-[600px]">
                                <h1 className="text-center text-[36px] line-clamp-3 w-[100%] md:-[300px] lg:w-[100%] font-bold banner-name   text-color mb-[32px] ">
                                    {responseData[2]?.name}
                                </h1>
                                <h1 className="text-center text-[12px] line-clamp-3 w-[100%] md:-[300px] lg:w-[100%] font-normal banner-name   text-color ">
                                    {responseData[2]?.info}
                                </h1>
                            </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner