import React, { Fragment } from 'react';
import { HomeLayout } from '../layouts/';
import { Image } from '@chakra-ui/react';
import { urlFor } from '../lib/api';
import { getHomePage } from '../lib/api';

type Props = {
    props: any;
  }


export default function Home ({ props}: Props) {

return (

<Fragment>
<HomeLayout> 
{props.map((prop: { _id: any; image: any; title: string; content: any; }) =>
<Image boxSize={'full'} position={'relative'} objectFit='fill' src={urlFor(prop.image).url()}   />
)}
</HomeLayout>
</Fragment>
)
}

export async function getStaticProps(){
    const props = await getHomePage();
    return {
      props: {
        props
      },
      revalidate: 10,
    }
  }

