// import {
// 	Box,
// 	Button,
// 	Flex,
// 	FormControl,
// 	FormLabel,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalHeader,
// 	ModalOverlay,
// 	Tooltip,
// 	useDisclosure,
// } from "@chakra-ui/react";
// import { RiSearchEyeFill } from "react-icons/ri";
// import useSearchUser from "../../hooks/useSearchUser";
// import { useRef } from "react";
// import Suggesteduser from "../Suggestedusers/Suggesteduser";

// const Search = () => {
// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const searchRef = useRef(null);
// 	const { user, isLoading, getUserProfile, setUser } = useSearchUser();

// 	const handleSearchUser = (e) => {
// 		e.preventDefault();
// 		getUserProfile(searchRef.current.value);
// 	};

// 	const handleGoogleSearch = () => {
// 		const query = searchRef.current.value;
// 		if (query) {
// 			window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
// 		}
// 	};

// 	return (
// 		<>
// 			<Tooltip
// 				hasArrow
// 				label={"Search"}
// 				placement='right'
// 				ml={1}
// 				openDelay={500}
// 				display={{ base: "block", md: "none" }}
// 			>
// 				<Flex
// 					alignItems={"center"}
// 					gap={4}
// 					_hover={{ bg: "whiteAlpha.400" }}
// 					borderRadius={6}
// 					p={2}
// 					w={{ base: 10, md: "full" }}
// 					justifyContent={{ base: "center", md: "flex-start" }}
// 					onClick={onOpen}
// 				>
// 					<RiSearchEyeFill size={25} />
// 					<Box display={{ base: "none", md: "block" }}>Search</Box>
// 				</Flex>
// 			</Tooltip>

// 			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
// 				<ModalOverlay />
// 				<ModalContent 
// 					bgImage="url('https://img.freepik.com/premium-photo/black-pattern-hexagons-with-glowing-light-reflection-background_311619-10375.jpg')" 
// 					bgSize="cover" 
// 					bgPosition="center" 
// 					border="1px solid gray" 
// 					maxW={{ base: "100vw", md: "80vw" }}
// 					h={{ base: "100vh", md: "90vh" }}
// 				>
// 					<ModalHeader>Search</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody pb={6}>
// 						<form onSubmit={handleSearchUser}>
// 							<FormControl>
// 								<FormLabel>Search for Creators or Content</FormLabel>
// 								<Input placeholder='Type here...' ref={searchRef} w={"full"} />
// 							</FormControl>

// 							<Flex w={"full"} justifyContent={"space-between"} mt={4}>
// 								<Button type='submit' size={"sm"} isLoading={isLoading}>
// 									Search Creator
// 								</Button>
// 								<Button onClick={handleGoogleSearch} size={"sm"}>
// 									Search Content
// 								</Button>
// 							</Flex>
// 						</form>
// 						{user && <Suggesteduser user={user} setUser={setUser} />}
// 					</ModalBody>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	);
// };

// export default Search;

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react";
import { RiSearchEyeFill } from "react-icons/ri";
import useSearchUser from "../../hooks/useSearchUser";
import { useRef } from "react";
import Suggesteduser from "../Suggestedusers/Suggesteduser";

const Search = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const searchRef = useRef(null);
	const { user, isLoading, getUserProfile, setUser } = useSearchUser();

	const handleSearchUser = (e) => {
		e.preventDefault();
		getUserProfile(searchRef.current.value);
	};

	const handleGoogleSearch = () => {
		const query = searchRef.current.value;
		if (query) {
			window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
		}
	};

	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<RiSearchEyeFill size={25} />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
				<ModalOverlay />
				<ModalContent 
					 backgroundImage={"url('/public/image-10.png')"} 
					bgSize="cover" 
					bgPosition="center" 
					border="1px solid gray" 
					maxW={{ base: "100vw", md: "80vw" }}
					h={{ base: "100vh", md: "80vh" }}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<ModalCloseButton />

					<ModalBody pb={6} textAlign="center">
						{/* Large Centered Heading */}
						<Box fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" mb={4}>
							Search
						</Box>

						{/* Subtitle Centered */}
						<Box fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="gray.300" mb={6}>
							Search for Creators or Content
						</Box>

						<form onSubmit={handleSearchUser}>
							<FormControl>
								<Input 
									placeholder='Type here...' 
									ref={searchRef} 
									w={"80%"} 
									m="auto"
									textAlign="center"
									size="lg"
								/>
							</FormControl>

							<Flex w={"full"} justifyContent={"center"} mt={4} gap={4}>
								<Button type='submit' size={"lg"} isLoading={isLoading} colorScheme="blue">
									Search Creator
								</Button>
								<Button onClick={handleGoogleSearch} size={"lg"} colorScheme="green">
									Search Content
								</Button>
							</Flex>
						</form>
						
						{user && <Suggesteduser user={user} setUser={setUser} />}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Search;
