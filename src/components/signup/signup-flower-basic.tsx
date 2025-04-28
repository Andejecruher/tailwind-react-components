import { ArrowRight } from "lucide-react"
import FlowersImg from "@src/assets/images/flowers.png"
import FlowersSvg from "@src/assets/logos/flowers.svg"


export function SignUpFlowerBasic() {
    return (
        <div className="card bg-white rounded-4xl @md:w-[85%] w-2/3 max-w-[800px] pr-0 @md:p-4 flex @md:items-center @md:flex-row flex-col shadow-mega text-black">
            <div className="image relative rounded-3xl overflow-hidden self-stretch @md:w-[45%] w-full @md:h-auto h-[280px]">
                <img src={FlowersImg} className="absolute w-full @md:h-full h-[180%] aspect-[2/1] object-cover" />
            </div>
            <div className="content flex flex-col justify-center @md:items-start items-center text-left flex-[1_1_50%] @md:pt-0 @md:px-8 @md:pb-5 pt-0 px-5 pb-5">
                <img src={FlowersSvg} className="h-6 @md:mt-16 mt-12 mb-2.5" />
                <h2 className="font-normal text-base mt-0 mx-0 mb-10 text-muted">Create an account</h2>
                <form className="form grid gap-3 w-full">
                    <div className="textbox relative">
                        <input className="transition-all duration-300 text-base px-4 py-0 w-full h-14 border-0 rounded-lg pt-2.5 bg-[#f6f6fb] outline-none shadow-[0_0_0_2px_t`ransparent] focus:shadow-[0_0_0_2px] peer ring-2 ring-transparent focus:ring-2 focus:ring-[var(--color-primary)]" type="text" required />
                        <label className="transition duration-300 text-muted absolute top-1/2 left-4 transform translate-x-0 -translate-y-1/2 origin-left pointer-events-none peer-focus:scale-[0.700] peer-focus:-translate-y-[112%] peer-valid:scale-[0.725] peer-valid:-translate-y-[112%] peer-valid:text-gray-500">Email</label>
                    </div>
                    <div className="textbox relative">
                        <input className="transition duration-300 text-base px-4 py-0 w-full h-14 border-0 rounded-lg pt-2.5 bg-[#f6f6fb] outline-none shadow-[0_0_0_2px_transparent] focus:shadow-[0_0_0_2px] peer ring-2 ring-transparent focus:ring-2 focus:ring-[var(--color-primary)]" type="password" required />
                        <label className="transition duration-300 text-muted absolute top-1/2 left-4 transform translate-x-0 -translate-y-1/2 origin-left pointer-events-none peer-focus:scale-[0.700] peer-focus:-translate-y-[112%] peer-valid:scale-[0.725] peer-valid:-translate-y-[112%] peer-valid:text-gray-500">Password</label>
                    </div>
                    <button className="text-base px-4 py-0 w-full h-14 border-0 rounded-lg flex items-center justify-between bg-purple-600 text-white" type="submit">
                        <p>Continue</p>
                        <span className="material-symbols-outlined">
                            <ArrowRight size={18} color="#fff" />
                        </span>
                    </button>
                </form>
                <p className="mt-2.5 text-muted">Already have an account? <a className="text-purple-600 font-semibold">Sign In</a></p>
            </div>
        </div>
    )
}