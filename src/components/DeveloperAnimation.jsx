
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Database } from 'lucide-react'
import { FaReact, FaPython } from 'react-icons/fa'

const DeveloperAnimation = () => {
    const codeLines = [
        'const developer = {',
        "  skills: 'React',",
        "  passion: 'Building',",
        "  focus: 'Innovation'",
        '}'
    ]

    const [visibleText, setVisibleText] = useState('')
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentLine = codeLines[lineIndex]

        const timer = setTimeout(() => {
            if (charIndex < currentLine.length) {
                setVisibleText(prev => prev + currentLine[charIndex])
                setCharIndex(prev => prev + 1)
            } else if (lineIndex < codeLines.length - 1) {
                setVisibleText(prev => prev + '\n')
                setLineIndex(prev => prev + 1)
                setCharIndex(0)
            } else {
                setTimeout(() => {
                    setVisibleText('')
                    setLineIndex(0)
                    setCharIndex(0)
                }, 1800)
            }
        }, 65)

        return () => clearTimeout(timer)
    }, [charIndex, lineIndex])

    return (
        <div className='absolute inset-0 z-30 pointer-events-none'>

            {/* React Floating Icon */}
            <motion.div
                className='absolute top-[8%] left-[5%] rounded-xl
                bg-[#241735]/95 border border-violet-400/40
                p-3 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                animate={{
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <FaReact size={26} color='#61DAFB' />
            </motion.div>

            {/* Python Floating Icon */}
            <motion.div
                className='absolute top-[28%] right-[2%] rounded-xl
                bg-[#241735]/95 border border-violet-400/40
                p-3 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                animate={{
                    y: [0, 12, 0],
                    rotate: [5, -5, 5]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <FaPython size={26} color='#FFD43B' />
            </motion.div>

            {/* Database Floating Icon */}
            <motion.div
                className='absolute bottom-[15%] right-[4%] rounded-xl
                bg-[#241735]/95 border border-violet-400/40
                p-3 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                animate={{
                    x: [0, 8, 0],
                    y: [0, -8, 0]
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <Database size={25} className='text-violet-300' />
            </motion.div>

            {/* Live Coding Terminal */}
            <motion.div
                className='absolute bottom-0 left-0 sm:-left-6
                w-[210px] sm:w-[200px] h-[170px]
                rounded-xl overflow-hidden
                bg-[#171124]/95 border border-violet-400/40
                shadow-[0_10px_35px_rgba(0,0,0,0.4)]
                backdrop-blur-md'
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                {/* Terminal Header */}
                <div className='flex items-center gap-1.5 px-3 py-2 bg-violet-500/15 border-b border-violet-400/20'>
                    <span className='w-2 h-2 bg-red-400 rounded-full' />
                    <span className='w-2 h-2 bg-yellow-400 rounded-full' />
                    <span className='w-2 h-2 bg-green-400 rounded-full' />

                    <span className='ml-auto text-[10px] text-violet-200 font-mono mb-0'>
                        developer.js
                    </span>
                </div>

                {/* Typing Code */}
                <div className='p-2 h-[120px] font-mono text-[10px] sm:text-xs text-violet-200 '>
                    <pre className='whitespace-pre-wrap break-words'>
                        {visibleText}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity
                            }}
                            className='inline-block w-[2px] h-3 bg-violet-400 ml-1'
                        />
                    </pre>
                </div>

                {/* Live Status */}
                <div className=' flex items-center text-[10px] text-green-400 font-mono pl-2'>
                    <span className='w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse' />
                    Live coding...
                </div>
            </motion.div>

        </div>
    )
}

export default DeveloperAnimation
