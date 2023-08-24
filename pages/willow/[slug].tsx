import React, {Fragment } from 'react';
import groq from 'groq';
import { PaintingLayout } from '../../layouts';
import { Glider } from '../../components';
import { Close } from '../../components';
import { Box, Card, Flex, Text, VStack} from '@chakra-ui/react';
import { client } from '../../lib/sanity';


type Props = {
  data: any;
}


export default function Painting({ data }: Props) {

return (
<Fragment>
<PaintingLayout>

<Close/>

<Card className='details' position={'relative'} mt={['80px', '100px']} direction={['column-reverse', 'row']} >

<Box   width={['100%','40%']}> 

<Flex  alignItems={'flex-start'} mt={['0','0']} height={'auto'}>
<VStack alignItems={'start'}>

<Text as={'p'} className={'name'}  fontSize={'1rem'} >{data.title}</Text> 

{data.size ?
<Text as={'p'} className={'size'} fontSize={'1rem'} >{data.size}</Text>
:
<Text as={'p'} fontSize={'1rem'} ></Text>
}
{data.note ?
<Text as={'p'} className={'note'} fontSize={'1rem'} >{data.note}</Text>
:
<Text as={'p'} fontSize={'1rem'} ></Text>
}

 
</VStack>
</Flex>
<Text as={'p'} className={'more'}  fontSize={['1rem','1.25rem']}>Further Images</Text>
</Box>


<Glider data={data} />
</Card> 
</PaintingLayout> 
</Fragment>
)
}
const query = groq`*[_type == 'willow' && slug.current == $slug][0]{
  title,
  painting,
  detailone,
  detailtwo,
  detailthree,
  slug,
  size,
  note,
  order,
  views,
  "slides": views[],
  "current": { 
    "slug": slug.current,title,order 
  },
  "next": *[_type == 'willow' && ^._createdAt < _createdAt] | order(_createdAt asc)[0]{ 
      "slug": slug.current,title,order
  },
  "previous": *[_type == 'willow' && ^._createdAt > _createdAt] | order(_createdAt asc)[-1]{ 
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
  const paths = await client.fetch(groq`*[_type == "willow" && defined(slug.current)][].slug.current`)
  return {
    paths: paths.map((slug: {slug: any}) => ({params: {slug}})),
    fallback: 'blocking',
  }
}

