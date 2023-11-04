import { Link } from "react-router-dom";
import backgroundImage from "../../assets/img/bghome1.jpg";
import navbg from "../../assets/img/homeusdt.png";

const HomeIndex = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }} className="w-[100%] flex justify-center items-center  mt-[80px]">
      <div className="flex items-center justify-center  w-[1400px] h-[600px]">
        <div className="flex-1">
          <div>
            <h1 className="text-center text-text text-[42px] font-black">
              CHỢ MUA BÁN <span className="text-bgcontainer">
                USDT
              </span>
            </h1>
          </div>
          <div className="mb-[40px]">
            <h2 className="text-center text-text font-extralight text-[16px]">
              Nơi mua bán USDT AN TOÀN VÀ NHANH CHỐNG
            </h2>
          </div>
          <div className="flex justify-around">
            <div className="space-y-4">
              <div className="mb-[8px] text-center">
                <p>
                  <span className="text-text text-[26px]  ">
                    BẠN MUỐN MUA:
                  </span>
                </p>
              </div>

              <div className="mb-[8px] w-[100%] text-center">
                <p>
                  <span className="text-bgcontainer text-[24px]  ">
                    2,508,795 VND
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <Link to="/buy">
                  <button className="text-text rounded-sm px-[20px] py-[4px] bg-bgcontainer text-[24px]">
                    Mua ngay
                  </button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="mb-[8px] text-center">
                <p>
                  <span className="text-text text-[26px]  ">
                    BẠN MUỐN BÁN:
                  </span>
                </p>
              </div>

              <div className="mb-[8px] w-[100%] text-center">
                <p>
                  <span className="text-[#DD0000] text-[24px]  ">
                    2,508,795 VND
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <p>
                  <button className="text-text rounded-sm px-[20px] py-[4px] bg-[#DD0000] text-[24px]">
                    Mua ngay
                  </button>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[300px] ">
            <img src={navbg} alt="usdt" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeIndex