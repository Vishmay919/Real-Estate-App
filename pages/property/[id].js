import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  <Box maxWidth='1000px' margin='auto' p='4'>
    {photos && <ImageScrollbar data={photos} />}
    <Box w='full' py='6' pb='8' px='2' borderBottom='1px' borderColor='gray.300'>
      <Flex paddingTop='2' alignItems='center' mb="2">
        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
        <Text fontWeight='semibold' fontSize='2xl'>
          AED {price}{rentFrequency? `/${rentFrequency}`: "/-"}
        </Text>
        <Spacer />
        <Box border='1px' borderColor='gray.300' p='8px' px='6' rounded='full'>
         By : {agency.name}
        </Box>
      </Flex>
      <Flex fontWeight='semibold' alignItems='center' px='1' justifyContent='space-between' w='250px' color='blue.400'>
        {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Flex flexWrap='wrap' textTransform='Capitalize' justifyContent='space-between' borderBottom='1px' borderColor='gray.300'>
      <Flex justifyContent='space-between' w='400px' p='3'>
        <Text>Type</Text>
        <Text fontWeight='semibold'>{type}</Text>
      </Flex>
      <Flex justifyContent='space-between' w='400px' p='3'>
        <Text>Purpose</Text>
        <Text fontWeight='semibold'>{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent='space-between' w='400px' p='3' >
          <Text>Furnishing Status</Text>
          <Text fontWeight='semibold'>{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box marginTop='8' >
      <Text fontSize='lg' marginBottom='2' fontWeight='bold' color='gray.600'>{title}</Text>
      <Text lineHeight='2' color='gray.600'>{(description)}</Text>
    </Box>

    <Box>
      {amenities.length>0 && <Text letterSpacing="1px" fontSize='2xl' fontWeight='semibold' marginTop='5'>Facilities:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='semibold' color='blue.500' fontSize='l' p='2' bg='gray.50' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}