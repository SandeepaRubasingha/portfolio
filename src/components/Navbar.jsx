
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon, Menu, X, Phone } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className='fixed z-50 w-full mt-4 flex justify-center'>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}

        className='relative bg-linear-to-br from-violet-400 
        to-white dark:bg-linear-to-br dark:from-purple-950 
        dark:to-black  backdrop-blur-xl rounded-2xl shadow-2xl
        px-6 py-3 w-[90%] max-w-4xl border border-white/20
        dark:border-gray-700/50'>
        <div className='flex items-center justify-between'>

        <motion.a
          href='/'
          whileHover={{ scale: 1.05 }}

          className='text-2xl font-bold
          bg-linear-to-r from-purple-600 to-violet-600
          bg-clip-text text-transparent'
        >
          Portfolio<span className='text-gray-800 
          dark:text-white'>.</span>
        </motion.a>
        
        <div className='hidden md:flex items-center gap-x-6'>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.htref}
              className='text-gray-700
              dark:text-gray-300
              hover:text-purple-600
              dark:hover:text-purple-400
              transition-colors font-medium'
            >
              {item.name}
            </a>
          ))}

        </div>
        <div className='flex items-center gap-2'>
            <motion.a
            href='#contact'
            whileHover={{ scale: 1.1 }}
            whileTap={{scale:0.9}}
            className='p-2 rounded-full bg-purple-100
            dark:bg-purple-900/30
            hover:bg-purple-200
            dark:hover:bg-purple-800/30
            transition-colors'>
                <Phone className='w-5 h-5 text-purple-600 
                dark:text-purple-400' />
            </motion.a>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className='p-2 rounded-full bg-gray-100
          dark:bg-gray-800
          hover:bg-gray-200
          dark:hover:bg-gray-700
          transition-colors'
        >
          {darkMode ? (
            <Sun className='w-5 h-5 text-yellow-400' />
          ) : (
            <Moon className='w-5 h-5 text-gray-700' />
          )}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 rounded-lg bg-gray-100
          dark:bg-gray-800
          hover:bg-gray-200
          dark:hover:bg-gray-700
          transition-colors'
        >
          {isOpen ? (
            <X className='w-5 h-5 text-gray-700 dark:text-white' />
          ) : (
            <Menu className='w-5 h-5 text-gray-700 dark:text-white' />
          )}
        </motion.button>
       </div>
       </div>
       <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height:0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height:0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='md:hidden overflow-hidden mt-4 pt-4
            border-t border-gray-200 dark:border-gray-700'
            >
            <div className='flex flex-col gap-y-3'> 
                {navItems.map((item,index) => (
                    <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{delay: index * 0.05}}
                    className='text-center py-3 rounded-xl text-gray-700 dark:text-gray-300
                    hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 
                    dark:hover:text-purple-400 transition-all font-medium'>
                    {item.name}
                
            </motion.a>
                ))}
                <motion.a
                href='#contact'
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{delay:0.25}}
                className='text-center py-3 rounded-xl 
                font-semibold bg-linear-to-r from-purple-600 to-violet-600 
                text-white shadow-lg hover:shadow-purple-500/25 transition-shadow'>
                Hire Me
            </motion.a>
             </div>
        </motion.div>
      )}
    </AnimatePresence>
    </motion.nav>
    </div>
  )
}

export default Navbar
