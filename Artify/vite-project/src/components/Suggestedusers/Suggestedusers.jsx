// import { Text, Flex, VStack, Box, Link, Image } from '@chakra-ui/react'
// import React from 'react'
// import Suggestedheader from './Suggestedheader'
// import Suggesteduser from './Suggesteduser'
// import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
// import Messages from '../../Pages/Homepage/Messages'
// import Notifications from '../../Pages/Homepage/Notifications'
// import Abouts from '../../Pages/Homepage/Abouts'

// const Suggestedusers = () => {
//     const { isLoading, suggestedUsers } = useGetSuggestedUsers()
//     if (isLoading) return null;

//     return (
//         <>
//             <VStack 
//                 className='buxaa' 
//                 py={6} px={6} gap={4} borderBottomWidth={1}
//                 backgroundImage={"url('/public/image5.jpg')"} // Background Image
//                 backgroundSize={"cover"}
//                 backgroundPosition={"center"}
//             >
//                 <Suggestedheader />
//                 {suggestedUsers.length !== 0 && (
//                     <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
//                         <Text fontSize={12} fontWeight={"bold"} color={"white"}>
//                             Suggested For You
//                         </Text>
//                         <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
//                             See All
//                         </Text>
//                     </Flex>
//                 )}
//                 {suggestedUsers.map(user => (
//                     <Suggesteduser user={user} key={user.uid} />
//                 ))}

//                 {/* Messages, Notifications, and Abouts Together */}
//                 <VStack py={4} spacing={3} width="full">
//                     <Messages />
//                     <Notifications />
//                     <Abouts />
//                 </VStack>

//                 {/* Footer with Logo and "Built in 2025" */}
//                 <Box 
//                     fontSize={12} 
//                     color={"white"} 
//                     mt={5} 
//                     display={"flex"} 
//                     flexDirection="column"
//                     alignItems={"center"}
//                 >
//                     <Text color={"gold"} fontWeight={"bold"}>@2025 Built By</Text>
//                     <Link href='https://www.youtube.com/@BlenderGuy3dSam' target='_blank'>
//                         <Image src='/public/image-7.png' alt='Logo' height={20} />
//                     </Link>
//                 </Box>
//             </VStack>
//         </>
//     )
// }

// export default Suggestedusers;




import { Text, Flex, VStack, Box, Link, Image } from '@chakra-ui/react'
import React from 'react'
import Suggestedheader from './Suggestedheader'
import Suggesteduser from './Suggesteduser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
import Messages from '../../Pages/Homepage/Messages'
import Notifications from '../../Pages/Homepage/Notifications'
import Abouts from '../../Pages/Homepage/Abouts'

const Suggestedusers = () => {
    const { isLoading, suggestedUsers } = useGetSuggestedUsers()

    if (isLoading) {
        return <Text color="white">Loading...</Text>;
    }

    return (
        <>
            <VStack 
                className='buxaa' 
                py={6} px={6} gap={4} 
                backgroundImage={"url('/image-10.png')"} // Background Image
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                
                // FIXED FULL SCREEN WITHOUT SCROLLING
                position="fixed"
                top={0} left={0}
                width="100vw" height="100vh"
                display="flex"
                flexDirection="column"
                overflow="hidden" // Prevents scrolling
            >
                <Suggestedheader />

                {suggestedUsers.length !== 0 && (
                    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                        <Text fontSize={12} fontWeight={"bold"} color={"white"}>
                            Suggested For You
                        </Text>
                        <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                            See All
                        </Text>
                    </Flex>
                )}

                <VStack flex="1" width="full" overflow="hidden">
                    {suggestedUsers.map(user => (
                        <Suggesteduser user={user} key={user.uid} />
                    ))}
                </VStack>

                {/* Messages, Notifications, and Abouts */}
                <VStack py={4} spacing={3} width="full">
                    <Messages />
                    <Notifications />
                    <Abouts />
                </VStack>

                {/* Footer Stuck at Bottom */}
                <Box 
                    fontSize={12} 
                    color={"white"} 
                    mt="auto" 
                    display={"flex"} 
                    flexDirection="column"
                    alignItems={"center"}
                >
                    <Text color={"gold"} fontWeight={"bold"}>@2025 Built By</Text>
                    <Link href='https://www.youtube.com/@BlenderGuy3dSam' target='_blank'>
                        <Image src='/image-7.png' alt='Logo' height={20} />
                    </Link>
                </Box>
            </VStack>
        </>
    )
}

export default Suggestedusers;
