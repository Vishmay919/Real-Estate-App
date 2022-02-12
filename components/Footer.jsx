import {Box} from '@chakra-ui/react'
import Link from 'next/link'


const Footer = () => {
  return (
    <Box bg='gray.50' textAlign='center' mt="5" p='8' color="gray.600" borderTop='1px' borderColor="gray.100" >
        Created By :  
        <Link href='https://github.com/Vishmay919'> Vishmay Chauhan </Link>
    </Box>
  )
}

export default Footer