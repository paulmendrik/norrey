import React, { Fragment } from 'react';
import Link from 'next/link';
import { Navigation } from './navigation';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';


export const Header = () => {

return (

<Fragment>
<Flex 
className={'header'}
top={'0'}
py={['20px', '28px']} 
borderBottom={'#00'} 
borderBottomWidth={'1px'}
minHeight={'77px'}
width={'auto'}
>

<Link href={'/'}>
<Text as={'h1'} fontSize={['1rem', '1.75rem']} color={'#010101'} >
Andrew Norrey
</Text>
</Link>

<Spacer display={['block', 'block']}/>

<Navigation />
</Flex>
</Fragment>   
)
}