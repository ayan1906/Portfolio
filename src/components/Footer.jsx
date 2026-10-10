import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {

  const socialMedia = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/Iamayan1906",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/i_am_ayan19/",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/ayan1906",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/sakin-ayan-a7953b346/",
    },
  ];

  return (
    <div className='flex items-center justify-around bg-[#08060d]/80'>
      <div className='  flex items-center w-[50%]'>
        <img
          src="/images/logo%20bf.png"
          alt="Ayan Logo"
          className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <p className='text-slate-400 text-xs'>
          © 2026 Ayan. All rights reserved. Crafting digital perfection.
        </p>
      </div>

      <div className=" flex items-center gap-4">

        {socialMedia.map(({ name, icon: Icon, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
          >
            <Icon size={19} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer