import { Button, Center, Heading, HStack, Input, Stack, Table, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header';
import axios from 'axios';
import { toaster } from '../components/ui/toaster';

const AdminPage = () => {

    const [adminData, setAdminData] = useState(null)

    const items = [
        {
            id: 1,
            name: "João Silva",
            plate: "ABC-1234",
            model: "Toyota Corolla",
            parkingSpot: "A1",
            entryDate: "2023-03-10 08:00",
            exitDate: "2023-03-10 10:00",
            price: "R$ 20,00"
        },
        {
            id: 2,
            name: "Maria Souza",
            plate: "XYZ-5678",
            model: "Honda Civic",
            parkingSpot: "B2",
            entryDate: "2023-03-11 09:00",
            exitDate: "2023-03-11 11:30",
            price: "R$ 25,00"
        },
        {
            id: 3,
            name: "Pedro Oliveira",
            plate: "DEF-9012",
            model: "Ford Focus",
            parkingSpot: "C3",
            entryDate: "2023-03-12 07:45",
            exitDate: "2023-03-12 09:15",
            price: "R$ 18,00"
        },
        {
            id: 4,
            name: "Ana Costa",
            plate: "GHI-3456",
            model: "Hyundai HB20",
            parkingSpot: "D4",
            entryDate: "2023-03-13 10:30",
            exitDate: "2023-03-13 12:00",
            price: "R$ 22,00"
        },
        {
            id: 5,
            name: "Lucas Mendes",
            plate: "JKL-7890",
            model: "Chevrolet Onix",
            parkingSpot: "E5",
            entryDate: "2023-03-14 08:00",
            exitDate: "2023-03-14 09:45",
            price: "R$ 15,00"
        },
        {
            id: 6,
            name: "Fernanda Lima",
            plate: "MNO-2345",
            model: "Renault Kwid",
            parkingSpot: "F6",
            entryDate: "2023-03-15 09:00",
            exitDate: "2023-03-15 11:15",
            price: "R$ 20,00"
        },
        {
            id: 7,
            name: "Carlos Pereira",
            plate: "PQR-5678",
            model: "Fiat Argo",
            parkingSpot: "G7",
            entryDate: "2023-03-16 11:00",
            exitDate: "2023-03-16 13:30",
            price: "R$ 18,00"
        },
        {
            id: 8,
            name: "Juliana Rocha",
            plate: "STU-8901",
            model: "Volkswagen Gol",
            parkingSpot: "H8",
            entryDate: "2023-03-17 10:15",
            exitDate: "2023-03-17 12:45",
            price: "R$ 20,00"
        },
        {
            id: 9,
            name: "Rafael Santos",
            plate: "VWX-3456",
            model: "Nissan Kicks",
            parkingSpot: "I9",
            entryDate: "2023-03-18 08:45",
            exitDate: "2023-03-18 10:30",
            price: "R$ 22,00"
        },
        {
            id: 10,
            name: "Bruna Almeida",
            plate: "YZA-6789",
            model: "Jeep Renegade",
            parkingSpot: "J10",
            entryDate: "2023-03-19 09:30",
            exitDate: "2023-03-19 11:00",
            price: "R$ 19,00"
        },
    ];

    // Função GET para buscar dados sobre as vagas
    const fetchAdminData = () => {
        axios.get("http://localhost/endpoint")
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    console.log("Informações admin :", data)
                    setAdminData(data)
                }
            })
            .catch(error => {
                toaster.error({
                    title: "Ocorreu um erro buscando as informações da administração.",
                })
            });
    };

    // Toda vez que a pagina carregar, buscar os dados
    useEffect(() => {
        fetchAdminData();
    }, [])

    return (
        <>
            <Header />
            <Center bg="gray.600" w="100vw" h="93vh">
                <VStack bg="white" p="10" rounded="lg">
                    <Stack w="1000px" gap="4">
                        <Heading
                            fontSize="2xl"
                            fontFamily="Open sans"
                        >Painel administrativo</Heading>
                        <Table.Root interactive size="lg" variant="outline" rounded="lg" fontFamily="Open sans">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Nome</Table.ColumnHeader>
                                    <Table.ColumnHeader>Placa</Table.ColumnHeader>
                                    <Table.ColumnHeader>Vaga</Table.ColumnHeader>
                                    <Table.ColumnHeader>Data entrada</Table.ColumnHeader>
                                    <Table.ColumnHeader>Data saída</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end" >Valor</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.plate}</Table.Cell>
                                        <Table.Cell>{item.parkingSpot}</Table.Cell>
                                        <Table.Cell>{item.entryDate}</Table.Cell>
                                        <Table.Cell>{item.exitDate}</Table.Cell>
                                        <Table.Cell textAlign="end" >{item.price}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </Stack>
                </VStack>
            </Center>
        </>
    );
};

export default AdminPage;
