import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {
    Mail,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (loading) return

        setLoading(true)
        setStatus('')

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                {
                    publicKey:
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            )

            setStatus('success')

            setFormData({
                from_name: '',
                from_email: '',
                subject: '',
                message: ''
            })

        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    const inputStyle = `
        w-full px-4 py-3 rounded-xl
        bg-gray-50 dark:bg-white/5
        border border-gray-200 dark:border-white/10
        text-gray-900 dark:text-white
        placeholder:text-gray-400
        outline-none
        focus:border-violet-500
        focus:ring-2 focus:ring-violet-500/20
        transition-all duration-300
    `

    return (
        <section
            id='contact'
            className='py-24 px-4 sm:px-6 relative overflow-hidden bg-transparent'
        >
            <div className='max-w-6xl mx-auto'>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-14'
                >
                    <span className='inline-block text-violet-500 dark:text-[#e0c0fd] font-semibold text-sm tracking-wider uppercase mb-3'>
                        Get In Touch
                    </span>

                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5'>
                        Let's Work{' '}
                        <span className='text-violet-500 dark:text-[#e0c0fd]'>
                            Together
                        </span>
                    </h2>

                    <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                        Have a project in mind or want to collaborate?
                        Feel free to contact me. I would love to hear
                        about your ideas and help bring them to life.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='p-6 sm:p-8 rounded-2xl
                        bg-gray-50 dark:bg-white/5
                        border border-gray-200 dark:border-white/10'
                    >
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                            Contact Information
                        </h3>

                        <p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
                            I'm open to freelance projects,
                            collaborations, and new opportunities.
                            Let's create something amazing together.
                        </p>

                        <div className='space-y-6'>

                            {/* Email */}
                            <div className='flex items-center gap-4'>
                                <div className='p-3 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd]'>
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                                        Email
                                    </p>

                                    <p className='text-gray-900 dark:text-white font-medium break-all'>
                                      sanurubasingha@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className='flex items-center gap-4'>
                                <div className='p-3 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd]'>
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                                        Location
                                    </p>

                                    <p className='text-gray-900 dark:text-white font-medium'>
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className='mt-10'>
                            <h4 className='font-semibold text-gray-900 dark:text-white mb-4'>
                                Connect With Me
                            </h4>

                            <div className='flex gap-4'>
                                <a
                                    href='https://github.com/SandeepaRubasingha'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='GitHub'
                                    className='p-3 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] hover:bg-violet-500 hover:text-white transition-all duration-300 hover:scale-110'
                                >
                                    <FaGithub size={20} />
                                </a>

                                <a
                                    href='https://www.linkedin.com/in/sandeepa-rubasingha-854534342/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='LinkedIn'
                                    className='p-3 rounded-xl bg-violet-500/10 text-violet-500 dark:text-[#e0c0fd] hover:bg-violet-500 hover:text-white transition-all duration-300 hover:scale-110'
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='p-6 sm:p-8 rounded-2xl
                        bg-gray-50 dark:bg-white/5
                        border border-gray-200 dark:border-white/10'
                    >
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
                            Send a Message
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-5'
                        >
                            <div>
                                <label
                                    htmlFor='contact-name'
                                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Your Name
                                </label>

                                <input
                                    id='contact-name'
                                    type='text'
                                    name='from_name'
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    placeholder='Enter your name'
                                    required
                                    maxLength={100}
                                    className={inputStyle}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='contact-email'
                                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Email Address
                                </label>

                                <input
                                    id='contact-email'
                                    type='email'
                                    name='from_email'
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    required
                                    maxLength={254}
                                    className={inputStyle}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='contact-subject'
                                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Subject
                                </label>

                                <input
                                    id='contact-subject'
                                    type='text'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder='What is this about?'
                                    required
                                    maxLength={150}
                                    className={inputStyle}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='contact-message'
                                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id='contact-message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Tell me about your project...'
                                    required
                                    rows={5}
                                    maxLength={5000}
                                    className={`${inputStyle} resize-none`}
                                />
                            </div>

                            {/* Feedback */}
                            {status === 'success' && (
                                <div
                                    role='status'
                                    className='flex items-center gap-2 text-green-600 dark:text-green-400 text-sm'
                                >
                                    <CheckCircle2 size={18} />
                                    Message sent successfully!
                                </div>
                            )}

                            {status === 'error' && (
                                <div
                                    role='alert'
                                    className='flex items-center gap-2 text-red-600 dark:text-red-400 text-sm'
                                >
                                    <AlertCircle size={18} />
                                    Failed to send message. Please try again.
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type='submit'
                                disabled={loading}
                                className='group w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold bg-violet-500 text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed'
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={20}
                                            className='animate-spin'
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send
                                            size={18}
                                            className='transition-transform group-hover:translate-x-1'
                                        />
                                    </>
                                )}
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Contact
