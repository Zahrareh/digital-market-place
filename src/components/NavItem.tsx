"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavItemsProbs {
  category: Category;
  handleOpen: () => void;
  isAnyOpen: boolean;
  isOpen: boolean;
}

export const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
}: NavItemsProbs) => {
  return (
    <div>
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.lable}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
    </div>
  );
};
