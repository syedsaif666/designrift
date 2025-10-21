import { Suspense } from "react";
import { cn } from "@/lib/utils";


const ExamplesPreviewContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="@container mt-0 h-full w-full space-y-6">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
};

export default ExamplesPreviewContainer;
