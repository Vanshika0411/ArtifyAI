import { Box, Image, Button, HStack, Text, VStack, Badge } from '@chakra-ui/react'
import React from 'react'

const Feedposts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: '/public/image-01.jpg',
      caption: 'Exploring the beauty of nature!',
      category: 'Nature',
    },
    {
      id: 2,
      imageUrl: '/public/image-03.jpg',
      caption: 'Latest in tech trends.',
      category: 'Technology',
    },
    {
      id: 3,
      imageUrl: '/public/image-02.jpg',
      caption: 'Delicious meals served hot!',
      category: 'Food',
    },
	 {
      id: 4,
      imageUrl: '/public/image-04.jpg',
      caption: 'Ruler of the world!',
      category: 'Anime',
    },
	 {
      id: 5,
      imageUrl: '/public/image-05.jpg',
      caption: 'Rule the track!',
      category: 'Sports Car',
    },
	
  ];

  return (
    <VStack align="stretch" spacing={6} px={2}>
      {posts.map((post) => (
        <Box key={post.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="black">
          {/* Category Badge */}
          <Badge colorScheme="purple" mb={2}>
            {post.category}
          </Badge>

          {/* Post Image */}
          <Image src={post.imageUrl} alt={post.caption} borderRadius="md" objectFit="cover" width="100%" />

          {/* Post Caption */}
          <Text mt={2} fontWeight="semibold">{post.caption}</Text>

          {/* Action Buttons */}
          <HStack mt={3} spacing={4}>
            <Button size="sm" colorScheme="blue">Like</Button>
            <Button size="sm" colorScheme="green">Comment</Button>
            <Button size="sm" colorScheme="teal">Share</Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  )
}

export default Feedposts;
