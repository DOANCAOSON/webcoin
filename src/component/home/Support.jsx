import support from "../../assets/img/support.png";

const Support = () => {
    return (
        <div>
            <div className="w-[100%] justify-center items-center mt-[60px]">
                <div className="w-[1400px] mx-[auto] flex justify-between  border-[1px] border-bgcontainer p-[20px] rounded-lg">

                    <div className="w-[1000px] mx-[auto] flex justify-between ">
                        <div className="flex items-center justify-center">
                            <div className="mr-[20px]">
                                <div className="w-[50px]">
                                    <img src={support} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-[14px]">
                                    Kiến thức cơ bản
                                </div>
                                <div className="font-medium text-[14px]">
                                    Những câu hỏi thường gặp
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="mr-[20px]">
                                <div className="w-[50px]">
                                    <img src={support} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-[14px]">
                                    Chat với chúng tôi
                                </div>
                                <div className="font-medium text-[14px]">
                                    Hỗ trợ trực tuyến
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="mr-[20px]">
                                <div className="w-[50px]">
                                    <img src={support} alt="" />

                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-[14px]">
                                    Hotline
                                </div>
                                <div className="font-medium text-[14px]">
                                    060 3862 516
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Support