
import { Share2, Bookmark } from "lucide-react";

interface CardUserTeamProps {
    companyName: string;
    companyLogo: string;
    positionLevel: string;
    positionTitle: string;
    location: string;
    isRemote?: boolean;
    salary: string | number;
    postedAgo: string;
    matchPercentage?: number;
    avatarUrl?: string;
    onShare?: () => void;
    onBookmark?: () => void;
}

export function CardUserTeam({
    companyName,
    companyLogo,
    positionLevel,
    positionTitle,
    location,
    isRemote = false,
    salary,
    postedAgo,
    matchPercentage,
    avatarUrl,
    onShare,
    onBookmark,
}: CardUserTeamProps) {
    return (
        <div className="pt-0 text-black relative rounded-3xl w-full md:pt-7 bg-white shadow-lg">
            <img
                src={companyLogo}
                className="absolute md:top-5 md:right-5 md:left-auto md:border-transparent md:translate-0 -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 w-20 aspect-square rounded-full border-solid border-6 border-white"
            />
            <div className="p-6 flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
                <h2 className="font-bold mt-5 md:mt-0">{companyName}</h2>
                <h3 className="font-normal text-muted text-base mt-2">{positionLevel}</h3>
                <h4 className="font-bold text-xl">{positionTitle}</h4>
                <h5 className="font-normal text-muted text-base">
                    {location}
                    {isRemote && <em className="text-blue-700"> (Remote)</em>}
                </h5>
            </div>
            <div className="flex justify-between items-center px-6 py-0 mb-5 clamp-text-card">
                <span>
                    {salary}
                    <em className="text-muted">/month</em>
                </span>
                <span className="date text-muted">{postedAgo}</span>
            </div>
            <div className="flex items-center justify-between gap-2 px-6 py-3 border-t-1 border-solid border-[#e5e9ec]">
                {matchPercentage !== undefined && avatarUrl && (
                    <div className="mr-auto items-center gap-3 pr-5 text-sm rounded-[50px] bg-[#f6f9fa] hidden md:inline-flex">
                        <img src={avatarUrl} className="w-10" />
                        <p className="text-muted">
                            <em>{matchPercentage}%</em>
                            <span className="text hidden md:inline"> profile match </span>
                        </p>
                    </div>
                )}
                <button
                    className="bg-transparent border-1 border-solid border-[#e5e9ec] rounded-[50%] w-10 h-10 grid place-items-center text-inherit"
                    onClick={onShare}
                >
                    <span className="text-xs text-black">
                        <Share2 className="w-5 h-5" />
                    </span>
                </button>
                <button
                    className="bg-transparent border-1 border-solid border-[#e5e9ec] rounded-[50%] w-10 h-10 grid place-items-center text-inherit"
                    onClick={onBookmark}
                >
                    <span className="text-xs">
                        <Bookmark className="w-5 h-5" />
                    </span>
                </button>
            </div>
        </div>
    );
}
