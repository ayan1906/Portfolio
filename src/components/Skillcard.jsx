import React from 'react'

const Skillcard = () => {
    const skilldata = [
        {
            name: 'Html',
            icon: "/images/skillslogo/html.png"
        },
        {
            name: 'CSS',
            icon: "/images/skillslogo/css.png"
        },
        {
            name: 'JavaScript',
            icon: "/images/skillslogo/js.png"
        },
        {
            name: 'React',
            icon: "/images/skillslogo/react.png"
        },
        {
            name: 'Tailwind',
            icon: "/images/skillslogo/tailwind.png"
        },
        {
            name: 'Bootstrap',
            icon: "/images/skillslogo/bs.png"
        },

    ]
    return (
        <div>
            <div>
                <h1>My Skills</h1>

            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {skilldata.map((skill) => (
                    <div className='flex justify-center'>
                        <div className=' bg-[#110d1b]/95 w-80 m-2 flex flex-col p-3 items-center justify-center rounded-lg gap-6 hover:bg-[#110d1b]/80'>
                        <img className='w-12 -mb-4' src={skill.icon} alt="" />
                        <h1>{skill.name}</h1>
                    </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skillcard