import { Flex, Avatar, Text, Box } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }:ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Bauer</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            gabriel.bauer9@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Gabriel Bauer" src="https://github.com/gabrielvbauer.png" />
    </Flex>
  )
}