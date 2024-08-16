'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>

            <Link href={"/videos"}> 
            <MenuItem setActive={setActive} active={active} item="Videos">
            
            </MenuItem>
            </Link>

            <Link href={"https://www.youtube.com/channel/UCuLkhlfRFgd854Um-MUdK4w"}> 
            <MenuItem setActive={setActive} active={active} item="YT">
            
            </MenuItem>
            </Link>

            <Link href={"/newcanva"}> 
            <MenuItem setActive={setActive} active={active} item="NewCanva">
            
            </MenuItem>
            </Link>

            <Link href={"/hireme"}> 
            <MenuItem setActive={setActive} active={active} item="Hire me">
            
            </MenuItem>
            </Link>

        </Menu>
    </div>
  )
}

export default Navbar
