import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { GalleryLayout } from '@/layouts';
import Masonry, { ResponsiveMasonry} from 'react-responsive-masonry';
import {Box, Image, Text } from '@chakra-ui/react';
import { urlFor } from '@/lib/api';

export const Willow = ({ props }: any) => {

const variants = {
hidden: { opacity: 0, y: 0 },
show: { opacity: 1, y: 0, transition: { staggerChildren: 1, type: 'tween', duration: 1, ease: 'easeInOut' } }
}
            
return (
<GalleryLayout>
<Box pb={'4'}>
<Text as={'h1'} className={'title'} pt={['1.5rem', '2rem']} fontSize={['1.2rem', '1.4rem']}>Weeping Willow Water</Text>
</Box>
<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
<Masonry  gutter='10px'>
{props.map((prop:{_id: any; title: string; painting: any; slug: any;  order: any;}) => ( 
<motion.div
variants={variants}
initial="hidden"
whileInView={"show"}
>
<Link key={prop._id}  href={`willow/${prop.slug}`} id={prop.order}>
<Image
src={urlFor(prop.painting).url()} 
alt={prop.title} 
objectPosition={'center'}
cursor={'pointer'}
/>
<Text as={'p'} fontSize={['1rem','1rem']} textAlign={'center'} >{prop.title}</Text>
</Link>
</motion.div>

))}
</Masonry> 
</ResponsiveMasonry>
</GalleryLayout>
)
}