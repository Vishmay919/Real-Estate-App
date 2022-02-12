import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.200' alignItems="center">
        <Box fontSize='3xl' color='blue.500' fontWeight='bold'>
            <Link href='/'>Space Estate</Link>
        </Box>
        <Spacer />
        <Box className='phone'>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outline' color='red'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>

        <Box className='no-phone' w="50%" maxW={700} >
            <Flex  alignItems='center' justifyContent='space-between'>
            <Link href='/' passHref>
                <Flex mr={2}  gap={2} justifyContent='space-between' cursor="pointer" alignItems="center">
                    <FcHome />Home  
                </Flex>        
            </Link>
            <Link href='/search' passHref>
                <Flex mr={2} gap={2} justifyContent='space-between' cursor="pointer" alignItems="center">
                <BsSearch />Search  
                </Flex>        
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
                <Flex mr={2} gap={2} justifyContent='space-between' cursor="pointer" alignItems="center">
                <FcAbout />Buy Property  
                </Flex>        
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
                <Flex  gap={2} justifyContent='space-between' cursor="pointer" alignItems="center">
                <FiKey />Rent Property  
                </Flex>        
            </Link>
                </Flex>
            </Box>
    </Flex>
  )
}

export default Navbar