import React, { Fragment } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    useDisclosure,
  } from '@chakra-ui/react'
import { item } from '../lib/types'; 


export const Nav = () => {

const { isOpen, onOpen, onClose } = useDisclosure()

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
<>
<Box zIndex={"100000"}>
<Hamburger  toggled={isOpen} toggle={onOpen}  size={24} color={'black'} />
</Box>

<Drawer isOpen={isOpen} placement='right' onClose={onClose}  >
<DrawerOverlay />
<DrawerContent>
<Hamburger  toggled={isOpen} toggle={onClose}  size={24} color={'black'} />
<DrawerBody>

{items.map((item, i ) => (
<Link 
fontSize={['1.2rem', '1.6rem']}
href={item.href }
>
{item.label}
</Link>
))}
</DrawerBody>
</DrawerContent>
</Drawer>

</>
)
}