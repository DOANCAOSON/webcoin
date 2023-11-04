
const Loginmodaindex = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="w-[500px] h-[250px] border-[2px] border-bgcontainer mt-[150px] rounded-lg">
                    <h1 className="text-center mt-[30px] font-bold text-[20px] mb-[30px]">
                        VUI LÒNG NHẬP GMAIL
                    </h1>
                    <div className="flex justify-center mb-[40px]">
                        <input type="text" placeholder="Vui lòng nhập gmail" className="w-[80%] px-[20px] py-[4px] rounded-lg border-[2px] border-bgcontainer" />
                    </div>
                    <div className="flex justify-center  " >
                        <input className="bg-bgcontainer px-[20px] py-[4px] text-text rounded-lg" type="button" value="Tiếp tục" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginmodaindex