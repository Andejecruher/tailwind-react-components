import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { cn } from "@src/lib/utils";
import { useTheme } from "@src/hooks/useTheme";

interface CodeHighlighterProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function CodeHighlighter({
    code,
    language = "tsx",
    showLineNumbers = true,
    className,
}: CodeHighlighterProps) {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <div className="sticky flex justify-end top-0 right-0 p-2 bg-gray-900/50 rounded-tl-lg rounded-tr-lg z-10">
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-md bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>
            <div className={cn("rounded-lg overflow-hidden", className)}>
                <Highlight
                    theme={
                        theme === "system"
                            ? window.matchMedia("(prefers-color-scheme: dark)").matches
                                ? themes.oneDark
                                : themes.oneLight
                            : theme === "dark"
                                ? themes.oneDark
                                : themes.oneLight
                    }
                    code={code.trim()}
                    language={language}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={cn(
                                className,
                                "p-4 text-sm overflow-x-auto",
                                theme === "dark" ? "bg-gray-900" : "bg-gray-50"
                            )}
                            style={style}
                        >
                            {tokens.map((line, i) => (
                                <div
                                    key={i}
                                    {...getLineProps({ line, key: i })}
                                    className="table-row"
                                >
                                    {showLineNumbers && (
                                        <span
                                            key={i}
                                            className="table-cell text-right pr-4 select-none opacity-50 text-xs"
                                        >
                                            {i + 1}
                                        </span>
                                    )}
                                    <span className="table-cell">
                                        {line.map((token, key) => {
                                            const { key: tokenKey, ...tokenProps } = getTokenProps({
                                                token,
                                                key,
                                            });
                                            return (
                                                <span key={tokenKey as React.Key} {...tokenProps} />
                                            );
                                        })}
                                    </span>
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
}
