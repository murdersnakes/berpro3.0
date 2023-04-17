import React from "react";
import Sidebar from "./components/Sidebar";

export default function layout({ children, params }: { children: React.ReactNode;  params: any;   }) {
  return (
    <div className="bg-[var(--text-color)]">
      <div className='flex flex-col md:flex-row-reverse md:items-start md:justify-end md:cont gap-12 '>
        {children}
        <Sidebar params={params}/>
      </div>
    </div>
  );
}
