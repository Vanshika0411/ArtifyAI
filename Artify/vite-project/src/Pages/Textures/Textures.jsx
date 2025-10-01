// // // import {
// // // 	Box,
// // // 	Button,
// // // 	Input,
// // // 	Slider,
// // // 	Heading,
// // // 	Flex,
// // // 	Divider,
// // // 	Menu,
// // // 	MenuButton,
// // // 	MenuList,
// // // 	MenuItem,
// // // } from "@chakra-ui/react";
// // // import { MdRotateRight, MdDownload, MdCrop, MdSettings } from "react-icons/md";
// // // import { useRef, useState } from "react";
// // // import ReactCrop from "react-image-crop";
// // // import "react-image-crop/dist/ReactCrop.css";

// // // const ImageEditor = () => {
// // // 	const fileInputRef = useRef(null);
// // // 	const [image, setImage] = useState(null);
// // // 	const [crop, setCrop] = useState({ aspect: 1 });
// // // 	const [completedCrop, setCompletedCrop] = useState(null);
// // // 	const [rotation, setRotation] = useState(0);
// // // 	const [brightness, setBrightness] = useState(100);
// // // 	const [contrast, setContrast] = useState(100);
// // // 	const [grayscale, setGrayscale] = useState(0);
// // // 	const [saturation, setSaturation] = useState(100);
// // // 	const [blur, setBlur] = useState(0);
// // // 	const backgroundImage = "https://img.freepik.com/premium-photo/black-pattern-hexagons-with-glowing-light-reflection-background_311619-10375.jpg";

// // // 	const handleImageUpload = (event) => {
// // // 		const file = event.target.files[0];
// // // 		if (file) {
// // // 			const reader = new FileReader();
// // // 			reader.onload = (e) => setImage(e.target.result);
// // // 			reader.readAsDataURL(file);
// // // 		}
// // // 	};

// // // 	const handleRotate = () => {
// // // 		setRotation((prev) => (prev + 90) % 360);
// // // 	};

// // // 	const handleDownload = () => {
// // // 		const canvas = document.createElement("canvas");
// // // 		const ctx = canvas.getContext("2d");
// // // 		const img = new Image();
// // // 		img.src = image;
// // // 		img.onload = () => {
// // // 			canvas.width = img.width;
// // // 			canvas.height = img.height;
// // // 			ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px)`;
// // // 			ctx.drawImage(img, 0, 0);
// // // 			const link = document.createElement("a");
// // // 			link.href = canvas.toDataURL("image/png");
// // // 			link.download = "edited-image.png";
// // // 			link.click();
// // // 		};
// // // 	};

// // // 	return (
// // // 		<Box display="flex" height="100vh" bgImage={backgroundImage} bgSize="cover" color="white" p={6}>
// // // 			<Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
// // // 				<Heading fontSize="3xl" mb={5}>Professional Image Editor</Heading>
// // // 				<Button onClick={() => fileInputRef.current.click()} colorScheme="blue" mb={4}> Upload Image </Button>
// // // 				<Input type="file" accept="image/*" ref={fileInputRef} display="none" onChange={handleImageUpload} />
// // // 				{image && (
// // // 					<Box mt={6} p={4} bg="blackAlpha.700" borderRadius={8}>
// // // 						<img
// // // 							src={image}
// // // 							alt="Uploaded"
// // // 							style={{
// // // 								transform: `rotate(${rotation}deg)`,
// // // 								filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px)`,
// // // 								maxWidth: "400px",
// // // 								borderRadius: "10px",
// // // 							}}
// // // 						/>
// // // 					</Box>
// // // 				)}
// // // 			</Box>

// // // 			{image && (
// // // 				<Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={6}>
// // // 					<Flex justify="center" gap={3}>
// // // 						<Button leftIcon={<MdRotateRight />} onClick={handleRotate} colorScheme="teal"> Rotate </Button>
// // // 						<Button leftIcon={<MdDownload />} onClick={handleDownload} colorScheme="green"> Download </Button>
// // // 					</Flex>
// // // 					<Divider my={4} />
// // // 					<Heading fontSize="lg" mb={2} textAlign="center">Adjustments</Heading>
// // // 					{[
// // // 						{ label: "Brightness", value: brightness, setter: setBrightness, min: 50, max: 200 },
// // // 						{ label: "Contrast", value: contrast, setter: setContrast, min: 50, max: 200 },
// // // 						{ label: "Grayscale", value: grayscale, setter: setGrayscale, min: 0, max: 100 },
// // // 						{ label: "Saturation", value: saturation, setter: setSaturation, min: 50, max: 200 },
// // // 						{ label: "Blur", value: blur, setter: setBlur, min: 0, max: 10 },
// // // 					].map(({ label, value, setter, min, max }, index) => (
// // // 						<Menu key={index}>
// // // 							<MenuButton as={Button} rightIcon={<MdSettings />} my={1} w="full"> {label} </MenuButton>
// // // 							<MenuList p={2} bg="gray.800" borderRadius={6}>
// // // 								<Slider min={min} max={max} value={value} onChange={(val) => setter(val)} />
// // // 							</MenuList>
// // // 						</Menu>
// // // 					))}
// // // 				</Box>
// // // 			)}
// // // 		</Box>
// // // 	);
// // // };

// // // export default ImageEditor;
// // import {
// // 	Box,
// // 	Button,
// // 	Input,
// // 	Slider,
// // 	Heading,
// // 	Flex,
// // 	Divider,
// // 	Menu,
// // 	MenuButton,
// // 	MenuList,
// // 	MenuItem,
// // } from "@chakra-ui/react";
// // import { MdRotateRight, MdDownload, MdCrop, MdSettings } from "react-icons/md";
// // import { useRef, useState } from "react";
// // import ReactCrop from "react-image-crop";
// // import "react-image-crop/dist/ReactCrop.css";

// // const ImageEditor = () => {
// // 	const fileInputRef = useRef(null);
// // 	const [image, setImage] = useState(null);
// // 	const [crop, setCrop] = useState({ aspect: 1 });
// // 	const [completedCrop, setCompletedCrop] = useState(null);
// // 	const [rotation, setRotation] = useState(0);
// // 	const [brightness, setBrightness] = useState(100);
// // 	const [contrast, setContrast] = useState(100);
// // 	const [grayscale, setGrayscale] = useState(0);
// // 	const [saturation, setSaturation] = useState(100);
// // 	const [blur, setBlur] = useState(0);
// // 	const backgroundImage = "https://img.freepik.com/premium-photo/black-pattern-hexagons-with-glowing-light-reflection-background_311619-10375.jpg";

// // 	const handleImageUpload = (event) => {
// // 		const file = event.target.files[0];
// // 		if (file) {
// // 			const reader = new FileReader();
// // 			reader.onload = (e) => setImage(e.target.result);
// // 			reader.readAsDataURL(file);
// // 		}
// // 	};

// // 	const handleRotate = () => {
// // 		setRotation((prev) => (prev + 90) % 360);
// // 	};

// // 	const handleDownload = () => {
// // 		const canvas = document.createElement("canvas");
// // 		const ctx = canvas.getContext("2d");
// // 		const img = new Image();
// // 		img.src = image;
// // 		img.onload = () => {
// // 			canvas.width = img.width;
// // 			canvas.height = img.height;
// // 			ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px)`;
// // 			ctx.drawImage(img, 0, 0);
// // 			const link = document.createElement("a");
// // 			link.href = canvas.toDataURL("image/png");
// // 			link.download = "edited-image.png";
// // 			link.click();
// // 		};
// // 	};

// // 	return (
// // 		<Box display="flex" height="100vh" bgImage={backgroundImage} bgSize="cover" color="white" p={6}>
// // 			<Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
				
// // 				{/* Large Centered Heading */}
// // 				<Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" textAlign="center" mb={5}>
// // 					Professional Image Editor
// // 				</Heading>

// // 				<Button onClick={() => fileInputRef.current.click()} colorScheme="blue" mb={4}> Upload Image </Button>
// // 				<Input type="file" accept="image/*" ref={fileInputRef} display="none" onChange={handleImageUpload} />
				
// // 				{image && (
// // 					<Box mt={6} p={4} bg="blackAlpha.700" borderRadius={8}>
// // 						<img
// // 							src={image}
// // 							alt="Uploaded"
// // 							style={{
// // 								transform: `rotate(${rotation}deg)`,
// // 								filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px)`,
// // 								maxWidth: "400px",
// // 								borderRadius: "10px",
// // 							}}
// // 						/>
// // 					</Box>
// // 				)}
// // 			</Box>

// // 			{image && (
// // 				<Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={6}>
					
// // 					<Flex justify="center" gap={3}>
// // 						<Button leftIcon={<MdRotateRight />} onClick={handleRotate} size="lg" colorScheme="teal">
// // 							Rotate
// // 						</Button>
// // 						<Button leftIcon={<MdDownload />} onClick={handleDownload} size="lg" colorScheme="green">
// // 							Download
// // 						</Button>
// // 					</Flex>

// // 					<Divider my={4} />

// // 					{/* Adjustments Heading Centered */}
// // 					<Heading fontSize={{ base: "xl", md: "3xl" }} fontWeight="medium" textAlign="center" color="gray.300" mb={4}>
// // 						Adjustments
// // 					</Heading>

// // 					{[
// // 						{ label: "Brightness", value: brightness, setter: setBrightness, min: 50, max: 200 },
// // 						{ label: "Contrast", value: contrast, setter: setContrast, min: 50, max: 200 },
// // 						{ label: "Grayscale", value: grayscale, setter: setGrayscale, min: 0, max: 100 },
// // 						{ label: "Saturation", value: saturation, setter: setSaturation, min: 50, max: 200 },
// // 						{ label: "Blur", value: blur, setter: setBlur, min: 0, max: 10 },
// // 					].map(({ label, value, setter, min, max }, index) => (
// // 						<Menu key={index}>
// // 							<MenuButton as={Button} rightIcon={<MdSettings />} my={1} w="full">
// // 								{label}
// // 							</MenuButton>
// // 							<MenuList p={2} bg="gray.800" borderRadius={6}>
// // 								<Slider min={min} max={max} value={value} onChange={(val) => setter(val)} />
// // 							</MenuList>
// // 						</Menu>
// // 					))}
// // 				</Box>
// // 			)}
// // 		</Box>
// // 	);
// // };

// // export default ImageEditor;
// import React, { useRef, useState } from "react";
// import {
// 	Box,
// 	Button,
// 	Input,
// 	Slider,
// 	SliderTrack,
// 	SliderFilledTrack,
// 	SliderThumb,
// 	Heading,
// 	Flex,
// 	Divider,
// } from "@chakra-ui/react";
// import { MdRotateRight, MdDownload, MdCrop, MdFilter } from "react-icons/md";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// const ImageEditor = () => {
// 	const fileInputRef = useRef(null);
// 	const [image, setImage] = useState(null);
// 	const [rotation, setRotation] = useState(0);
// 	const [brightness, setBrightness] = useState(100);
// 	const [contrast, setContrast] = useState(100);
// 	const [grayscale, setGrayscale] = useState(0);
// 	const [saturation, setSaturation] = useState(100);
// 	const [blur, setBlur] = useState(0);
// 	const [sepia, setSepia] = useState(0);
// 	const [hueRotate, setHueRotate] = useState(0);
// 	const [crop, setCrop] = useState({ aspect: 1 });
// 	const [selectedFilter, setSelectedFilter] = useState("");

// 	const handleImageUpload = (event) => {
// 		const file = event.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();
// 			reader.onload = (e) => setImage(e.target.result);
// 			reader.readAsDataURL(file);
// 		}
// 	};

// 	const handleRotate = () => {
// 		setRotation((prev) => (prev + 90) % 360);
// 	};

// 	const handleDownload = () => {
// 		const canvas = document.createElement("canvas");
// 		const ctx = canvas.getContext("2d");
// 		const img = new Image();
// 		img.src = image;
// 		img.onload = () => {
// 			canvas.width = img.width;
// 			canvas.height = img.height;
// 			ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`;
// 			ctx.drawImage(img, 0, 0);
// 			const link = document.createElement("a");
// 			link.href = canvas.toDataURL("image/png");
// 			link.download = "edited-image.png";
// 			link.click();
// 		};
// 	};

// 	return (
// 		<Box display="flex" height="100vh" bgImage="url('https://img.freepik.com/premium-photo/black-pattern-hexagons-with-glowing-light-reflection-background_311619-10375.jpg')" bgSize="cover" color="white" p={6}>
// 			<Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
// 				<Heading fontSize="6xl" fontWeight="bold" textAlign="center" mb={5}>Professional Image Editor</Heading>
// 				<Button onClick={() => fileInputRef.current.click()} colorScheme="blue" mb={4}> Upload Image </Button>
// 				<Input type="file" accept="image/*" ref={fileInputRef} display="none" onChange={handleImageUpload} />

// 				{image && (
// 					<ReactCrop src={image} crop={crop} onChange={setCrop}>
// 						<img
// 							src={image}
// 							alt="Uploaded"
// 							style={{
// 								transform: `rotate(${rotation}deg)`,
// 								filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`,
// 								maxWidth: "400px",
// 								borderRadius: "10px",
// 							}}
// 						/>
// 					</ReactCrop>
// 				)}
// 			</Box>

// 			{image && (
// 				<Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={6}>
// 					<Flex justify="center" gap={3}>
// 						<Button leftIcon={<MdRotateRight />} onClick={handleRotate} colorScheme="teal"> Rotate </Button>
// 						<Button leftIcon={<MdCrop />} onClick={() => alert('Crop functionality coming soon!')} colorScheme="orange"> Crop </Button>
// 						<Button leftIcon={<MdDownload />} onClick={handleDownload} colorScheme="green"> Download </Button>
// 					</Flex>

// 					<Divider my={4} />
// 					<Heading fontSize="lg" mb={2} textAlign="center">Filters</Heading>
// 					<Flex gap={2} justify="center">
// 						<Button onClick={() => setSelectedFilter("sepia(100%)")} colorScheme="yellow">Sepia</Button>
// 						<Button onClick={() => setSelectedFilter("invert(100%)")} colorScheme="purple">Invert</Button>
// 						<Button onClick={() => setSelectedFilter("hue-rotate(90deg)")} colorScheme="blue">Hue Rotate</Button>
// 						<Button onClick={() => setSelectedFilter("")} colorScheme="gray">Reset</Button>
// 					</Flex>

// 					<Divider my={4} />
// 					<Heading fontSize="lg" mb={2} textAlign="center">Adjustments</Heading>

// 					{[
// 						{ label: "Brightness", value: brightness, setter: setBrightness, min: 50, max: 200 },
// 						{ label: "Contrast", value: contrast, setter: setContrast, min: 50, max: 200 },
// 						{ label: "Grayscale", value: grayscale, setter: setGrayscale, min: 0, max: 100 },
// 						{ label: "Saturation", value: saturation, setter: setSaturation, min: 50, max: 200 },
// 						{ label: "Blur", value: blur, setter: setBlur, min: 0, max: 10 },
// 						{ label: "Sepia", value: sepia, setter: setSepia, min: 0, max: 100 },
// 						{ label: "Hue Rotate", value: hueRotate, setter: setHueRotate, min: 0, max: 360 },
// 					].map(({ label, value, setter, min, max }, index) => (
// 						<Box key={index}>
// 							<Heading fontSize="md" mt={2}>{label}</Heading>
// 							<Slider min={min} max={max} value={value} onChange={(val) => setter(val)}>
// 								<SliderTrack><SliderFilledTrack bg="blue.500" /></SliderTrack>
// 								<SliderThumb boxSize={4} />
// 							</Slider>
// 						</Box>
// 					))}
// 				</Box>
// 			)}
// 		</Box>
// 	);
// };

// export default ImageEditor;
import React, { useRef, useState } from "react";
import {
	Box,
	Button,
	Input,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Heading,
	Flex,
	Divider,
} from "@chakra-ui/react";
import { MdRotateRight, MdDownload, MdCrop, MdFilter } from "react-icons/md";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageEditor = () => {
	const fileInputRef = useRef(null);
	const [image, setImage] = useState(null);
	const [rotation, setRotation] = useState(0);
	const [brightness, setBrightness] = useState(100);
	const [contrast, setContrast] = useState(100);
	const [grayscale, setGrayscale] = useState(0);
	const [saturation, setSaturation] = useState(100);
	const [blur, setBlur] = useState(0);
	const [sepia, setSepia] = useState(0);
	const [hueRotate, setHueRotate] = useState(0);
	const [crop, setCrop] = useState({ aspect: 1 });
	const [selectedFilter, setSelectedFilter] = useState("");

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => setImage(e.target.result);
			reader.readAsDataURL(file);
		}
	};

	const handleRotate = () => {
		setRotation((prev) => (prev + 90) % 360);
	};

	const handleDownload = () => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.src = image;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.filter = `${selectedFilter} brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`;
			ctx.drawImage(img, 0, 0);
			const link = document.createElement("a");
			link.href = canvas.toDataURL("image/png");
			link.download = "edited-image.png";
			link.click();
		};
	};

	return (
		<Box display="flex" height="100vh" bgImage="url('/public/image-10.png')" bgSize="cover" color="white" p={6}>
			<Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
				<Heading fontSize="6xl" fontWeight="bold" textAlign="center" mb={5}>Professional Image Editor</Heading>
				<Button onClick={() => fileInputRef.current.click()} colorScheme="blue" mb={4}> Upload Image </Button>
				<Input type="file" accept="image/*" ref={fileInputRef} display="none" onChange={handleImageUpload} />

				{image && (
					<ReactCrop src={image} crop={crop} onChange={setCrop}>
						<img
							src={image}
							alt="Uploaded"
							style={{
								transform: `rotate(${rotation}deg)`,
								filter: `${selectedFilter} brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) blur(${blur}px) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`,
								maxWidth: "400px",
								borderRadius: "10px",
							}}
						/>
					</ReactCrop>
				)}
			</Box>

			{image && (
				<Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={6}>
					<Flex justify="center" gap={3}>
						<Button leftIcon={<MdRotateRight />} onClick={handleRotate} colorScheme="teal"> Rotate </Button>
						<Button leftIcon={<MdCrop />} onClick={() => alert('Crop functionality coming soon!')} colorScheme="orange"> Crop </Button>
						<Button leftIcon={<MdDownload />} onClick={handleDownload} colorScheme="green"> Download </Button>
					</Flex>

					<Divider my={4} />
					<Heading fontSize="lg" mb={2} textAlign="center">Filters</Heading>
					<Flex gap={2} justify="center">
						<Button onClick={() => setSelectedFilter("sepia(100%)")} colorScheme="yellow">Sepia</Button>
						<Button onClick={() => setSelectedFilter("invert(100%)")} colorScheme="purple">Invert</Button>
						<Button onClick={() => setSelectedFilter("hue-rotate(90deg)")} colorScheme="blue">Hue Rotate</Button>
						<Button onClick={() => setSelectedFilter("")} colorScheme="gray">Reset</Button>
					</Flex>

					<Divider my={4} />
					<Heading fontSize="lg" mb={2} textAlign="center">Adjustments</Heading>

					{[
						{ label: "Brightness", value: brightness, setter: setBrightness, min: 50, max: 200 },
						{ label: "Contrast", value: contrast, setter: setContrast, min: 50, max: 200 },
						{ label: "Grayscale", value: grayscale, setter: setGrayscale, min: 0, max: 100 },
						{ label: "Saturation", value: saturation, setter: setSaturation, min: 50, max: 200 },
						{ label: "Blur", value: blur, setter: setBlur, min: 0, max: 10 },
						{ label: "Sepia", value: sepia, setter: setSepia, min: 0, max: 100 },
						{ label: "Hue Rotate", value: hueRotate, setter: setHueRotate, min: 0, max: 360 },
					].map(({ label, value, setter, min, max }, index) => (
						<Box key={index}>
							<Heading fontSize="md" mt={2}>{label}</Heading>
							<Slider min={min} max={max} value={value} onChange={(val) => setter(val)}>
								<SliderTrack><SliderFilledTrack bg="blue.500" /></SliderTrack>
								<SliderThumb boxSize={4} />
							</Slider>
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
};

export default ImageEditor;