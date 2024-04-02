import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, Icon } from "@chakra-ui/react";
import { FaRocket, FaRobot, FaChartLine } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Flex alignItems="center" mb={4}>
        <Icon as={icon} fontSize="3xl" mr={4} />
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.lg" py={20}>
      <Flex direction={["column", "row"]} align="center" justify="space-between">
        <Box flex="1" mb={[8, 0]}>
          <Heading as="h1" size="2xl" mb={4}>
            UseMe4SEO
          </Heading>
          <Text fontSize="xl" mb={8}>
            Boost your SEO with AI-powered autoblogging. Generate high-quality content effortlessly!
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwd3JpdGluZyUyMGJsb2d8ZW58MHx8fHwxNzEyMDE5NTg4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Autoblogger" maxW={["100%", "50%"]} ml={[0, 8]} />
      </Flex>

      <Stack direction={["column", "row"]} spacing={8} mt={20}>
        <Feature icon={FaRocket} title="Fast Content Generation" text="Quickly generate SEO-optimized blog posts with our AI-powered tool." />
        <Feature icon={FaRobot} title="AI-Driven Optimization" text="Our AI algorithms ensure your content is optimized for search engines." />
        <Feature icon={FaChartLine} title="Improved Rankings" text="Watch your search engine rankings soar with consistently high-quality content." />
      </Stack>
    </Container>
  );
};

export default Index;
