// 'use client'
// import React, { useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { Code, Copy, Download, X } from 'lucide-react';
// import { Button } from './button';

// interface CodeDialogProps {
//   cssCode: string;
//   tailwindCode: string;
// }

// const CodeDialog = ({ cssCode, tailwindCode }: CodeDialogProps) => {
//   const [copiedText, setCopiedText] = useState('');

//   const copyToClipboard = (text: string, type: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(type);
//     setTimeout(() => setCopiedText(''), 2000);
//   };

//   const downloadCSS = (content: string, filename: string) => {
//     const blob = new Blob([content], { type: 'text/css' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <Button
//           color="primary"
//           variant="solid"
//           size="default"
//           leadingIcon={<Code size={16} />}
//           className='flex-1'
//           fullWidth={true}
//         >
//           Get Code
//         </Button>
//       </Dialog.Trigger>
      
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" />
        
//         <Dialog.Content className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] bg-canvas-bg rounded-lg shadow-lg p-6 overflow-hidden">
//           <Dialog.Title className="text-xl font-bold text-canvas-text-contrast mb-4">
//             Generated Theme Code
//           </Dialog.Title>
          
//           <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-120px)] pr-2">
//             {/* CSS Variables */}
//             <div className="bg-canvas-bg-subtle border border-canvas-border rounded-lg p-4">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-semibold text-canvas-text-contrast">
//                   CSS Variables
//                 </h3>
//                 <div className="flex gap-2">
//                   <Button
//                     color="neutral"
//                     variant="outline"
//                     size="sm"
//                     onClick={() => copyToClipboard(cssCode, 'css')}
//                     className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
//                   >
//                     <Copy size={14} />
//                     {copiedText === 'css' ? 'Copied!' : 'Copy'}
//                   </Button>
//                   <Button
//                     color="neutral"
//                     variant="outline"
//                     size="sm"
//                     onClick={() => downloadCSS(cssCode, 'global.css')}
//                     className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
//                   >
//                     <Download size={14} />
//                     Download
//                   </Button>
//                 </div>
//               </div>
//               <pre className="text-sm text-canvas-text bg-canvas-bg p-3 rounded overflow-x-auto max-h-64">
//                 {cssCode}
//               </pre>
//             </div>

//             {/* Tailwind Config */}
//             <div className="bg-canvas-bg-subtle border border-canvas-border rounded-lg p-4">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-semibold text-canvas-text-contrast">
//                   Tailwind Configuration
//                 </h3>
//                 <Button
//                   color="neutral"
//                   variant="outline"
//                   size="sm"
//                   onClick={() => copyToClipboard(tailwindCode, 'tailwind')}
//                   className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
//                 >
//                   <Copy size={14} />
//                   {copiedText === 'tailwind' ? 'Copied!' : 'Copy'}
//                 </Button>
//               </div>
//               <pre className="text-sm text-canvas-text bg-canvas-bg p-3 rounded overflow-x-auto max-h-64">
//                 {tailwindCode}
//               </pre>
//             </div>
//           </div>
          
//           <Dialog.Close asChild>
//             <Button
//               color="neutral"
//               variant="ghost"
//               size="sm"
//               className="absolute top-4 right-4 rounded-full hover:bg-canvas-bg-hover text-canvas-text"
//               aria-label="Close"
//             >
//               <X size={18} />
//             </Button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export { CodeDialog }; 

'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Code, Copy, Download, X } from 'lucide-react';
import { Button } from './button';

interface CodeDialogProps {
  cssCode: string;
  tailwindV3Config: string;
  tailwindV4Complete: string;
}

const CodeDialog = ({ cssCode, tailwindV3Config, tailwindV4Complete }: CodeDialogProps) => {
  const [copiedText, setCopiedText] = useState('');
  const [selectedVersion, setSelectedVersion] = useState<'v3' | 'v4'>('v4');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const downloadFile = (content: string, filename: string, type: string = 'text/css') => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          color="primary"
          variant="solid"
          size="default"
          leadingIcon={<Code size={16} />}
          className='flex-1'
          fullWidth={true}
        >
          Get Code
        </Button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" />
        
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[85vh] bg-canvas-bg rounded-lg shadow-lg p-6 overflow-hidden">
          <Dialog.Title className="text-xl font-bold text-canvas-text-contrast mb-4">
            Generated Theme Code
          </Dialog.Title>
          
          {/* Version Selector */}
          <div className="flex gap-2 mb-6">
            <Button
              color={selectedVersion === 'v3' ? 'primary' : 'neutral'}
              variant={selectedVersion === 'v3' ? 'solid' : 'outline'}
              size="sm"
              onClick={() => setSelectedVersion('v3')}
              className="px-4 py-2"
            >
              Tailwindcss v3
            </Button>
            <Button
              color={selectedVersion === 'v4' ? 'primary' : 'neutral'}
              variant={selectedVersion === 'v4' ? 'solid' : 'outline'}
              size="sm"
              onClick={() => setSelectedVersion('v4')}
              className="px-4 py-2"
            >
              Tailwindxss v4
            </Button>
          </div>
          
          <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-180px)] pr-2">
            {selectedVersion === 'v3' ? (
              <>
                {/* CSS Variables for v3 */}
                <div className="bg-canvas-bg-subtle border border-canvas-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-canvas-text-contrast">
                      CSS Variables (global.css)
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(cssCode, 'css')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Copy size={14} />
                        {copiedText === 'css' ? 'Copied!' : 'Copy'}
                      </Button>
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(cssCode, 'global.css')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <pre className="text-sm text-canvas-text bg-canvas-bg p-3 rounded overflow-x-auto max-h-64">
                    {cssCode}
                  </pre>
                </div>

                {/* Tailwind Config for v3 */}
                <div className="bg-canvas-bg-subtle border border-canvas-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-canvas-text-contrast">
                      Tailwind Configuration (tailwind.config.js)
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(tailwindV3Config, 'tailwind-v3')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Copy size={14} />
                        {copiedText === 'tailwind-v3' ? 'Copied!' : 'Copy'}
                      </Button>
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(tailwindV3Config, 'tailwind-colors.js', 'text/javascript')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <pre className="text-sm text-canvas-text bg-canvas-bg p-3 rounded overflow-x-auto max-h-64">
                    {tailwindV3Config}
                  </pre>
                  <p className="text-xs text-canvas-text mt-2">
                    Add this to your tailwind.config.js theme.extend section
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Complete CSS file for v4 */}
                <div className="bg-canvas-bg-subtle border border-canvas-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-canvas-text-contrast">
                    CSS Variables with Tailwind Theme  (global.css)

                    </h3>
                    <div className="flex gap-2">
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(tailwindV4Complete, 'tailwind-v4')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Copy size={14} />
                        {copiedText === 'tailwind-v4' ? 'Copied!' : 'Copy'}
                      </Button>
                      <Button
                        color="neutral"
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(tailwindV4Complete, 'theme.css')}
                        className="flex items-center gap-2 px-3 py-1 bg-canvas-bg-hover hover:bg-canvas-bg-active text-canvas-text rounded text-sm transition-colors"
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <pre className="text-sm text-canvas-text bg-canvas-bg p-3 rounded overflow-x-auto max-h-80">
                    {tailwindV4Complete}
                  </pre>
                  <p className="text-xs text-canvas-text mt-2">
                    Import this CSS file in your main CSS file or HTML
                  </p>
                </div>
              </>
            )}
          </div>
          
          <Dialog.Close asChild>
            <Button
              color="neutral"
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 rounded-full hover:bg-canvas-bg-hover text-canvas-text"
              aria-label="Close"
            >
              <X size={18} />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CodeDialog };