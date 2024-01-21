import { Metadata } from "next";
import React from "react";
import NavMenu from "../ui/NavMenu";
import Title from "../ui/Title";

export const metadata: Metadata = {
    title: {
        template: '',
        default: ''
    },
    description: ''
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        // <div className ="flex h-screen f1 ex-col md:flex-row md:overlflow-hidden">
        <div className="h-screen flex flex-col">
            {/* <div className="bg-blue-700 border w-full md:w-64"> */}
            <header className="w-full h-fit bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-800">
                <Title />
            </header>
            <div className="h-full flex flex-col md:flex-row gap-2 p-2">
                <div className="h-fit md:h-full md:w-64 order-2 md:order-1">
                    <NavMenu />
                </div>
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-800 rounded h-full w-full order-1 md:order-2 overflow-y-auto">
                    {children}
                </div>
            </div>
            <footer className="bg-gray-700 w-full h-fit text-center hidden md:block">
                footer
            </footer>
        </div>
    )
}