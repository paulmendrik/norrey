import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { Box, Button, Collapse, Flex, List, ListItem, Stack, useDisclosure } from '@chakra-ui/react';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'


export const Navigation = () => {


const [ Open, setOpen ] = useState(false);
const { isOpen, onToggle } = useDisclosure();

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

function closeMenu() {
    setOpen(false)
 }


return (

<Fragment>


<Box 
as={motion.div}
className={'icon'} 
mt={'-1'}
cursor={'pointer'}
>
<Hamburger  toggled={Open} toggle={setOpen}  size={20} />  
</Box>

<AnimatePresence>
{Open && ( 
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
fontSize={['1.2rem', '1.6rem']}
lineHeight={['1.6rem', '1.8rem']}
as={motion.div} 
variants={container}
initial="hidden"
whileInView={"show"}
>
<ListItem  py={['2px', '4px']} >
<Link href='/' onClick={closeMenu} passHref >Home</Link>
</ListItem>
<ListItem  py={['2px', '4px']} >
<Link href='/about' onClick={closeMenu} passHref >About</Link>
</ListItem>
<ListItem  onClick={onToggle} py={['2px', '4px']} cursor={'pointer'}>
<Button 
variant={'link'} 
fontSize={['1.2rem', '1.6rem']} 
color={'white'}
rightIcon={isOpen ? <HiMinusSm/> : <HiPlusSm/>}
>
Paintings
</Button>
</ListItem>
<Collapse in={isOpen} animateOpacity>
<List fontSize={['1rem', '1.4rem']} >
<ListItem py={['2px', '2px']} ><Link href='/paintings' onClick={closeMenu} passHref >Another World</Link></ListItem> 
<ListItem py={['2px', '2px']} ><Link href='/surface' onClick={closeMenu} passHref >Surface</Link></ListItem>  
<ListItem py={['2px', '2px']} ><Link href='/willow' onClick={closeMenu} passHref >Weeping Willow Water</Link></ListItem>  
</List>
</Collapse>
<ListItem  py={['2px', '4px']} fontSize={['1.2rem', '1.6rem']} lineHeight={['1.6rem', '1.8rem']}>
<Link href='/contact' onClick={closeMenu} passHref >Contact</Link>
</ListItem>
</List>
</Flex>
</Box>
)}
</AnimatePresence>
</Fragment>   
)
}
