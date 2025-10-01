// import React, { useState, useRef } from "react";
// import {
//   Box,
//   SimpleGrid,
//   Image,
//   Text,
//   Link,
//   VStack,
//   Heading,
//   Button,
//   Input,
//   Select,
// } from "@chakra-ui/react";

// const ModelCategories = () => {
//   const [categories, setCategories] = useState([
//     {
//       name: "Interior Models",
//       description: "Explore our collection of interior 3D models.",
//       image: "https://images.unsplash.com/photo-1559508551-44bff1de756b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       downloadLink: "#",
//       collection: "General",
//     },
//     {
//       name: "Vehicle Models",
//       description: "A variety of detailed vehicle 3D models.",
//       image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       downloadLink: "#",
//       collection: "General",
//     },
//     {
//       name: "Anime Models",
//       description: "Anime-themed 3D models.",
//       image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       downloadLink: "#",
//       collection: "Anime",
//     },
//     {
//       name: "3D Models",
//       description: "High-quality 3D models.",
//       image: "https://plus.unsplash.com/premium_photo-1675249003484-38931863d9bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
//       downloadLink: "#",
//       collection: "3D",
//     },
//     {
//       name: "Realistic Models",
//       description: "Realistic and high-detailed 3D models.",
//       image: "https://images.unsplash.com/photo-1734670045391-adf5e96f4499?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       downloadLink: "#",
//       collection: "Realistic",
//     }
//   ]);
  
//   const [newCategory, setNewCategory] = useState({ name: "", description: "", image: "", collection: "General" });
//   const [collections, setCollections] = useState(["General", "Anime", "3D", "Realistic"]);
//   const [selectedCollection, setSelectedCollection] = useState("All");
//   const fileInputRef = useRef(null);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewCategory({ ...newCategory, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileSelect = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const addCategory = () => {
//     if (!newCategory.name || !newCategory.image) return;
//     setCategories([...categories, newCategory]);
//     setNewCategory({ name: "", description: "", image: "", collection: "General" });
//   };

//   const deleteCategory = (index) => {
//     setCategories(categories.filter((_, i) => i !== index));
//   };

//   const addCollection = () => {
//     const collectionName = prompt("Enter new collection name:");
//     if (collectionName && !collections.includes(collectionName)) {
//       setCollections([...collections, collectionName]);
//     }
//   };

//   return (
//     <Box p={8}>
//       <Heading mb={6} textAlign="center">My Gallery</Heading>
//       <Select mb={4} onChange={(e) => setSelectedCollection(e.target.value)}>
//         <option value="All">All</option>
//         {collections.map((col, idx) => (
//           <option key={idx} value={col}>{col}</option>
//         ))}
//       </Select>
//       <Box mb={6}>
//         <Input
//           placeholder="Image Name"
//           value={newCategory.name}
//           onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//           mb={2}
//         />
//         <Input
//           placeholder="Description"
//           value={newCategory.description}
//           onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
//           mb={2}
//         />
//         <Select onChange={(e) => setNewCategory({ ...newCategory, collection: e.target.value })} mt={2}>
//           {collections.map((col, idx) => (
//             <option key={idx} value={col}>{col}</option>
            
//           ))}
//         </Select>
//         <Input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} style={{ display: "none" }} />
//         <Button onClick={triggerFileSelect} colorScheme="blue" mt={2}>Select Image</Button>
//         <Input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} style={{ display: "none" }} />
//         <Button onClick={addCategory} colorScheme="blue" mt={2}>Add Model</Button>
//         <Button onClick={addCollection} colorScheme="green" mt={2} ml={2}>Add Collection</Button>
//       </Box>
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
//         {categories.filter(category => selectedCollection === "All" || category.collection === selectedCollection).map((category, index) => (
//           <VStack
//             key={index}
//             p={4}
//             borderWidth="1px"
//             borderRadius="lg"
//             spacing={3}
//             textAlign="center"
//           >
//             <Image src={category.image} alt={category.name} borderRadius="md" />
//             <Heading size="md">{category.name}</Heading>
//             <Text>{category.description}</Text>
//             <Text fontSize="sm" fontWeight="bold">Collection: {category.collection}</Text>
//             <Link href={category.downloadLink} color="blue.500" fontWeight="bold">Download</Link>
//             <Button colorScheme="red" size="sm" onClick={() => deleteCategory(index)}>Delete</Button>
//           </VStack>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default ModelCategories;

import React, { useState, useRef } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Link,
  VStack,
  Heading,
  Button,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";

const ModelCategories = () => {
  const [categories, setCategories] = useState([
    {
      name: "Interior Models",
      description: "Explore our collection of interior 3D models.",
      image: "https://images.unsplash.com/photo-1559508551-44bff1de756b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
      collection: "General",
    },
    {
      name: "Vehicle Models",
      description: "A variety of detailed vehicle 3D models.",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
      collection: "General",
    },
    {
      name: "Anime Models",
      description: "Anime-themed 3D models.",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
      collection: "Anime",
    },
  ]);
  
  const [newCategory, setNewCategory] = useState({ name: "", description: "", image: "", collection: "General" });
  const [collections, setCollections] = useState(["General", "Anime", "3D", "Realistic"]);
  const [selectedCollection, setSelectedCollection] = useState("All");
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory({ ...newCategory, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const addCategory = () => {
    if (!newCategory.name || !newCategory.image) return;
    setCategories([...categories, newCategory]);
    setNewCategory({ name: "", description: "", image: "", collection: "General" });
  };

  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const addCollection = () => {
    const collectionName = prompt("Enter new collection name:");
    if (collectionName && !collections.includes(collectionName)) {
      setCollections([...collections, collectionName]);
    }
  };

  return (
    <Box 
      p={8} 
      backgroundImage={"url('/public/image-10.png')"} 
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      color="white"
    >
      
      {/* Large Centered Heading */}
      <Heading fontSize={{ base: "3xl", md: "5xl" }} textAlign="center" fontWeight="bold" mb={8}>
        My Gallery
      </Heading>

      {/* Collection Filter */}
      <Flex justifyContent="center" mb={6}>
        <Select 
          w={{ base: "90%", md: "40%" }} 
          bg="gray.700" 
          color="white" 
          borderRadius="md"
          onChange={(e) => setSelectedCollection(e.target.value)}
        >
          <option value="All">All</option>
          {collections.map((col, idx) => (
            <option key={idx} value={col}>{col}</option>
          ))}
        </Select>
      </Flex>

      {/* Upload & Add Category */}
      <Box textAlign="center" mb={6}>
        <Input
          placeholder="Image Name"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          w={{ base: "90%", md: "50%" }}
          mb={2}
          bg="gray.800"
          color="white"
        />
        <Input
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          w={{ base: "90%", md: "50%" }}
          mb={2}
          bg="gray.800"
          color="white"
        />
        <Select 
          onChange={(e) => setNewCategory({ ...newCategory, collection: e.target.value })} 
          w={{ base: "90%", md: "50%" }} 
          bg="gray.800" 
          color="white"
          mb={2}
        >
          {collections.map((col, idx) => (
            <option key={idx} value={col}>{col}</option>
          ))}
        </Select>
        
        <Input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} style={{ display: "none" }} />
        
        <Flex justifyContent="center" gap={4}>
          <Button onClick={triggerFileSelect} colorScheme="blue">Select Image</Button>
          <Button onClick={addCategory} colorScheme="green">Add Model</Button>
          <Button onClick={addCollection} colorScheme="purple">Add Collection</Button>
        </Flex>
      </Box>

      {/* Gallery Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {categories
          .filter(category => selectedCollection === "All" || category.collection === selectedCollection)
          .map((category, index) => (
            <VStack
              key={index}
              p={4}
              bg="blackAlpha.600"
              borderRadius="lg"
              spacing={3}
              textAlign="center"
              boxShadow="lg"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)", bg: "blackAlpha.700" }}
            >
              <Image src={category.image} alt={category.name} borderRadius="md" boxSize="200px" objectFit="cover" />
              <Heading size="md" color="white">{category.name}</Heading>
              <Text color="gray.300">{category.description}</Text>
              <Text fontSize="sm" fontWeight="bold" color="yellow.400">Collection: {category.collection}</Text>
              <Link href={category.downloadLink} color="blue.300" fontWeight="bold">Download</Link>
              <Button colorScheme="red" size="sm" onClick={() => deleteCategory(index)}>Delete</Button>
            </VStack>
        ))}
      </SimpleGrid>
      
    </Box>
  );
};

export default ModelCategories;
