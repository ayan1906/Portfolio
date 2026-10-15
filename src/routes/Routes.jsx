import MainLayout from '@/layouts/MainLayout'
import Home from '@/Pages/Home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from '@/Pages/About'
import Skills from '@/Pages/Skills'
import Project from '@/Pages/Project'
import Journey from '@/Pages/Journey'
import Challenge from '@/Pages/Challenge'
import Notfound from '@/components/Notfound'
import Contact from '@/components/Contact'
export const Router = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout/> ,
        children: [
            {
                path:'/' , 
                element: <Home/>
            },
            {
                path:'/about' , 
                element: <About/>
            },
            {
                path:'/skills' , 
                element: <Skills/>
            },
            {
                path:'/project' , 
                element: <Project/>
            },
            {
                path:'/journey' , 
                element: <Journey/>
            },
            {
                path:'/challenge' , 
                element: <Challenge/>
            },
            {
                path:'/contact' , 
                element: <Contact/>
            },
            {
                path:'*' , 
                element: <Notfound/>
            },
            
        ]
    }
])
