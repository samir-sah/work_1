"use client";

export default function Header(){
    return(
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center px-6 z-50 shadow-sm">

            {/* logo+branding */}
            <div className="flex items-center gap-3 font semibold text-xl">
                <div className="w-9 h-9 bg-indigo-600 text-white flex items-center justify-center rounded lg">
                    +
                </div>
                SAP
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded">
                    ADMIN
                </span>
            </div>

            {/* Search bar */}
            <div className="ml-auto w-96">
                <input
                    type="text"
                    placeholder="Search orders, customers..."
                    className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-200 "
                />
            </div>

        </header>
    )
}