import logo from "@src/assets/logos/google.png";
import { Share2, Bookmark } from "lucide-react";

export function CardUserTeam() {
    return (
        <div className="card pt-0 text-black relative rounded-3xl w-[80vw] md:pt-7 bg-white shadow-lg">
            <img src={logo} className="absolute md:top-5 md:right-5 md:left-auto md:border-transparent md:translate-0 -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 w-20 aspect-square rounded-full border-solid border-6 border-white" />
            <div className="main p-6 flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
                <h2 className="font-bold mt-5 md:mt-0">Google</h2>
                <h3 className="font-normal text-muted text-base mt-2">Senior</h3>
                <h4 className="font-bold text-xl">Visual Designer</h4>
                <h5 className="font-normal text-muted text-base">London, UK <em className="text-blue-700">(Remote)</em></h5>
            </div>
            <div className="details flex justify-between items-center px-6 py-0 mb-5 clamp-text-card">
                <span className="salary"> 35k<em className="text-muted">/month</em> </span>
                <span className="date text-muted"> 2 weeks ago </span>
            </div>
            <div className="footer flex items-center justify-between gap-2 px-6 py-3 border-t-1 border-solid border-[#e5e9ec]">
                <div className="badge mr-auto items-center gap-3 pr-5 text-sm rounded-[50px] bg-[#f6f9fa] hidden md:inline">
                    <img src="https://avatar.iran.liara.run/public/boy" className="w-10" />
                    <p className="text-muted">
                        <em> 54% </em>
                        <span className="text hidden"> profile match </span>
                    </p>
                </div>
                <button className="bg-transparent border-1 border-solid border-[#e5e9ec] rounded-[50%] w-10 h-10 grid place-items-center text-inherit">
                    <span className="material-symbols-outlined text-xs text-black">
                        <Share2 className="w-5 h-5" />
                    </span>
                </button>
                <button className="bg-transparent border-1 border-solid border-[#e5e9ec] rounded-[50%] w-10 h-10 grid place-items-center text-inherit">
                    <span className="material-symbols-outlined text-xs">
                        <Bookmark className="w-5 h-5" />
                    </span>
                </button>
            </div>
        </div>
    );
}