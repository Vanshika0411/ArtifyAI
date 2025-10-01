// import {
// 	Box,
// 	Button,
// 	CloseButton,
// 	Flex,
// 	Image,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalFooter,
// 	ModalHeader,
// 	ModalOverlay,
// 	Textarea,
// 	Tooltip,
// 	useDisclosure,
// 	Select,
// } from "@chakra-ui/react";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import { useState } from "react";

// const API_KEY = "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";
// const API_URL = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";

// const TextToImage = () => {
// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const [prompt, setPrompt] = useState("");
// 	const [images, setImages] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [artStyle, setArtStyle] = useState("painting");
// 	const [resolution, setResolution] = useState("512x512");
// 	const backgroundImage = "https://img.freepik.com/premium-photo/black-pattern-hexagons-with-glowing-light-reflection-background_311619-10375.jpg";

// 	const generateImage = async () => {
// 		if (!prompt) return;
// 		setIsLoading(true);
// 		try {
// 			const modifiedPrompt = `${prompt}, in ${artStyle} style, resolution ${resolution}`;
// 			const response = await fetch(API_URL, {
// 				headers: { Authorization: `Bearer ${API_KEY}` },
// 				method: "POST",
// 				body: JSON.stringify({ "inputs": modifiedPrompt }),
// 			});
// 			const imageBlob = await response.blob();
// 			const objectUrl = URL.createObjectURL(imageBlob);
// 			setImages((prevImages) => [...prevImages, objectUrl]);
// 		} catch (error) {
// 			console.error("Error generating image:", error);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	const clearImages = () => {
// 		setImages([]);
// 	};

// 	return (
// 		<>
// 			<Tooltip hasArrow label={"Generate Image"} placement='right' ml={1} openDelay={500}>
// 				<Flex alignItems={'center'} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }} onClick={onOpen}>
// 					<FaRegSquarePlus size={25} />
// 					<Box display={{ base: "none", md: "block" }}>AI Generate</Box>
// 				</Flex>
// 			</Tooltip>

// 			<Modal isOpen={isOpen} onClose={onClose} size='full'>
// 				<ModalOverlay />
// 				<ModalContent bgImage={backgroundImage} bgSize='cover' bgPosition='center'>
// 					<ModalHeader fontSize='2xl' textAlign='center' color='white'>Generate AI Image</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody pb={6}>
// 						<Flex gap={3} mb={4}>
// 							<Select value={artStyle} onChange={(e) => setArtStyle(e.target.value)}>
// 								<option value="painting">Painting</option>
// 								<option value="anime">Anime</option>
// 								<option value="3d render">3D Render</option>
// 								<option value="realistic">Realistic</option>
// 								<option value="watercolor">Watercolor</option>
// 							</Select>
// 							<Select value={resolution} onChange={(e) => setResolution(e.target.value)}>
// 								<option value="256x256">Low</option>
// 								<option value="512x512">Medium</option>
// 								<option value="1024x1024">High</option>
// 							</Select>
// 						</Flex>
// 						<Textarea placeholder='Enter a prompt...' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
// 						<Button mt={4} onClick={generateImage} isLoading={isLoading} w='full'>Generate</Button>
// 						<Button mt={2} colorScheme='red' onClick={clearImages} w='full'>Clear Images</Button>
// 						<Flex mt={5} wrap='wrap' justifyContent={'center'} gap={6}>
// 							{images.map((image, index) => (
// 								<Box key={index} position='relative' textAlign='center'>
// 									<Image src={image} alt='Generated img' boxSize='300px' objectFit='cover' borderRadius={8} />
// 									<Box mt={4}>
// 										<Button size='sm' colorScheme='blue' onClick={() => {
// 											const a = document.createElement("a");
// 											a.href = image;
// 											a.download = "generated_image.png";
// 											document.body.appendChild(a);
// 											a.click();
// 											document.body.removeChild(a);
// 										}} style={{ display: 'block', margin: 'auto' }}>Download</Button>
// 									</Box>
// 								</Box>
// 							))}
// 						</Flex>
// 					</ModalBody>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	);
// };

// export default TextToImage;


import {
	Box,
	Button,
	CloseButton,
	Flex,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
	Select,
} from "@chakra-ui/react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useState } from "react";

const API_KEY = "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";
const API_URL = "https://router.huggingface.co/replicate/v1/models/black-forest-labs/flux-dev-lora/predictions";

const TextToImage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [prompt, setPrompt] = useState("");
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [artStyle, setArtStyle] = useState("painting");
	const [resolution, setResolution] = useState("512x512");

	// Using full URL for background image to avoid issues
	const backgroundImage = "url('/image-10.png')"; // Full URL path

	const generateImage = async () => {
		if (!prompt) return;
		setIsLoading(true);

		try {
			// Modify prompt with artStyle and resolution
			const modifiedPrompt = `${prompt}, in ${artStyle} style, resolution ${resolution}`;

			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ inputs: modifiedPrompt }),
			});

			// Check if response is JSON (indicating an error in the API response)
			const contentType = response.headers.get("content-type");
			if (contentType && contentType.includes("application/json")) {
				const errorJson = await response.json();
				console.error("API Error:", errorJson);
				alert("Failed to generate image. The model might still be loading or encountered an error.");
				return;
			}

			// Handle the image response if it's a valid blob
			const imageBlob = await response.blob();
			if (imageBlob.size === 0) {
				alert("Failed to generate image, received empty response.");
				return;
			}

			const objectUrl = URL.createObjectURL(imageBlob);

			// Add the generated image URL to the images array
			setImages((prevImages) => [...prevImages, objectUrl]);
		} catch (error) {
			console.error("Error generating image:", error);
			alert("Something went wrong while generating the image.");
		} finally {
			setIsLoading(false);
		}
	};

	// Clear the images array
	const clearImages = () => {
		setImages([]);
	};

	return (
		<>
			<Tooltip hasArrow label={"Generate Image"} placement="right" ml={1} openDelay={500}>
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
					<FaRegSquarePlus size={25} />
					<Box display={{ base: "none", md: "block" }}>AI Generate</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} size="full">
				<ModalOverlay />
				<ModalContent
					bgImage={backgroundImage}
					bgSize="cover"
					bgPosition="center"
					border="1px solid gray"
					maxW={{ base: "100vw", md: "80vw" }}
					h={{ base: "100vh", md: "90vh" }}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<ModalCloseButton />

					<ModalBody pb={6} textAlign="center">
						<Box fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white" mb={4}>
							Generate AI Image
						</Box>

						<Box fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="gray.300" mb={6}>
							Select Options
						</Box>

						<Flex gap={3} mb={4} justifyContent="center">
							<Select value={artStyle} onChange={(e) => setArtStyle(e.target.value)} w={"40%"}>
								<option value="painting">Painting</option>
								<option value="anime">Anime</option>
								<option value="3d render">3D Render</option>
								<option value="realistic">Realistic</option>
								<option value="watercolor">Watercolor</option>
							</Select>
							<Select value={resolution} onChange={(e) => setResolution(e.target.value)} w={"40%"}>
								<option value="256x256">Low</option>
								<option value="512x512">Medium</option>
								<option value="1024x1024">High</option>
							</Select>
						</Flex>

						<Textarea
							placeholder="Enter a prompt..."
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							w="80%"
							m="auto"
							size="lg"
						/>

						<Flex justifyContent="center" gap={4} mt={4}>
							<Button onClick={generateImage} isLoading={isLoading} size="lg" colorScheme="blue">
								Generate
							</Button>
							<Button colorScheme="red" onClick={clearImages} size="lg">
								Clear Images
							</Button>
						</Flex>

						<Flex mt={5} wrap="wrap" justifyContent={"center"} gap={6}>
							{images.map((image, index) => (
								<Box key={index} position="relative" textAlign="center">
									<Image
										src={image}
										alt="Generated img"
										boxSize="300px"
										objectFit="cover"
										borderRadius={8}
									/>
									<Box mt={4}>
										<Button
											size="sm"
											colorScheme="blue"
											onClick={() => {
												const a = document.createElement("a");
												a.href = image;
												a.download = "generated_image.png";
												document.body.appendChild(a);
												a.click();
												document.body.removeChild(a);
											}}
											style={{ display: "block", margin: "auto" }}
										>
											Download
										</Button>
									</Box>
								</Box>
							))}
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default TextToImage;
