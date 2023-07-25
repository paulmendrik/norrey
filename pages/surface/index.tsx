import React, { Fragment } from 'react';
import { Surface } from '@/components';
import { getAllSurface } from '../../lib/api';

export default function Index({ images }: any) {

return (
<Fragment>
<Surface props={images} />
</Fragment>
)
}

 export async function getStaticProps(){
    const images = await getAllSurface();
    return {
      props: {
        images
      },
      revalidate: 10,
    }
  }
    