import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";


const Itemall = () => {
  const [responseData, setResponseData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= responseData?.last_page) {
      setPage(page);
    }
  };

  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(`https://admin.traveltreasurepro.site/api/list-post?limit=4&page=${page}`)
      .then((response) => {
        setResponseData(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [page]);


  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios
      .get("https://admin.traveltreasurepro.site/api/list-categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log(responseData);

  return (
    <>
      <div className="w-[100%] sm:w-[100%] lg:w-[1400px] mx-[auto] lg:mb-[100px]  mt-[100px]">
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12  lg:gap-[20px] sm:gap-[50px] lg:gap-x-[40px] gap-y-[40px]  rounded-lg p-[40px]"
        >
          <div className="col-span-9  bg-[#fff]  p-[20px] rounded-[16px]">
            <div className="mb-[20px]">
              <div><h1 className="text-[#262626] text-[26px] font-bold leading-[38px] BeautiqueDisplay">
                Trending News</h1></div>
            </div>
            <div className="grid grid-cols-12  gap-y-[20px]">
              {responseData.data?.map((item, index) => (
                <Link
                  className={` ${index === 0 ? "col-span-12 lg:col-span-12 mb-[100px] lg:mb-[30px] flex justify-center items-center   border-b-[1px] pb-[30px] border-[#aaa6a6]  " : " border-r-[1px]  last:border-none border-[#aaa6a6] col-span-6 lg:col-span-4 row-span-1 lg:mb-[30px] flex justify-start px-[10px] sm:px-[16px] lg:px-[32px] h-[100%]"
                    } md:w-[100%] lg:w-[100%] `}
                  to={`/detail/${item.id}`}
                  key={item.id}
                >
                  <div className="lg:flex w-[100%]">
                   
                    <div className={`${index === 0 ? "lg:w-[100%] sm:mt-[40px] sm:mb-[30px] lg:ml-[24px]" : " lg:w-[100%] lg:flex items-start "
                      }`}>
                      <div className=" mb-[20px]">
                        <div className={`${index === 0 ? " text-[#000] text-[24px] sm:text-[28px] lg:text-[20px] w-[80%] mb-[20px] line-clamp-4 BeautiqueDisplay" : " BeautiqueDisplay  line-clamp-6 mt-[14px] lg:mt-[0px] text-[12px]"
                          }`}>
                          {item.name}
                        </div>
                        <div className={`${index === 0 ? " hidden sm:text-[14px] sm:block lg:block lg:w-[400px] sm:mb-[10px] w-[100%] line-clamp-6" : "text-[12px] mt-[20px]"
                          }`}>
                          {item.info}
                        </div>
                      </div>
                    </div>
                    <div className={` ${index === 0 ? "lg:h-[300px]" : "h-[150px] hidden"
                      } md:w-[100%] lg:w-[100%] flex `}>
                      <img
                        src={`https://admin.traveltreasurepro.site/public/upload/articles/${item.picture}`}
                        alt={item.picture}
                        className="rounded-[16px]"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-3">
          </div>
        </div>
      </div>

    </>
  );
};

export default Itemall;
