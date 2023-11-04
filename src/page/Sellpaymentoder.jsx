import Support from "../component/home/Support"
import qrcode from "../assets/img/qrmeta.png"
const Sellpaymentoder = () => {
    return (
        <div>
            <div className="w-[100%] flex justify-center items-center mt-[100px]">
                <div className="w-[1400px]" >
                    <div>
                        <div className="inline-block border-t-[1px] border-l-[1px] border-r-[1px] border-Black px-[20px] py-[4px]">
                            <p className="text-[18px] text-bgcontainer">
                                THÔNG TIN ĐƠN HÀNG
                            </p>
                        </div>
                    </div>
                    <div className="border-[1px] border-Black py-[20px]">
                        <div className="flex items-center py-[20px] px-[20px]">
                            <p>
                                <span>Giá mua:</span>
                            </p>
                            <p className="mx-[8px]">
                                <span className="text-boderhex">
                                    2,202,047 VND
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
                        <div>
                            <div>
                                <div className="px-[20px]">
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Mã giao dịch
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1 py-[8px]   ">
                                            BSE2F8BBZC2C3
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Hướng dẫn
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1 py-[8px]">
                                            <div className="text-[14px] mb-[8px] font-bold">
                                                <div className="w-[150px]">
                                                    <img src={qrcode} alt="" />
                                                </div>
                                            </div>
                                            <div className="mb-[8px]">
                                                <div className="text-[14px] my-[20px]">
                                                    <span className="font-bold">
                                                        Vui lòng chuyển đùng 0.1 USDT vào địa chỉ
                                                    </span>
                                                </div>
                                                <div className="text-[14px] flex items-center">
                                                    <div>
                                                        <input className="border-[1px] border-Black w-[500px] h-[30px] px-[20px] py-[4px]" type="text" placeholder="VD: 0xd11283E1Ac1431B8CC0A5D9ED69CbaB0739CA99c" />
                                                    </div>
                                                    <div className="bg-bgcontainer px-[20px] py-[4px] ml-[14px] rounded-lg text-text">
                                                        Copy
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">

                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[12px] mb-[2px] font-medium py-[8px]">
                                                Chú ý: Sau khi chuyển USDT , chúng tôi sẽ thanh toán ngay khi có 1 xác nhận trên ví coinbase. Việc xác nhận hoàn toàn tự động bời hệ thống USDT trên thế giới nên bạn không cần làm gì thêm.

                                            </div>
                                            <div className="text-[12px] mb-[4px] font-medium py-[8px]">
                                                Chú ý: Rằng giá USDT biến động liên tục. Chúng tôi sẽ chốt giá và chuyển khoảng ngân hàng cho bạn ngay lập tức sau khi nhận được thống báo.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Thời gian còn lại
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] font-bold text-boderhex py-[8px]">
                                                29 phút : 13 giây
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            <p>Địa chỉ nhận tiền</p>
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] font-light py-[8px]">
                                                <p className="font-bold">
                                                    <span className="text-boderhex">
                                                        62610000582882
                                                    </span>
                                                    <span className="mx-[4px]">
                                                        -
                                                    </span>
                                                    <span className="text-boderhex">
                                                        ĐOAN CAO SON
                                                    </span>
                                                    <span className="mx-[4px]">
                                                        -
                                                    </span>
                                                    <span>
                                                        Vietcomback
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Địa chỉ nhận tiền
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px] font-bold">
                                                0xd11283E1Ac1431B8CC0A5D9ED69CbaB0739CA99c
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Trạng thái
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px] font-semibold">
                                                Đang chờ nhận tiền
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Bạn trả
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px]">
                                                0.1<span>
                                                    USDT
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Bạn nhận
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px]">
                                                227,464 <span>
                                                    VND
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Tỷ giá
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px]">
                                                2,203,000 <span>
                                                    VND
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="w-[300px] pl-[40px] font-bold">
                                            Thời gian giao dịch
                                        </div>
                                        <div className="border-l-[1px] border-Black pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px]">
                                                <span> 11-12-03</span><span className="ml-[3px]">
                                                    19/05/2023
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-[1px] border-Black">
                                        <div className="pl-[60px] flex-1">
                                            <div className="text-[14px] mb-[8px] py-[8px]">
                                                <span className="ml-[3px]">
                                                    Chúng tôi sẽ chuyển USDT vào tài khoản của bạn sau khi nhận được đúng số tiền với nội dung như trên. Chú ý giá USDT biến động liên tục, chúng tôi sẽ chốt lại số lượng USDT ngay khi nhận được thanh toán của bạn.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Support />
        </div>
    )
}

export default Sellpaymentoder