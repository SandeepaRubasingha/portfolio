import {FaInstagram, FaGithub, FaYoutube, FaTiktok} from 'lucide-react/icons/'
import React from 'react'

const Hero = () => {
    const socialIcons = [
        {icon: FaInstagram, alt: 'Instagram', href: '#'},
        {icon: FaTiktok, alt: 'Tiktok', href: '#'},
        {icon: FaGithub , alt: 'github', href: '#'},
        {icon: FaYoutube, alt: 'youtube', href: '#'},
    ]

  return (
    <section id='home' className='min-h-screen flex items-center relative
    overflow-hidden'>

    <div>Hero</div>
    </section>
  )
}

export default Hero