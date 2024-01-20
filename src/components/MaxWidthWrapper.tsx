import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface IMaxWidthWrapperProps {
  className?: string; 
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: IMaxWidthWrapperProps) => {
  return (
    <div className={cn('max-w-screen-xl w-full mx-auto px-2.5 md:px-20' ,className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
