import React from "react";
import { Button } from "@/componenl/ui/button";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
      <div className="flex flex-row pt-1 scale-75">
        <Button
          className="font-bold text-xs mr-2"
          variant="ghost"
          asChild
        >
          <Link href='/' className="line-clamp-4">
          SKINSTRIC
          </Link>
        </Button>
        <Image
          src="/left.jpg"
          width={10}
          height={1}
          alt="left"
          className="ml-1 scale-[0.45]"
        />
        <p className="text-muted-foreground pt-[7.5px] font-semibold text-sm ml-1">
          INTRO
        </p>
        <Image
          src="/right.jpg"
          width={10}
          height={1}
          alt="left"
          className="ml-1 scale-[0.45] bg-transparent"
        />
      </div>
      {pathname !== "/testing" && pathname !== "/result" && pathname !== "/select" && pathname !== "/final" && pathname !== "/scan" && (
        <Button className="mx-4 scale-[0.8]">ENTER CODE</Button>
      )}
    </div>
  );
};

export default Header;