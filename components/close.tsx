import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Button, Icon } from '@chakra-ui/react';
import { TfiClose } from 'react-icons/tfi';


export const Close = () => {

const router = useRouter();

return (


<Fragment>
<Button
position={'fixed'}
top={['30px','30px']}
right={['0px','30px']}
variant={'ghost'}
_hover={{ bg: 'none'}}
onClick={() => router.back()}
zIndex={'5000'}
>
<Icon as={TfiClose}
width={'24px'}
height={'24px'}
cursor={'pointer'}
color={'#A0AEC0'}
_hover={{color: '#4A5568'}}
/>
</Button>
</Fragment> 
  
)
}
