import React from 'react';
import { Box, Flex, Heading, IconButton, HStack, Text, Button } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { ColorModeButton, useColorModeValue } from '../ui/color-mode';
import { IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { FaLaptop } from 'react-icons/fa';
import { LuLaptop } from 'react-icons/lu';

const Header = () => {

    const navigate = useNavigate();

    const menuItems = {
        "Cadastro": "/",
        "Vagas": "/parking-slots",
        "Clientes": "/clients"
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            px={8}
            h="7vh"
            bg="gray.700"
            shadow="xl"
        >
            <Flex w="100%" justify="space-between" align="center">
                <HStack spacing={8}>
                    <Heading
                        color="white"
                        fontFamily="Open sans"
                        size="lg">Parking App</Heading>
                </HStack>
                <HStack gap="10">
                    {Object.entries(menuItems).map(([menu, path]) => (
                        <Text
                            key={menu}
                            color="white"
                            fontSize="md"
                            fontFamily="Open sans"
                            cursor="pointer"
                            _hover={{ color: "gray.600" }}
                            onClick={() => navigate(path)}
                        >
                            {menu}
                        </Text>
                    ))}
                    <Button size="sm" color="gray.400" variant="outline" onClick={() => navigate("/admin")}>
                        Painel administrativo <LuLaptop />
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
