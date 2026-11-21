import { DownloadIcon,Mail } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import CV from '../assets/CV.pdf'
import hero from '../assets/hero.png'

const Hero = () => {

  const roles = [
    'Frontend Developer',
    'Web Developer',
    'ML Engineer',
    'Data Analyst',
    'Business Analyst'
]

const [roleIndex, setRoleIndex] = useState(0)
const [text, setText] = useState('')
const [isDeleting, setIsDeleting] = useState(false)

useEffect(() => {
    const currentRole = roles[roleIndex]

    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
        if (!isDeleting) {
            if (text.length < currentRole.length) {
                setText(currentRole.slice(0, text.length + 1))
            } else {
                setIsDeleting(true)
            }
        } else {
            if (text.length > 0) {
                setText(currentRole.slice(0, text.length - 1))
            } else {
                setIsDeleting(false)
                setRoleIndex((prev) => (prev + 1) % roles.length)
            }
        }
    }, text === currentRole && !isDeleting ? 1500 : typingSpeed)

    return () => clearTimeout(timeout)
}, [text, roleIndex, isDeleting])

    const socialIcons = [
        {icon: FaGithub, alt: 'GitHub', href: 'https://github.com/SandeepaRubasingha'},
        {icon: FaLinkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/sandeepa-rubasingha-854534342/'},
        {icon: FaFacebook, alt: 'Facebook', href: 'https://www.facebook.com/?_rdc=2&_rdr#'},
        {icon: FaInstagram, alt: 'Instagram', href: 'https://www.instagram.com/sandeepa_rubasingha?lqvp=MTlzcG0wOGdubjhzNg=='},
    ]

  return (
    <section id='home' className='min-h-screen flex items-center relative
    overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-24 lg:py-0
      lg:mt-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between
         gap-12 lg:gap-8'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start
          text-center lg:text-left'
            data-aos='fade-right'>
           <div className='flex gap-4 sm:gap-6 mb-6'>
            {socialIcons.map((social, index) =>(
              <a 
              key={index}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`p-2 rounded-full transition-all duration-300
              hover:scale-110 dark:hover:bg-violet-500/20
              hover:bg-violet-500/10 dark:text-gray-300 
              text-gray-600 dark:hover:text-violet-400
              hover:text-violet-600`}
              >
             <social.icon size={24}/>

              </a>
             )) }
           </div>
           <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2
           text-gray-900 dark:text-white'>
            Hi, I'm <span className='text-violet-500 dark:text-[#e0c0fd]'
            >SANDEEPA</span>
           </h1>
           <h2 className='text-xl sm:text-2xl lg:text-3xl font-mono
           mb-4 dark:text-violet-400 text-gray-700'>
            {text}
            <span className='animate-pulse'>|</span>
           </h2>
           <p  className='mb-8 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700'>
          I am passionate about developing innovative web applications, building intelligent solutions, and transforming data into meaningful insights. 
          </p>
           <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <a href={CV} download className='w-full sm:w-auto'>
              <button className='w-full sm:w-auto inline-flex items-center
              justify-center gap-2 px-8 py-3 rounded-full text-white 
              font-semibold bg-linear-to-r from-violet-500
              to-violet-700 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] 
              transition-all duration-300 transform hover:scale-105'>
                <DownloadIcon size={20}/>

                Download CV
              </button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <button className='w-full sm:w-auto inline-flex items-center
              justify-center gap-2 px-8 py-3 rounded-full text-white 
              font-semibold border-2 
              dark:border-violet-500 border-violet-500
              dark:text-white text-white
              dark:hover:bg-violet-500 hover:bg-violet-500
              bg-linear-to-r from-violet-500
              to-violet-700 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] 
              text-white
              transition-all duration-300 transform hover:scale-105'>
                
                <Mail size={20}/>
                Hire Me
              </button>
            </a>
          </div>
        </div>
        <div
        className='lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center
        relative'
        data-aos='fade-left'>
          <div className='relative'>
            <img src={hero} alt="hero" className='w-full h-125 object-cover transform
            hover:scale-105 transition-transform duration-500'/>
          </div>
           </div>
        </div>
        </div>
        <div className='absolute -top-20 -left-20 w-64 h-64 rounded-full
        filter blur-3xl animate-pulse hidden sm:block dark:bg-violet-500
        bg-violet-400'>

        </div>
    </section>
    
  )
}

export default Hero