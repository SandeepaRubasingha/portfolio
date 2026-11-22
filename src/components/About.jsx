import DeveloperAnimation from './DeveloperAnimation'
import React from 'react'
import about from '../assets/about.png'
import { ArrowRight } from 'lucide-react'

const About = () => {
    const stat = [
        { value: '1+', label: 'Years' },
        { value: '10+', label: 'Projects' },
        { value: '100%', label: 'Satisfaction' },
    ]

    return (
        <section
            id='about'
            className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden'
        >
            <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center'>

                {/* About Image Section */}
                <div
                    className='relative order-2 lg:order-1 lg:row-span-2'
                    data-aos='fade-right'
                >
                    <div className='relative w-full max-w-sm mx-auto lg:mx-0'>
                         
                        <div
                            className='absolute inset-0 bg-linear-to-tr from-violet-500 to-transparent rounded-[40%_60%_60%_40%/40%_60%_70%_60%] transform rotate-3'
                        >
                        </div>

                        <img
                            src={about}
                            alt='About'
                            className='relative rounded-[40%_60%_60%_40%/40%_60%_70%_60%] shadow-2xl w-full h-auto object-cover transform rotate-3'
                        />

                        <div
                            className='absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-2xl'
                        >
                        </div>
                     <DeveloperAnimation />
                    </div>
                </div>

                {/* About Title Section */}
                <div
                    className='order-1 lg:order-2 lg:self-end'
                    data-aos='fade-left'
                >
                    <span
                        className='inline-block text-violet-500 dark:text-[#e0c0fd] font-semibold text-sm tracking-wider uppercase mb-2 mt-5'
                    >
                        About Me
                    </span>

                    <h2
                        className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900'
                    >
                        Turning Ideas Into
                    </h2>
                </div>

                {/* About Content Section */}
                <div
                    className='order-3 lg:order-3 lg:self-start'
                    data-aos='fade-left'
                >
                    <p
                        className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-600 lg:flex-row'
                    >
                        I am a passionate Full-Stack Web Developer and ICT
                        undergraduate with a strong interest in building
                        modern, responsive, and user-friendly web applications.
                        Skilled in React.js, Next.js, Node.js, and modern web
                        technologies, I focus on creating efficient, scalable,
                        and visually appealing digital solutions.
                        I enjoy solving real-world problems through clean code,
                        creative design, and continuous learning.
                    </p>

                    {/* Statistics Section */}
                    <div className='grid grid-cols-3 gap-4 mb-8'>

                        {stat.map((item, index) => (
                            <div
                                key={index}
                                className='p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 dark:bg-white/5 bg-gray-50 hover:dark:bg-white/10 hover:bg-gray-100'
                                data-aos='zoom-in'
                                data-aos-delay={index * 100}
                            >
                                <div
                                    className='text-2xl font-bold text-violet-500 dark:text-[#e0c0fd]'
                                >
                                    {item.value}
                                </div>

                                <div
                                    className='text-sm dark:text-gray-400 text-gray-500'
                                >
                                    {item.label}
                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Contact Button */}
                    <a
                        href='#contact'
                        className='group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 dark:bg-violet-500 bg-violet-500 text-white hover:dark:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]'
                        data-aos='fade-up'
                        data-aos-delay='300'
                    >
                        Let's Talk

                        <ArrowRight
                            className='w-5 h-5 transition-transform group-hover:translate-x-1'
                        />
                    </a>

                </div>

            </div>
        </section>
    )
}

export default About
