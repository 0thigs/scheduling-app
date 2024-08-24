import Link from "next/link";

export function Login_Register_Background() {
    return (
        <div
                className="hidden lg:flex lg:w-1/2 bg-center bg-cover bg-[url('../../public/images/register_login_background.png')]"
            >
                <div className="flex flex-col items-center justify-end w-full gap-[25px] p-8 bg-black bg-opacity-50">
                    <h3 className="text-lg font-light text-center text-white lg:text-2xl">Agilidade e beleza, uma combinação perfeita</h3>
                    <div className="flex gap-[17px]">
                        <button className="bg-[#F5F5F7] hover:bg-[#9f9f9f] transition duration-100 flex justify-center items-center text-center px-[20px] py-[12px] rounded-full">
                            Saiba mais
                        </button>
                        <Link href={"/login"} className="bg-transparent text-white border border-white hover:border-[#9f9f9f] transition duration-100 flex justify-center items-center text-center px-[26px] py-[12px] rounded-full">
                            Logar
                        </Link>
                    </div>
                </div>
            </div>
    )
}