import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist"
import Loading from "../component/Loading/Loading";

const New = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        `https://be-trending.onrender.com/landing/articles/find?fbclid=IwAR0-s-PhiyT0ntIrLhMG49wMKXdB2hQ8mBUIC-wtsLUu63jjJHI0VPnQ45Q`
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

  console.log(
    responseData?.data
  );


  return (
    <div>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[100%] sm:w-[100%] lg:w-[1400px] mt-[100px] px-[20px] lg:p-0">
          <div className="mb-[60px] ">
            <h1 className="text-[28px] text-bgcontainer">TIN TỨC TÀI CHÍNH</h1>
          </div>

          {loading ? (
            <Loading /> // Nếu đang tải dữ liệu, hiển thị Loading
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-x-[50px] gap-y-8 ">

              {responseData?.data?.map((item, index) => (
                <div key={index} className="bg-gray-300 p-4 text-center w-[100%] h-[400px] rounded-lg">
                  <Link to={`/newItem/${item.slug}`}  className="block h-[240px] rounded-lg overflow-hidden mb-[40px]">
                    <img src={`https://be-trending.onrender.com/${item.images}`} alt={item.title} />
                  </Link>
                  <Link className="w-[100%] h-[100%] font-bold  block" to={`/newItem/${item.slug}`}>{item.title}</Link>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default New