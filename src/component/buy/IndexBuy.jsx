import { Link } from "react-router-dom"

const IndexBuy = () => {
    return (
        <div>
            <div className="w-[100%] flex justify-center items-center mt-[100px]">
                <div className="w-[1400px]" >
                    <div>
                        <div className="inline-block border-t-[1px] border-l-[1px] border-r-[1px] border-Black px-[20px] py-[4px]">
                            <p className="text-[18px] text-bgcontainer">
                                MUA NGAY
                            </p>
                        </div>
                    </div>
                    <div className="border-[1px] border-Black">
                        <div className="flex items-center py-[20px] px-[20px]">
                            <p>
                                <span>Giá mua:</span>
                            </p>
                            <p className="mx-[8px]">
                                <span className="text-boderhex">
                                    2,522,047 VND
                                </span>
                            </p>
                            <p className="mx-[8px]">
                                <span>
                                    /
                                </span>
                            </p>
                            <p>
                                <span className="text-bgcontainer">
                                    1 USDT
                                </span>
                            </p>
                        </div>
                        <div className="px-[20px] py-[4px] font-medium text-[14px] bg-bgcontainer text-text border-[1px] border-Black">
                            Giao dịch tự động trong vòng 5 đến 10 s qua Vietcombank 24/7 (kể cả ban đêm và cuối tuần)
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className="w-[100%] flex justify-center">
                                        <div className="">
                                            <div className="mt-[60px] rounded-lg px-[20px] py-[40px] border-b-1 border border-gray-400">
                                                <div className="flex items-center px-[20px] py-[8px] mb-[8px]">
                                                    <label className="w-[200px]" htmlFor=""> Chúng tôi còn</label>
                                                    <div>
                                                        <input className="px-[20px] border-[1px] border-Black mx-[40px]  text-[12px] h-[30px] w-[250px]" type="text" value="44.44" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px] rounded-lg">USDT</button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[20px] py-[4px] mb-[8px]">
                                                    <label className="w-[200px]" htmlFor=""> Số lượng cần mua  </label>
                                                    <div>
                                                        <input className="px-[20px] border-[1px] border-Black mx-[40px] text-[12px] h-[30px] w-[250px]" type="text" placeholder="Nhập số lượng" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">USDT</button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[20px] py-[4px] mb-[8px]">
                                                    <label className="w-[200px]" htmlFor=""> Số tiền cần trả  </label>
                                                    <div>
                                                        <input className="px-[20px] border-[1px] border-Black mx-[40px] text-[12px]  h-[30px] w-[250px]" type="text" placeholder="Nhập số lượng" />
                                                        <button className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">VND</button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[20px] py-[4px] mb-[8px]">
                                                    <label className="w-[240px] " htmlFor=""> Thanh toán qua </label>
                                                    <div>
                                                        <button className="text-black rounded-lg text-[12px]">Vietcombank</button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[20px] py-[4px] mb-[8px]">
                                                    <label className="w-[200px]" htmlFor=""> Địa chỉ USDT của bạn  </label>
                                                    <div>
                                                        <input className="px-[20px] border-[1px] border-Black mx-[40px] text-[12px]  h-[30px] w-[250px]" type="text" placeholder="VD: 0xd11283E1Ac1431B8CC0A5D9ED69CbaB0739CA99c" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[20px] py-[4px] mb-[8px]">
                                                    <label className="w-[240px]" htmlFor=""> </label>
                                                    <div>
                                                        <Link to="/selloder" className="bg-bgcontainer text-text px-[20px] py-[4px]  rounded-lg">Tiếp tục</Link>
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