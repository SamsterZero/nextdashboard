import { Metadata } from "next";
import React from "react";
import NavMenu from "../ui/NavMenu";
import Title from "../ui/Title";
import Profile from "../ui/Profile";

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
        <div className="h-screen grid grid-cols-2 grid-rows-3 md:grid-cols-2 gap-2 p-2">
            {/* <div className="bg-blue-700 border w-full md:w-64"> */}
            <div className="bg-blue-700 rounded md:w-64 order-1 col-span-1 md:col-auto">
                <Title />
            </div>
            <div className="bg-green-500 rounded md:w-64 order-4 md:order-3 col-span-2 md:col-auto">
                <NavMenu />
            </div>
            <div className="bg-yellow-500 rounded md:w-64 order-2 md:order-4 col-span-1 md:col-auto">
                <Profile />
            </div>
            <div className="bg-pink-400 rounded order-3 md:order-2 md:row-span-3 col-span-2 md:col-span-1">
                {children}
            </div>
        </div>
    )
}