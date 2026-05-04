"use client";

export default function Header(){
    return(
        <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50 shadow-md border-b border-gray-700">
            
            <h1 className="text-xl font-bold">HealthyBit</h1>

            <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                Profile
            </button>
        </div>
    )
}