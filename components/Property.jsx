import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
    <Flex shadow='md' borderRadius='lg' flexWrap='wrap' w='400px'  marginRight='16px' marginTop='16px'  justifyContent='flex-start' cursor='pointer' >
      <Box >
        <Image className='rounded-top' src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} objectFit='cover' />
      </Box>
      <Box w='full' p='5' paddingTop='0px'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency? `/${rentFrequency}`: "/-"}</Text>
          </Flex>
          <Box border='1px' borderColor='gray.300' p='4px' rounded='full'>
            <Avatar  size='sm' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex alignItems='center' fontWeight='semibold' justifyContent='space-between' w='250px' color='blue.600'>
          {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='medium' mt='2'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
  )
}

export default Property