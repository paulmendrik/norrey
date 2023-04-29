import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react'
import { Box, Flex, List, ListItem } from '@chakra-ui/react';
import { item } from '../lib/types'; 


export const Navigation = () => {


const [ isOpen, setOpen ] = useState(false);

const menu = {
    initial: { y: '-2000px', height: 0, opacity: 0, transition: { duration: 2, type: 'tween'}},
    open: { y: 0, height: '100vh',  opacity: 1, transition: { duration: 2, type: 'tween'}},
    closed: { y: '-2000px', height: 0, opacity: 0, transition: { duration: 2, type: 'tween'}}
}
   
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 1, delay: 0.5,  duration: 1,  ease: 'easeInOut' } },
    exit: { opacity: 0 },
}

const items: Array<item> = [
{
label: 'Home',
 href: '/',
 key: '1',
},
{
label: 'About',
href: '/about',
key: '2',
},
{
label: 'Paintings',
href: '/paintings',
key: '3',
},
{
label: 'Studio Art',
href: '/studio',
key: '4'
},
{
label: 'Contact',
href: '/contact',
key: '5',
}
]


return (

<Fragment>

<Box className='toggle' zIndex={'4000'}>
<Hamburger toggled={isOpen} toggle={setOpen} size={24} color={isOpen ? '#ffffff' : '#010101'} />
</Box>

<AnimatePresence>

{isOpen && ( 
<Box 
className="navigation"
as={motion.div}
variants={menu}
initial={"initial"}
animate={"open"}
exit={"closed"}
>

<Flex className='menu'>
<List  
mt={['-120','0']}
as={motion.div} 
variants={container}
initial="hidden"
whileInView={"show"}
>

{items.map((item, i ) => (
<motion.div
key={item.key}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, delay: i * 0.75 , ease: 'linear'}}
>
<ListItem  py={['2px', '4px']} fontSize={['1.2rem', '1.6rem']} lineHeight={['1.6rem', '1.8rem']}>
<Link href={item.href }>{item.label}</Link>
</ListItem>
</motion.div>
))}

</List>
</Flex>
</Box>
)}
</AnimatePresence>
</Fragment>   
)
}
