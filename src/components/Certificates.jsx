
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import certificateImg from '../assets/certificate.png'

const Certificates = () => {
    const certificate = [
        {
            title: 'Web developer basic course',
            issuer: 'UOM',
            date: 'jan 2026',
            credentialUrl: '#'
        },
        {
            title: 'Web developer basic course',
            issuer: 'UOM',
            date: 'jan 2026',
            credentialUrl: '#'
        },
        {
            title: 'Web developer basic course',
            issuer: 'UOM',
            date: 'jan 2026',
            credentialUrl: '#'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
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
                duration: 0.08,
                ease: 'easeOut'
            }
        }
    }

    return (
        <section
            id='certificates'
            className='py-16 relative overflow-hidden bg-transparent'
        >
            <div className='container mx-auto px-4 sm:px-8 md:px-18 max-w-6xl'>

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

                <div className='flex flex-col lg:flex-row items-center gap-12 justify-between'>

                    {/* Certificates List */}
                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-100px' }}
                        className='order-2 lg:order-1 grid grid-cols-1 border-t border-gray-200/50
                         dark:border-zinc-800/50 w-full lg:w-1/2'
                    >

                        {certificate.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
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
                    <div className='relative order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center mx-auto pointer-events-none'>

                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-80 h-120 rounded-full bg-violet-400/65 dark:bg-violet-500/40 blur-3xl scale-110'>
                            </div>
                        </div>

                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1.25 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            whileHover={{ scale: 1.35 }}
                            src={certificateImg}
                            alt='Certificates'
                            className='object-contain object-center w-80 h-120 relative z-20 mx-auto'
                        />

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Certificates
