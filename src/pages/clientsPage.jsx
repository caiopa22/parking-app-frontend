import { Button, Center, Field, Fieldset, For, Group, Heading, HStack, Input, InputAddon, Stack, Table, Text, Toaster, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useColorMode } from '../components/ui/color-mode';
import Header from '../components/Header/header';
import { toaster } from '../components/ui/toaster';
import axios from 'axios';

const ClientsPage = () => {
    const { toggleColorMode } = useColorMode();

    const [clientsData, setClientsData] = useState(null);

    const items = [
        { id: 1, name: "João Silva", phone: "(11) 98765-4321", email: "joao.silva@email.com", plate: "ABC-1234", model: "Toyota Corolla" },
        { id: 2, name: "Maria Souza", phone: "(21) 99876-5432", email: "maria.souza@email.com", plate: "XYZ-5678", model: "Honda Civic" },
        { id: 3, name: "Pedro Oliveira", phone: "(31) 91234-5678", email: "pedro.oliveira@email.com", plate: "DEF-9012", model: "Ford Focus" },
        { id: 4, name: "Ana Costa", phone: "(41) 93456-7890", email: "ana.costa@email.com", plate: "GHI-3456", model: "Hyundai HB20" },
        { id: 5, name: "Lucas Mendes", phone: "(51) 92345-6789", email: "lucas.mendes@email.com", plate: "JKL-7890", model: "Chevrolet Onix" },
        { id: 6, name: "Fernanda Lima", phone: "(61) 94567-8901", email: "fernanda.lima@email.com", plate: "MNO-2345", model: "Renault Kwid" },
        { id: 7, name: "Carlos Pereira", phone: "(71) 95678-9012", email: "carlos.pereira@email.com", plate: "PQR-5678", model: "Fiat Argo" },
        { id: 8, name: "Juliana Rocha", phone: "(81) 96789-0123", email: "juliana.rocha@email.com", plate: "STU-8901", model: "Volkswagen Gol" },
        { id: 9, name: "Rafael Santos", phone: "(91) 97890-1234", email: "rafael.santos@email.com", plate: "VWX-3456", model: "Nissan Kicks" },
        { id: 10, name: "Bruna Almeida", phone: "(92) 98901-2345", email: "bruna.almeida@email.com", plate: "YZA-6789", model: "Jeep Renegade" },
    ];

    // Função GET para buscar dados sobre as vagas
    const fetchClientsData = () => {
        axios.get("http://localhost/endpoint")
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    console.log("Informações dos clientes :", data)
                    setClientsData(data)
                }
            })
            .catch(error => {
                toaster.error({
                    title: "Ocorreu um erro buscando as informações dos clientes.",
                })
            });
    };

    // Toda vez que a pagina carregar, buscar os dados
    useEffect(() => {
        fetchClientsData();
    }, [])

    return (
        <>
            <Header />
            <Center bg="gray.600" w="100vw" h="93vh">
                <VStack bg="white" p="10" rounded="lg">
                    <Stack gap="4">
                        <Stack>
                            <Heading
                                fontSize="2xl"
                                fontFamily="Open sans"
                            >Clientes cadastrados</Heading>
                            <Text
                                fontFamily="Roboto"
                                fontSize="md"
                            >
                                Deseja fazer um cadastro? Clique aqui
                            </Text>
                        </Stack>
                        <Table.Root interactive size="lg" variant="outline" rounded="lg" fontFamily="Open sans">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Nome</Table.ColumnHeader>
                                    <Table.ColumnHeader>Telefone</Table.ColumnHeader>
                                    <Table.ColumnHeader>E-mail</Table.ColumnHeader>
                                    <Table.ColumnHeader>Placa</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end">Modelo</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.phone}</Table.Cell>
                                        <Table.Cell>{item.email}</Table.Cell>
                                        <Table.Cell>{item.plate}</Table.Cell>
                                        <Table.Cell textAlign="end">{item.model}</Table.Cell>
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

export default ClientsPage;