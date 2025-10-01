import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import Profileheader from "../Profile/Profileheader";
import Profiletabs from "../Profile/Profiletabs";
import Profileposts from "../Profile/Profileposts";
import { useParams, Link as RouterLink } from "react-router-dom";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW="container.lg" py={5} position="relative">
      {/* Background Image Banner */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="300px"
        backgroundImage="url('/image-9.png')" // Removed `/public`
        bgSize="cover"
        bgPosition="center"
        zIndex={-1}
        borderRadius="lg"
      />

      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w="full"
        mx="auto"
        flexDirection="column"
      >
        {!isLoading && userProfile && <Profileheader user={userProfile} />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>

      <Flex
        px={{ base: 2, sm: 4 }}
        maxW="full"
        mx="auto"
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
        direction="column"
      >
        <Profiletabs />
        <Profileposts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const ProfileHeaderSkeleton = () => (
  <Flex
    gap={{ base: 4, sm: 10 }}
    py={10}
    direction={{ base: "column", sm: "row" }}
    justifyContent="center"
    alignItems="center"
  >
    <SkeletonCircle size="24" />
    <VStack
      alignItems={{ base: "center", sm: "flex-start" }}
      gap={2}
      mx="auto"
      flex={1}
    >
      <Skeleton height="12px" width="150px" />
      <Skeleton height="12px" width="100px" />
    </VStack>
  </Flex>
);

const UserNotFound = () => (
  <Flex
    flexDir="column"
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    h="100vh"
  >
    <Text fontSize="2xl">User Not Found</Text>
    <Link as={RouterLink} to="/" color="blue.500" mt={4}>
      Go home
    </Link>
  </Flex>
);
