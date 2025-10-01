// import { Box, Flex } from "@chakra-ui/react";
// import React from 'react'
// import { TbArrowRoundaboutRight } from "react-icons/tb";


// const Abouts = () => {
//     return (
//         <>
//             <Flex gap={3} cursor={"pointer"}
//             _hover={{ bg: "whiteAlpha.400" }}
//             borderRadius={6}
//             p={2}
//             >
//             <TbArrowRoundaboutRight size={25}/>
//             <Box>Abouts</Box>
//             </Flex>
//         </>
//     );
// };

// export default Abouts

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Divider,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { TbArrowRoundaboutRight } from 'react-icons/tb';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Abouts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const projectDescription = `
    ArtifyAI is an innovative platform designed to empower 3D artists by providing a dynamic space for sharing, discovering, and collaborating on creative projects. Developed with a vision to redefine the way artists interact, ArtifyAI serves as a hub for creators to upload and explore 3D models, textures, HDRIs, and more, fostering a vibrant and engaged artistic community.

Inspired by GitHub’s impact on code collaboration, ArtifyAI aspires to revolutionize the 3D art industry by facilitating seamless collaboration, knowledge sharing, and networking among artists. Beyond being a repository for creative assets, the platform integrates social engagement features, enabling creators to connect, inspire, and grow together.

Currently in its development phase, ArtifyAI is built using state-of-the-art technologies, including React.js for the frontend and Firebase for secure storage, authentication, and database management. Additionally, Vite-React has been leveraged to optimize performance and enhance the development experience.

As ArtifyAI evolves, we welcome feedback and suggestions from the artistic community. Your insights are invaluable in shaping a platform that truly meets the needs of creators. Thank you for being part of this journey! 👍
  `;

  return (
    <>
      <Flex
        gap={3}
        cursor={'pointer'}
        _hover={{ bg: 'whiteAlpha.400' }}
        borderRadius={6}
        p={2}
        onClick={openModal}
      >
        <TbArrowRoundaboutRight size={25} />
        <Box>Abouts</Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={closeModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Abouts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{projectDescription}</Text>
            <Divider my={4} />
            <VStack spacing={4} align="start">
              <Box>
                <Text fontWeight="bold">Name of author:</Text>
                <Text>Vanshika Jain & Saurav Singh</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Studying at:</Text>
                <Text>Shobhit University, Meerut</Text>
              </Box>
              <Box>
                {/* <Text fontWeight="bold">GitHub profile:</Text>
                <Link href="https://github.com/sakshamm04" isExternal>
                  <Flex align="center">
                    <Icon as={FaGithub} />
                    <Box ml={2}>github.com/sakshamm04</Box>
                  </Flex>
                </Link> */}
              </Box>
              <Box>
                {/* <Text fontWeight="bold">LinkedIn profile:</Text>
                <Link href="https://www.linkedin.com/in/saksham-pathak-34bb08291" isExternal>
                  <Flex align="center">
                    <Icon as={FaLinkedin} />
                    <Box ml={2}>linkedin.com/in/saksham-pathak-34bb08291</Box>
                  </Flex>
                </Link> */}
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Abouts;
