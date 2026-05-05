"use client";

import Link from "next/link";

export default function Sidebar(){
    return (
        <div className="h-[calc(100vh-4rem)] w-50 bg-gray-900 text-white fixed left-0 top-16 p-5">
            <nav className="flex flex-col gap-4">
                <Link href="/"className="hover: text-gray-300">Dashboard</Link>
                <Link href="/dashboard"className="hover: text-gray-300">Customer</Link>
                <Link href="/orders"className="hover: text-gray-300">Orders</Link>
                <Link href="/settings"className="hover: text-gray-300">Revenue</Link>

            </nav>
        </div>
    );
}