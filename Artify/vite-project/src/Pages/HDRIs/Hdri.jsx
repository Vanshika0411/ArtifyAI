// import { useState } from "react";
// import { Box, Input, Button, Grid, GridItem, Text, Heading, Flex, Image } from "@chakra-ui/react";
// import { FaPlus, FaUsers } from "react-icons/fa";

// const CommunityCreations = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [communities, setCommunities] = useState([
//     { id: 1, name: "3D Artists Hub", creator: "Admin", icon: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 2, name: "Game Devs United", creator: "Admin", icon: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   ]);

//   const [newCommunity, setNewCommunity] = useState("");

//   const handleCreateCommunity = () => {
//     if (newCommunity.trim()) {
//       setCommunities([...communities, { id: Date.now(), name: newCommunity, creator: "You", icon: "https://via.placeholder.com/100" }]);
//       setNewCommunity("");
//     }
//   };

//   const filteredCommunities = communities.filter((community) =>
//     community.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box p={5} maxW="800px" mx="auto">
//       <Heading textAlign="center" mb={4}>Community Creations</Heading>
//       <Flex mb={4} gap={2}>
//         <Input placeholder="Search community..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       </Flex>
//       <Flex mb={4} gap={2}>
//         <Input placeholder="Create a community..." value={newCommunity} onChange={(e) => setNewCommunity(e.target.value)} />
//         <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleCreateCommunity}>Create</Button>
//       </Flex>
//       <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
//         {filteredCommunities.map((community) => (
//           <GridItem key={community.id} p={4} borderWidth={1} borderRadius="md" textAlign="center">
//             <Image src={community.icon} alt={community.name} borderRadius="full" boxSize="50px" mx="auto" mb={2} />
//             <Text fontWeight="bold">{community.name}</Text>
//             <Text fontSize="sm" color="gray.500">Created by: {community.creator}</Text>
//           </GridItem>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CommunityCreations;
import { useState } from "react";
import { 
  Box, Input, Button, Grid, GridItem, Text, Heading, Flex, Image 
} from "@chakra-ui/react";
import { FaPlus, FaUsers } from "react-icons/fa";

const CommunityCreations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [communities, setCommunities] = useState([
    { id: 1, name: "3D Artists Hub", creator: "Admin", icon: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Game Devs United", creator: "Admin", icon: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]);

  const [newCommunity, setNewCommunity] = useState("");

  const handleCreateCommunity = () => {
    if (newCommunity.trim()) {
      setCommunities([...communities, { id: Date.now(), name: newCommunity, creator: "You", icon: "https://via.placeholder.com/100" }]);
      setNewCommunity("");
    }
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box 
      p={8} 
      minH="100vh" 
      bgImage="url('/public/image-10.png')"
      bgSize="cover"
      bgPosition="center"
      color="white"
    >
      
      {/* Large Centered Heading */}
      <Heading fontSize={{ base: "3xl", md: "5xl" }} textAlign="center" fontWeight="bold" mb={2}>
        Community Creations
      </Heading>

      {/* Subtitle */}
      <Text fontSize={{ base: "md", md: "xl" }} textAlign="center" color="gray.300" mb={6}>
        Discover and create communities for creators like you!
      </Text>

      {/* Search & Create Community */}
      <Flex justify="center" mb={6} gap={4} flexWrap="wrap">
        <Input 
          placeholder="Search community..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          w={{ base: "90%", md: "40%" }} 
          bg="gray.800" 
          color="white"
        />
      </Flex>

      <Flex justify="center" gap={4} flexWrap="wrap">
        <Input 
          placeholder="Create a community..." 
          value={newCommunity} 
          onChange={(e) => setNewCommunity(e.target.value)} 
          w={{ base: "90%", md: "40%" }} 
          bg="gray.800" 
          color="white"
        />
        <Button leftIcon={<FaPlus />} colorScheme="blue" size="lg" onClick={handleCreateCommunity}>
          Create
        </Button>
      </Flex>

      {/* Community Grid */}
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} mt={8}>
        {filteredCommunities.map((community) => (
          <GridItem 
            key={community.id} 
            p={6} 
            bg="blackAlpha.600" 
            borderRadius="lg" 
            textAlign="center" 
            boxShadow="lg"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)", bg: "blackAlpha.700" }}
          >
            <Image src={community.icon} alt={community.name} borderRadius="full" boxSize="80px" mx="auto" mb={4} />
            <Heading size="md" color="white">{community.name}</Heading>
            <Text fontSize="sm" color="yellow.400" mt={2}>
              Created by: {community.creator}
            </Text>
          </GridItem>
        ))}
      </Grid>

    </Box>
  );
};

export default CommunityCreations;
