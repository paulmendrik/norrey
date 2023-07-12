import React from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence} from 'framer-motion'



export const Transition = ({ children }: any ) => {

    const { asPath} = useRouter()

    const variants = {    
    in: { opacity: 0, x: -200, y: 0,  transition: {duration: 1, ease: 'easeInOut' }},
    animate: { opacity: 1, x: 0, y:0, transition: {duration: 1, ease: 'easeInOut' }},
    out: { opacity: 0, x: 0, y: -100, transition: {duration: 1, ease: 'easeInOut' }}
    }

	return (
    <AnimatePresence  initial={false} >
    <motion.div
    key={asPath}
    className='transition'
    variants={variants}
    initial="in"
    animate="animate"
    exit="out"
    >
    {children}
    </motion.div>
    </AnimatePresence>
	)
}
