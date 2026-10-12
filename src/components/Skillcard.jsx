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
        {
            name: 'C',
            icon: "/images/skillslogo/c.png"
        },
        {
            name: 'Java',
            icon: "/images/skillslogo/java.png"
        },
        {
            name: 'Numpy',
            icon: "/images/skillslogo/numpy.png"
        },
        {
            name: 'Pandas',
            icon: "/images/skillslogo/pandas.png"
        },

    ]
    return (
        <div>

            <div className='mb-14 flex flex-col items-center text-center'>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Skills & {" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Intrest
                        </span>
                    </h2>
            </div>


            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {skilldata.map((skill) => (
                    <div className='flex justify-center'>
                        <div className=' bg-[#110d1b]/95 w-80 m-2 flex flex-col p-3 items-center justify-center rounded-lg gap-6 hover:bg-[#1b1036]/80 transition duration-200'>
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