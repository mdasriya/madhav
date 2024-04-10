import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  Modal,
  Image,
  Flex,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,Stack,SimpleGrid,Box
} from '@chakra-ui/react'


// let ImageContent = [

//   {
// "title":"image1",
// "img":""
//   },
//   {

//   }
// ]

const statData = [
  {
    id: 1,
    label: 'Clients',
    score: '550'
  },
  {
    id: 2,
    label: 'Projects',
    score: '421'
  },
  {
    id: 3,
    label: 'Revenue',
    score: '$5M'
  }
];


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
   
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
     <SwiperSlide>
          <div style={{
            width:"100%",
            height:"100vh"
          }}

          >
<img  src="https://img.freepik.com/free-photo/close-up-circuit-reparing-tool_23-2148419200.jpg?t=st=1712653880~exp=1712657480~hmac=3ced0627ead14ba23ae6cb6260bb53d4f8fbed661a32d88a73cd65094706219d" alt="" />
          </div>
        </SwiperSlide>

        
     <SwiperSlide>
          <div style={{
            width:"100%",
            height:"100vh"
          }}
          onClick={onOpen}
          >
<img  src="https://img.freepik.com/free-photo/close-up-circuit-reparing-tool_23-2148419200.jpg?t=st=1712653880~exp=1712657480~hmac=3ced0627ead14ba23ae6cb6260bb53d4f8fbed661a32d88a73cd65094706219d" alt="" />
          </div>
        </SwiperSlide>
    </Swiper>
    <Modal isOpen={isOpen} size={'full'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" src="https://bit.ly/2k1H1t6" />
      </Flex>
      <Flex p={8} flex={1} align="center" justifyContent="center">
        <Flex direction="column">
          <Text fontWeight="extrabold" fontSize="x-large" mb={2}>
            <Box as="span" display="inline-block" position="relative">
              Trusted by Our Clients
              <Box as="span" display="block" position="absolute" bg="blue.600" w="100%" h="1px" />
            </Box>
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consecte adipiscing elit. Vestibulum eros ex, mollis eget
            urna eu, convallis interdum ligula. Aenean posuere quam quam, id ultrices nisi vehicula
            et.
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={1} mt={12} mb={4}>
            {statData.map((data) => (
              <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
                <Text fontWeight="extrabold" fontSize="xx-large">
                  {data.score}
                </Text>
                <Text fontSize="sm">{data.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
  </>
  );
}

export default App;
