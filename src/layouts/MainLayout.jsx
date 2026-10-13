import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'
import DotField from '@/components/DotField'
import ChatBot from '@/components/chatbot/ChatBot'
const MainLayout = () => {
    return (
        <div className="relative isolate min-h-screen bg-[#08060d] text-white">

            <div className="pointer-events-none fixed inset-0 z-0">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={10}
                    bulgeStrength={60}
                    glowRadius={120}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={1000}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#7a00ef"
                    gradientTo="#B497CF"
                    glowColor="#995bff"
                />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />

                <main className="flex flex-1 flex-col">
                    <Outlet />
                </main>

                <Footer />
                <ChatBot/>
            </div>

        </div>
    );
};

export default MainLayout;