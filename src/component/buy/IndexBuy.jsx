import { Link } from "react-router-dom"

const IndexBuy = () => {
    return (
        <div>
            <div className="w-[100%] flex justify-center items-center mt-[40px] sm:mt-[60px] lg:mt-[100px]">
                <div className="w-[100%] px-[20px] lg:w-[1400px]" >
                    <div>
                        <div className="inline-block border-t-[1px] border-l-[1px] border-r-[1px] border-Black px-[20px] py-[4px]">
                            <p className="text-[14px] lg:text-[18px] text-bgcontainer">
                                MUA NGAY
                            </p>
                        </div>
                    </div>
                    <div className="border-[1px] border-Black">
                        <div className="flex items-center py-[20px] px-[20px]">
                            <p>
                                <span className="text-[13px] " >Giá mua:</span>
                            </p>
                            <p className="mx-[8px]">
                                <span className="text-boderhex text-[12px]">
                                    2,522,047 VND
                                </span>
                            </p>
                            <p className="mx-[8px] text-[13px]">
                                <span>
                                    /
                                </span>
                            </p>
                            <p>
                                <span className="text-bgcontainer text-[13px]">
                                    1 USDT
                                </span>
                            </p>
                        </div>
                        <div className="px-[20px] py-[4px] font-medium text-[12px] sm:text-[13px] lg:text-[14px] bg-bgcontainer text-text border-x-[0px] border-[1px] border-Black">
                            Giao dịch tự động trong vòng 5 đến 10 s qua Vietcombank 24/7 (kể cả ban đêm và cuối tuần)
                        </div>
                        <div className="w-[100%]">
                            <div className="w-[100%]">
                                <div className="w-[100%]">
                                    <div className="w-[100%] flex justify-center">
                                        <div className="w-[100%]">
                                            <div className="mt-[60px] lg:rounded-lg px-[20px] py-[40px] border-x-0 lg:border-b-1 border border-gray-400">
                                                <div className="sm:flex sm:items-center lg:flex lg:items-center lg:px-[20px] py-[8px] mb-[8px]">
                                                    <label className="sm:w-[200px] lg:w-[200px]" htmlFor=""> Chúng tôi còn</label>
                                                    <div className="flex justify-between sm:m-0  mt-[10px] lg:m-0  sm:block lg:block">
                                                        <input className="px-[20px] border-[1px] border-Black  sm:mr-[20px]   lg:mx-[40px]  text-[12px] h-[30px]  lg:w-[250px]" type="text" value="44.44" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px] rounded-lg">USDT</button>
                                                    </div>
                                                </div>
                                                <div className="sm:flex sm:items-center lg:flex lg:items-center lg:px-[20px] py-[8px] mb-[8px]">
                                                    <label className="sm:w-[200px] lg:w-[200px]" htmlFor=""> Số lượng cần mua  </label>
                                                    <div className="flex justify-between sm:m-0  mt-[10px] lg:m-0  sm:block lg:block">
                                                        <input className="px-[20px] border-[1px] border-Black  sm:mr-[20px]   lg:mx-[40px]  text-[12px] h-[30px]  lg:w-[250px]" type="text" placeholder="Nhập số lượng" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">USDT</button>
                                                    </div>
                                                </div>
                                                <div className="sm:flex sm:items-center lg:flex lg:items-center lg:px-[20px] py-[8px] mb-[8px]">
                                                    <label className="sm:w-[200px] lg:w-[200px]" htmlFor=""> Số tiền cần trả  </label>
                                                    <div className="flex justify-between sm:m-0  mt-[10px] lg:m-0  sm:block lg:block">
                                                        <input className="px-[20px] border-[1px] border-Black  sm:mr-[20px]   lg:mx-[40px]  text-[12px] h-[30px]  lg:w-[250px]" type="text" placeholder="Nhập số lượng" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">VND</button>
                                                    </div>
                                                </div>
                                                <div className="sm:flex sm:items-center lg:flex lg:items-center lg:px-[20px] py-[8px] mb-[8px]">
                                                    <label className="w-[240px] " htmlFor=""> Thanh toán qua </label>
                                                    <div>
                                                        <button className="text-black rounded-lg text-[14px]">Vietcombank</button>
                                                    </div>
                                                </div>
                                                <div className="lg:flex lg:items-center lg:px-[20px] py-[8px]  lg:mb-[8px] ">
                                                    <label className="sm:w-[200px] lg:w-[200px] " htmlFor=""> Địa chỉ USDT của bạn  </label>
                                                    <div className="mt-[10px]">
                                                        <input className="px-[20px] border-[1px] border-Black  sm:mr-[20px]   lg:mx-[40px]  text-[12px] h-[30px]  lg:w-[250px]" type="text" placeholder="VD: 0xd11283E1Ac1431B8CC0A5D9ED69CbaB0739CA99c" />
                                                    </div>
                                                </div>
                                                <div className="sm:flex sm:items-center lg:flex lg:items-center lg:px-[20px] py-[8px] mb-[8px]">
                                                    <label className="w-[240px]" htmlFor=""> </label>
                                                    <div>
                                                        <Link to="/buyoder" className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">Tiếp tục</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[100%] h-[3px] bg-bgcontainer mt-[60px] rounded-3xl">
                                            </div>
                                            <div className="mt-[20px] px-[20px] py-[40px]  ">
                                                <div className="px-[20px] py-[8px] mb-[8px]">
                                                    <div className="text-[14px] font-bold mb-[12px]">
                                                        Hướng dẫn giao dịch.
                                                    </div>
                                                    <ul className="px-[20px] text-[12px] mb-[20px]">
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Nhập số lượng USDT Muốn mua.
                                                        </li >
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Nhập địa chỉ ví USDT của bạn.
                                                        </li>
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Bấm vào nút Tiếp tục.
                                                        </li>
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Đăng nhập và thanh toàn bằng tài khoản VCB (Vietcombank) của bạn.
                                                        </li>
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Hệ thống sẽ chuyển USDT cho baj trong giây lát.
                                                        </li>
                                                    </ul>
                                                    <div className="text-[14px] font-bold mb-[12px]">
                                                        Chú ý
                                                    </div>
                                                    <ul className="px-[20px] text-[12px] mb-[20px]">
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Kiểm tra thông tin ngâng hàng.
                                                        </li >
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Kiểm tra thông tin địa chỉ ví USDT.
                                                        </li>
                                                        <li className="list-disc mb-[4px] font-normal">
                                                            Mọi thắt mắt xin vui lòng liên hệ với ban quản trị!
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexBuy