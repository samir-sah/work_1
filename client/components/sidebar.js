"use client";

import Link from "next/link";

export default function Sidebar(){
    return (
        <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-5">
            <h1 className="text-xl font-bold mb-8">Dashboard</h1>

            <nav className="flex flex-col gap-4">
                <Link href="/"className="hover: text-gray-300">Home</Link>
                <Link href="/dashboard"className="hover: text-gray-300">dashboard</Link>
                <Link href="/orders"className="hover: text-gray-300">orders</Link>
                <Link href="/settings"className="hover: text-gray-300">settings</Link>

            </nav>
        </div>
    );
}