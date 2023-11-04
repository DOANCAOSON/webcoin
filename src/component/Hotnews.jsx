
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Hotnews = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get("https://admin.traveltreasurepro.site/api/list-post")
      .then((response) => {
        setResponseData(response.data.data.data.data);
        setLoading(true)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, []);


  const getRandomItems = (array, count) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  const randomItems = getRandomItems(responseData, 30);


  return (
    <div className="p-[40px]  w-[100%] md:w-[100%] lg:w-[1400px] mx-auto mb-[100px] mt-[50px] bg-[#fff] lg:p-[40px] rounded-[16px]">
      <div className="text-[32px] mb-[20px] ">List of Related News.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[30px] rounded-lg ">
        {randomItems.map((item) => (
          <Link
            className="hoverbgscalebg-[#fff] hotnew-item hover:shadow-2xl  hover:ease-in transition duration-500 px-[4px]  "
            to={`/detail/${item.id}`}
            key={item.id}
          >
            <div className="rounded-s overflow-hidden mb-[20px] ">
              <img
                src={`https://admin.traveltreasurepro.site//public/upload/articles/${item.picture}`}
                alt={item.picture}
                className="hoverbgscaleitem hover:ease-in transition duration-500"
              />
            </div>

            <div className="p-[10px]">
                <div className="h-[60px] mb-[20px]">
                  <div className="line-clamp-3 text-[12px] font-normal text-[#6C757D]  homelistitem-name">{item.name}</div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotnews;
