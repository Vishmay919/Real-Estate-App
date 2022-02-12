import Image from 'next/image'
import Link from 'next/link'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl })=>(
  <Flex borderRadius="lg" bg="gray.100" py="6" flexWrap='wrap' justifyContent='center' alignItems='start' my='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box ml='8' mt="4" w={500}>
    <Text fontSize='3xl' fontWeight='bold' >{title1}<br />{title2}</Text>
    <Text color='gray.700' fontSize='lg' paddingTop='3' paddingBottom='3' >{desc1}<br />{desc2}</Text>
    <Button fontSize='xl' bg='blue.500'  color='white' p='6' mt="4">
      <Link href={linkName}><a color='red'>{buttonText}</a></Link>
    </Button>
    </Box>
  </Flex>
)

export default function Home({propertyForSale, propertyForRent}) {
  return (
    <Box >
      <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <Flex flexWrap='wrap' justifyContent='center'>
      {propertyForRent.map(property=> <Property property={property} key={property.id} />)}
    </Flex>

    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <Flex flexWrap='wrap' justifyContent='center'>
      {propertyForSale.map(property=> <Property property={property} key={property.id} />)}
    </Flex>

    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}