import React, { Fragment, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import 'swiper/css';
import { urlFor } from '../lib/api';
import { Box, Image, Stack, Square} from '@chakra-ui/react';

export const Glider = ({ data }) => {

const [thumbsSwiper, setThumbsSwiper] = useState(null);

return (

<Fragment> 

<Box className='painting'  width={['100%','60%']}>

<Swiper 
modules={[Thumbs]} 
thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
slidesPerView={1}  
>
{data.slides.map((slide, i) =>
<SwiperSlide key={i}>
<Image src={urlFor(slide.image.asset).url()} objectFit='cover' width={'100%'} />
</SwiperSlide>
)}
</Swiper>

<Box position={'absolute'} pr={['0', '20px']} left={['0','10px']} top={['100%','180px']} width={['100%','40%']}> 
<Swiper 
modules={[Thumbs]}
watchSlidesProgress
onSwiper={setThumbsSwiper}
slidesPerView={4}
spaceBetween={4}
>


<Stack direction={'row'} >
{data.slides.map((slide, i) =>
<SwiperSlide key={i} >
<Square  
size={['80px','80px']}
backgroundImage={urlFor(slide.image.asset).url()} 
backgroundSize={'cover'}
cursor={'pointer'}
/>

</SwiperSlide>
)}

</Stack>
</Swiper>
</Box>
</Box>
</Fragment>
)
}