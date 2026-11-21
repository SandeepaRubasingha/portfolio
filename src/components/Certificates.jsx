
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import {
    FaReact,
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub
} from 'react-icons/fa'
import certificateImg from '../assets/certificate.png'

const Certificates = () => {
    const certificate = [
        {
            title: 'Web Design for Beginners',
            issuer: 'UOM',
            date: 'jan 2026',
            credentialUrl: 'https://open.uom.lk/verify'
        },
        {
            title: 'Python for Beginners',
            issuer: 'UOM',
            date: 'oct 2026',
            credentialUrl: 'https://open.uom.lk/verify'
        },

    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    }

    // Heading Animation
    const headingVariants = {
        hidden: {
            opacity: 0,
            y: 25
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut'
            }
        }
    }

    // Development Technology Icons
    const technologies = [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Python', icon: FaPython, color: '#FFD43B' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'GitHub', icon: FaGithub, color: '#e0c0fd' }
    ]

    return (
        <section
            id='certificates'
            className='py-16 relative overflow-visible bg-transparent'
        >
            <div className='container mx-auto px-4 sm:px-8 md:px-18 max-w-6xl mt-10'>

                {/* Animated Heading */}
                <motion.div
                    variants={headingVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className='text-xs font-mono tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2'>
                        Achievements
                    </span>

                    <h2 className='text-3xl sm:text-4xl font-bold dark:text-white text-gray-900'>
                        Certifications{' '}
                        <span className='text-violet-500 dark:text-[#e0c0fd]'>
                            &
                        </span>{' '}
                        Badges
                    </h2>
                </motion.div>

                <div className='flex flex-col lg:flex-row items-center gap-5 justify-between'>

                    {/* Certificates List */}
                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-100px' }}
                        className='order-2 lg:order-1 grid grid-cols-1 border-t border-gray-200/50
                         dark:border-zinc-800/50  w-full lg:w-1/2'
                    >

                        {certificate.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -6,
                                    transition: {
                                        duration: 0.25
                                    }
                                }}
                                className={`p-6 sm:p-8 flex flex-col justify-between
                                group relative transition-colors duration-300
                                hover:bg-violet-500/5
                                dark:hover:bg-violet-500/10
                                ${index < certificate.length - 1 ? 'border-b' : ''}
                                border-gray-200/50 dark:border-zinc-800/50`}
                            >

                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>

                                    <div className='p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 shrink-0'>
                                        <Award size={22} />
                                    </div>

                                    <div className='flex-1'>
                                        <h3 className='font-bold text-lg text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-[#e0c0fd] transition-colors'>
                                            {cert.title}
                                        </h3>

                                        <span className='text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-0.5'>
                                            {cert.issuer}
                                        </span>
                                    </div>

                                </div>

                                <div className='flex items-center justify-between sm:flex-col sm:items-end gap-2 shrink-0 max-sm:pt-4 max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:border-zinc-800/30'>

                                    <div className='flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-500'>
                                        <Calendar size={14} />
                                        <span>{cert.date}</span>
                                    </div>

                                    <a
                                        href={cert.credentialUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline'
                                    >
                                        Verify
                                        <ExternalLink size={12} />
                                    </a>

                                </div>

                            </motion.div>
                        ))}

                    </motion.div>

                    {/* Certificate Image */}
                    <div className='relative order-1 lg:order-2 w-full lg:w-1/2 flex items-top justify-center mx-auto pointer-events-none'>

                        {/* Responsive Animation Area */}
                        <div className='relative w-full min-h-[310px] sm:min-h-[200px] lg:min-h-[350px] flex items-top justify-center'>

                            {/* Animated Purple Glow */}
                            <motion.div
                                className='absolute inset-0 flex items-center justify-center'
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.6, 0.9, 0.6]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <div className='w-80 h-120 rounded-full bg-violet-400/65 dark:bg-violet-500/40 blur-3xl scale-110'>
                                </div>
                            </motion.div>

                            {/* Modern Development Logos Orbit */}
                            <div className='absolute inset-0 z-30 flex items-top justify-center pointer-events-none'>

                                <motion.div
                                    className='relative w-[290px] h-[290px]
                                    sm:w-[420px] sm:h-[420px]
                                    lg:w-[540px] lg:h-[540px]
                                    [--orbit-radius:135px]
                                    sm:[--orbit-radius:195px]
                                    lg:[--orbit-radius:255px]'
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 35,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                >

                                    {/* Outer Orbit Ring */}
                                    <div className='absolute inset-0 rounded-full border border-dashed border-violet-400/40 shadow-[0_0_30px_rgba(139,92,246,0.15)]' />

                                    {/* Inner Orbit Ring */}
                                    <div className='absolute inset-[12%] rounded-full border border-violet-400/15' />

                                    {/* Rotating Technology Logos */}
                                    {technologies.map((tech, index) => {
                                        const Icon = tech.icon
                                        const angle = index * (360 / technologies.length)

                                        return (
                                            <div
                                                key={tech.name}
                                                className='absolute top-1/2 left-1/2'
                                                style={{
                                                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`
                                                }}
                                            >
                                                <motion.div
                                                    animate={{ rotate: -360 }}
                                                    transition={{
                                                        duration: 35,
                                                        repeat: Infinity,
                                                        ease: 'linear'
                                                    }}
                                                    className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center bg-[#241735]/95 border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.3)]'
                                                >
                                                    <Icon
                                                        className='text-xl sm:text-2xl lg:text-3xl'
                                                        color={tech.color}
                                                        title={tech.name}
                                                    />
                                                </motion.div>
                                            </div>
                                        )
                                    })}

                                </motion.div>
                            </div>

                            {/* Floating Certificate PNG */}
                            <motion.div
                                className='relative z-20 mx-auto'
                                animate={{
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1.1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: 'easeInOut'
                                    }}
                                    whileHover={{ scale: 1.15 }}
                                    src={certificateImg}
                                    alt='Certificates'
                                    className='object-contain object-center w-80 h-120 relative z-20 mx-auto'
                                />
                            </motion.div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Certificates
