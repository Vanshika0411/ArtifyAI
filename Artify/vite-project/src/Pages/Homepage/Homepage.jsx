import { Box, Container, Flex, Image, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import Feedposts from '../Feedposts/Feedposts'
import Suggestedusers from '../../components/Suggestedusers/Suggestedusers'
import './Homepage.css'
import { Link as RouterLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <Box 
      position="relative"
      width="84vw"
      minHeight="100vh" 
      overflowX="hidden" // ✅ Prevents horizontal scrolling
      overflowY="auto" // ✅ Enables vertical scrolling
    >
      {/* Background Image with Blur Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundImage={"url('/public/image-10.png')"} 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        filter="blur(20px)"
        zIndex={-1} 
      />

      {/* Main Content */}
      <Flex gap={1} position="relative">
        {/* Feedposts Section */}
        <Box flex={1} py={1} overflowY="auto" maxHeight="100vh"> 
          <Feedposts />
        </Box>

        {/* Suggested Users Section */}
        <Box
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          borderLeftWidth={1}
        >
          <VStack
            className='rightbuxa'
            py={5}
            alignContent={"center"}
            height="100vh"
            overflowY="auto" // ✅ Enables vertical scrolling
            position="relative"
          >
            <Suggestedusers />
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Homepage;
