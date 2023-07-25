import React, { Fragment } from 'react';
import { Willow } from '@/components';
import { getAllWillow } from '../../lib/api';

export default function Index({ images }: any) {

return (
<Fragment>
<Willow props={images} />
</Fragment>
)
}

 export async function getStaticProps(){
    const images = await getAllWillow();
    return {
      props: {
        images
      },
      revalidate: 10,
    }
  }
    