import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const Loginmodaindex = () => {
    const { control, handleSubmit, formState, setError } = useForm();
    const { errors } = formState;
    const [isRegistered, setIsRegistered] = useState(false);

    const onSubmit = async (data) => {
        try {
            // Gửi yêu cầu POST đến API với địa chỉ email
            await axios.post("https://be-trending.onrender.com/landing/auth/sign-in", {
                email: data.email,
            });
            setIsRegistered(true);
        } catch (error) {
            console.error(error);
            setError("email", { type: "manual", message: "Có lỗi xảy ra khi đăng ký." });
        }
    };

    return (
        <div className="flex justify-center items-center">
            {isRegistered ? (
                <div className="mt-[105px]">
                    <div className="text-[38px] text-bgcontainer text-center mb-[24px] font-bold">
                        Thank You !!
                    </div>
                    <div className="text-[20px] text-bgcontainer font-medium">
                        Vui lòng vào gmail verify action account
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[500px] h-[250px] border-[2px] border-bgcontainer mt-[150px] rounded-lg"
                >
                    <h1 className="text-center mt-[30px] font-bold text-[20px] mb-[30px]">
                        VUI LÒNG NHẬP GMAIL
                    </h1>
                    <div className="flex justify-center mb-[40px]">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Email là trường bắt buộc",
                                pattern: {
                                    value: /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Email không hợp lệ",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    type="email"
                                    {...field}
                                    placeholder="Vui lòng nhập gmail"
                                    className={`w-[80%] px-[20px] py-[4px] rounded-lg border-[2px] border-bgcontainer text-center ${errors.email ? "border-red-500" : ""
                                        }`}
                                />
                            )}
                        />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <div className="flex justify-center">
                        <button className="bg-bgcontainer px-[20px] py-[4px] text-text rounded-lg" type="submit">
                            Đăng Ký
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Loginmodaindex;
