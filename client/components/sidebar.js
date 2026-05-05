"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname();

    const link = (path) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
            pathname === path || pathname.startsWith(path + "/")
            ? "bg-indigo-100 text-indigo-600 font-medium"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        }`;

    return (
        <div className="h-[calc(100vh-4rem)] w-56 bg-white fixed left-0 top-16 p-4 border-r ">
            <nav className="flex flex-col gap-1">
                <Link href="/dashboard" className={link("/dashboard")}>Dashboard</Link>
                <Link href="/customer" className={link("/customer")}>Customer</Link>
                <Link href="/orders" className={link("/orders")}>Orders</Link>
                <Link href="/revenue" className={link("/revenue")}>Revenue</Link>

            </nav>
        </div>
    );
}