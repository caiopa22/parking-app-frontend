import { Button, Center, Field, Fieldset, For, Group, Heading, HStack, Input, InputAddon, Stack, Table, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useColorMode } from '../components/ui/color-mode';
import Header from '../components/Header/header';
import axios from 'axios';
import { toaster } from '../components/ui/toaster';

const ParkingSlotsPage = () => {
    const { toggleColorMode } = useColorMode();
    const [parkingSlotsData, setParkingSlotsData] = useState(null);


    const items = [
        { id: 1, parkingSlot: "A1", plate: "ABC-1234" },
        { id: 2, parkingSlot: "B2", plate: "XYZ-5678" },
        { id: 3, parkingSlot: "C3", plate: "DEF-9012" },
        { id: 4, parkingSlot: "D4", plate: "GHI-3456" },
        { id: 5, parkingSlot: "E5", plate: "JKL-7890" },
        { id: 6, parkingSlot: "F6", plate: "MNO-2345" },
        { id: 7, parkingSlot: "G7", plate: "PQR-5678" },
        { id: 8, parkingSlot: "H8", plate: "STU-8901" },
        { id: 9, parkingSlot: "I9", plate: "VWX-3456" },
        { id: 10, parkingSlot: "J10", plate: "YZA-6789" },
    ];

    // Função GET para buscar dados sobre as vagas
    const fetchSlotsData = () => {
        axios.get("http://localhost/endpoint")
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    console.log("Informações vagas :", data)
                    setParkingSlotsData(data)
                }
            })
            .catch(error => {
                toaster.error({
                    title: "Ocorreu um erro buscando as informações das vagas.",
                })
            });
    };

    // Toda vez que a pagina carregar, buscar os dados
    useEffect(() => {
        fetchSlotsData();
    }, [])

    return (
        <>
            <Header />
            <Center bg="gray.600" w="100vw" h="93vh">
                <VStack bg="white" p="10" rounded="lg">
                    <Stack w="400px" gap="4">
                        <Stack>
                            <Heading
                                fontSize="2xl"
                                fontFamily="Open sans"
                            >Vagas atualmente utilizadas</Heading>
                            <Text
                                fontFamily="Roboto"
                                fontSize="md"
                            >
                                Deseja reservar sua vaga? Clique aqui
                            </Text>
                        </Stack>
                        <Table.Root interactive size="lg" variant="outline" rounded="lg" fontFamily="Open sans">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Vaga</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end">Placa</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>{item.parkingSlot}</Table.Cell>
                                        <Table.Cell textAlign="end">{item.plate}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </Stack>
                </VStack>
            </Center >
        </>
    );
};

export default ParkingSlotsPage;