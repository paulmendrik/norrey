import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import groq from 'groq';
import { PaintingLayout } from '../../layouts';
import { Close } from '../../components';
import { AspectRatio, Box, Card, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { urlFor } from '../../lib/api';
import client from '../../lib/sanity';

type Props = {
  data: any;
}

export default function Painting({ data }: Props) {

const router = useRouter();

return (
<Fragment>
<PaintingLayout>

<Close props={`/canvas/#${data.order}`}/>

<AnimatePresence>
<motion.div 
key={router.asPath}
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0 }}
transition={{ delay: 0.1 , type: 'tween', ease: 'linear'}}
>

<Card className='details' mt={['80px', '120px']} direction={['column-reverse', 'row']} >

<Box  py={['20px', '40px']}  width={['100%','40%']}> 

<Flex alignItems={'flex-start'} height={'100%'}>
<VStack alignItems={'start'}>

<Text as={'p'} className={'name'} fontSize={'1rem'} >{data.title}</Text> 

{data.size ? 
<Text as={'p'} className={'size'} fontSize={'1rem'} >{data.size}</Text>
: null
}

{data.price ?
<Text as={'p'} className={'price'} fontSize={'1rem'} >{data.price}</Text> 
: null
}

</VStack>
</Flex>

</Box>

<Box className='painting'  width={['100%','60%']} >
<AspectRatio   ratio={1}>
{data.large ?  
  <Image src={urlFor(data.large).url()} /> 
: <Image src={urlFor(data.image).url()} />
}
</AspectRatio>
</Box>
</Card>
</motion.div>
</AnimatePresence>
</PaintingLayout>
</Fragment>

)

}

const query = groq`*[_type == 'canvas' && slug.current == $slug][0]{
  title,
  image,
  large,
  slug,
  size,
  price,
  order,
  "current": { 
    "slug": slug.current,title,order 
  },
  "next": *[_type == 'canvas' && ^._createdAt < _createdAt] | order(_createdAt asc)[0]{ 
      "slug": slug.current,title,order
  },
  "previous": *[_type == 'canvas' && ^._createdAt > _createdAt] | order(_createdAt asc)[-1]{ 
      "slug": slug.current, title,order
  },
}`

export async function getStaticProps({ params }: any) {
  const { slug = "" } = params
  const data  = await client.fetch(query, {slug});
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const paths = await client.fetch(groq`*[_type == "canvas" && defined(slug.current)][].slug.current`)
  return {
    paths: paths.map((slug: {slug: any}) => ({params: {slug}})),
    fallback: 'blocking',
  }
}
