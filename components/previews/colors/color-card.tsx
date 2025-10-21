import { memo, useState } from "react"
import { FaCheck, FaCopy } from "react-icons/fa";

export interface ColorSwatchProps {
    name: string;
    classes: string;
}

export const ColorCard = memo(({ name, classes }: ColorSwatchProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(classes);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='flex gap-2 hover:bg-canvas-bg/20 p-2 items-center'>
            <div className={`${classes} h-12 w-12 mb-1 rounded-sm border`}></div>
            <div className="flex flex-col gap-1">
                <h4 className='text-canvas-text-contrast text-sm font-semibold leading-tight'>{name}</h4>
                <div
                    onClick={handleCopy}
                    className="group relative text-canvas-text text-xs font-mono rounded inline-flex gap-1 items-center justify-between w-full py-0.5"
                >
                    <code className="truncate group-hover:cursor-pointer flex items-center gap-1">
                        {classes}
                        <button
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                            {copied ? (
                                <FaCheck className="w-[10px] h-[10px] text-canvas-text" />
                            ) : (
                                <FaCopy className="w-[10px] h-[10px] text-canvas-text" />
                            )}
                        </button>
                    </code>
                </div>

            </div>
        </div>
    );
});