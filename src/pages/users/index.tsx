import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <PageTitle>Usuários</PageTitle>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Bauer</Text>
                    <Text fontSize="sm" color="gray.300">gabriel.bauer9@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>04 de Junho, 2022</Text>
                </Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  bg="transparent"
                >
                  <Icon as={RiPencilLine} fontSize="16" />
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Bauer</Text>
                    <Text fontSize="sm" color="gray.300">gabriel.bauer9@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>04 de Junho, 2022</Text>
                </Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  bg="transparent"
                >
                  <Icon as={RiPencilLine} fontSize="16" />
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Bauer</Text>
                    <Text fontSize="sm" color="gray.300">gabriel.bauer9@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>04 de Junho, 2022</Text>
                </Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  bg="transparent"
                >
                  <Icon as={RiPencilLine} fontSize="16" />
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}