import logo from "@src/assets/logos/google.png";
import { Share2, Bookmark } from "lucide-react";

export function CardUserTeam() {
    return (
        <div className="bg-white shadow-2xl pt-0 max-w-[500px] relative md:rounded-3xl md:w-[80vw] md:pt-7 ">
            <img src={logo} className="absolute top-5 right-5 left-auto translate-0 border-transparent clamp-img-card md:top-0 md:left-[50%] md:-translate-x-1/2" />
            <div className="text-left">
                <h2>Google</h2>
                <h3>Senior</h3>
                <h4>Visual Designer</h4>
                <h5 className="mb-7">London, UK <em>(Remote)</em></h5>
            </div>
            <div className="details">
                <span className="salary"> 35k<em>/month</em> </span>
                <span className="date"> 2 weeks ago </span>
            </div>
            <div className="footer">
                <div className="badge">
                    <img src="https://avatar.iran.liara.run/public/boy" className="w-10" />
                    <p className="text-muted">
                        <em> 54% </em>
                        <span className="inline"> profile match </span>
                    </p>
                </div>
                <button>
                    <span className="material-symbols-outlined"> <Share2 className="w-auto h-auto" /> </span>
                </button>
                <button>
                    <span className="material-symbols-outlined"> <Bookmark className="w-auto h-auto" /> </span>
                </button>
            </div>
        </div>
    );
}