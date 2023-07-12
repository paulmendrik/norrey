import React, { Fragment } from 'react';
import { Gallery } from '@/components';
import { getAllPaintings } from '../../lib/api';

export default function Index({ images }: any) {

return (
<Fragment>
<Gallery props={images} />
</Fragment>
)
}

 export async function getStaticProps(){
    const images = await getAllPaintings();
    return {
      props: {
        images
      },
      revalidate: 10,
    }
  }
    