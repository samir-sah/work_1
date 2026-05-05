"use client";

import Link from "next/link";

export default function Sidebar(){
    return (
        <div className="h-[calc(100vh-4rem)] w-56 bg-white text-blue-500 fixed left-0 top-16 p-5 font-semibold ">
            <nav className="flex flex-col gap-4">
                <Link href="/"className="hover:text-indigo-900 font-bold">Dashboard</Link>
                <Link href="/dashboard"className="hover:text-gray-300">Customer</Link>
                <Link href="/orders"className="hover:text-gray-300">Orders</Link>
                <Link href="/settings"className="hover:text-gray-300">Revenue</Link>

            </nav>
        </div>
    );
}