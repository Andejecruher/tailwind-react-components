import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

export function SharedButton({ label, disabled = false }: { label: string; disabled?: boolean }) {
    return (
        <button
            className={`font-custom relative overflow-hidden justify-center flex w-36 h-12 rounded-3xl border-radius text-white bg-blue-600 cursor-pointer transition-all duration-500 ease-in-out group hover:[border-radius:0.5rem] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            <span
                className="absolute inset-0 flex items-center justify-center gap-2 text-md transition-all duration-300 ease-in-out translate-y-0 group-hover:-translate-y-10 group-hover:opacity-0"
            >
                <span>{label}</span>
                <Share2 className="w-4 h-4" />
            </span>
            <span
                className="absolute inset-0 flex gap-5 items-center justify-center px-7 opacity-0 transition-opacity ease-in-out group-hover:opacity-100"
            >
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('Twitter clicked');
                    }}
                    className="transition-transform text-lg duration-200 ease-in-out translate-y-10 group-hover:translate-y-0"
                >
                    <Twitter className="w-4 h-4" />
                </a>
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('Facebook clicked');
                    }}
                    className="transition-transform text-lg duration-200 ease-in-out translate-y-10 group-hover:translate-y-0 group-hover:delay-75"
                >
                    <Facebook className="w-4 h-4" />
                </a>
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('Linkedin clicked');
                    }}
                    className="transition-transform text-lg duration-200 ease-in-out translate-y-10 group-hover:translate-y-0 group-hover:delay-150"
                >
                    <Linkedin className="w-4 h-4" />
                </a>
            </span>
        </button>
    );
}

// Display name for debugging purposes
SharedButton.displayName = 'SharedButton';