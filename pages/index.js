import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a software developer based in São Paulo, Brasil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flex={1} p={2} bg="gray.100" borderRadius="md">
          <Heading as="h2" variant="page-title">
            João Victor dos Santos
          </Heading>
          <p>Software Developer (Back-end / Front-end / Data Engineering)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src={pfp}
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
