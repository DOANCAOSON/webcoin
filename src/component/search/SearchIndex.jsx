import Support from "../home/Support"

function SearchIndex() {
    return (
        <div>
            <div className="w-[100%] flex justify-center items-center ">
                <div className="w-[100%] lg:w-[1400px] h-[300px]  mt-[160px]">
                    <div className="mb-[200px]">
                        <div className="w-[100%] px-[20px]">
                            <div className="mb-[24px]">
                                <h1 className="text-bgcontainer text-[20px]  sm:text-[24px] lg:text-[28px] text-center">
                                    Vui lòng nhập thông tin tra cứu giao dich
                                </h1>
                            </div>
                            <div className="block lg:flex justify-center items-center">
                                <input type="text" placeholder="Nhập mã giao dịch" className="text-[14px] w-[100%] mb-[20px] lg:w-[450px] border-[1px] border-bgcontainer rounded-lg px-[20px] py-[6px]" />
                                <div className="px-[20px] py-[6px] bg-bgcontainer text-center lg:ml-[20px] rounded-lg text-text">
                                    Search
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Support />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchIndex