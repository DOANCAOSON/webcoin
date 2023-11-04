import axios from "axios";
import { useEffect,  } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        `https://admin.traveltreasurepro.site/api/post-detail?id=${id}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, [id]);

  const ref = useRef(null);
  return (
    <div ref={ref} className="w-[100%] lg:w-[1400px] flex justify-center mt-[100px] mx-[auto] gap-[30px] bg-[#fff] pt-[60px]">
      
    </div>
  );
};

export default Detail;
