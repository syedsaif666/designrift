import { Check, Copy } from "lucide-react";
import { memo, useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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
        <div className='group relative flex gap-2 hover:bg-canvas-bg/20 p-2 items-center'>
            <div className={`${classes} h-12 w-12 mb-1`}>
                <div className='absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className="flex flex-col gap-1">
            <h4 className='text-canvas-text-contrast text-sm font-semibold leading-tight'>{name}</h4>
            <code className='text-canvas-text text-xs font-mono rounded inline-block bg-canvas-bg px-1 py-0.5 w-fit'>
                {classes}
            </code>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={handleCopy}
                        className='absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1.5 rounded hover:bg-canvas-bg-hover active:scale-95'
                    >
                        {copied ? (
                            <Check className='w-4 h-4 text-canvas-text' />
                        ) : (
                            <Copy className='w-4 h-4  cursor-pointer' />
                        )}
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    copy color class
                </TooltipContent>
            </Tooltip>
            </div>
        </div>
    );
});