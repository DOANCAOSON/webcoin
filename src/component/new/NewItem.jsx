import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";



const NewItem = () => {

  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  useEffect(() => {
    // Gửi yêu cầu API và cập nhật trạng thái khi nhận được dữ liệu
    axios
      .get(
        `https://be-trending.onrender.com/landing/articles/${slug}`
      )
      .then((response) => {
        setResponseData(response?.data);
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



  const htmlString = responseData?.body;
  console.log(responseData);

  return (
    <div>
      <div className="w-[100%] flex justify-center items-center">

        <div className="mt-[100px] w-[100%] lg:w-[1200px] px-[20px] lg:p-[0px]">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <h1 className="text-center text-bgcontainer text-[32px] font-semibold mb-[32px]">
                {responseData.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewItem