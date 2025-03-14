import { Button, Center, Field, Fieldset, Group, HStack, Input, InputAddon, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useColorMode } from '../components/ui/color-mode';
import Header from '../components/Header/header';
import axios from 'axios';
import { toaster, Toaster } from '../components/ui/toaster';

const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        address: '',
        phone: '',
        licensePlate: '',
        email: '',
        vehicleModel: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevState => ({ ...prevState, [name]: value }));
    };

    // Função POST para registrar dados
    const register = () => {
        axios.post("http://localhost/endpoint", registerData)
            .then(response => {
                if (response.status === 200) {
                    toaster.success({
                        title: "Vaga registrada com sucesso",
                    })
                }
            })
            .catch(error => {
                toaster.error({
                    title: "Ocorreu um erro registrando as inforamações.",
                })
            });
    };

    // Estilos dos inputs
    const inputStyle = {
        size: "lg",
        borderColor: 'gray',
        rounded: 'md',
        _focus: {
            borderColor: "black"
        }
    }

    return (
        <>
            <Header />
            <Toaster />
            <Center bg="gray.600" w="100vw" h="93vh">
                <VStack bg="white" p="10" rounded="lg">
                    <Fieldset.Root w="600px" gap="8">
                        <Stack gap="4">
                            <Fieldset.Legend
                                fontSize="2xl"
                                fontFamily="Open sans"
                            >Registrar carro em uma vaga</Fieldset.Legend>
                            <Fieldset.HelperText
                                fontFamily="Roboto"
                                fontSize="md"
                            >
                                Por favor, informe os dados necessários abaixo.
                            </Fieldset.HelperText>
                        </Stack>
                        <Fieldset.Content gap="6">
                            <HStack gap="12">
                                <Field.Root>
                                    <Field.Label>Nome</Field.Label>
                                    <Input {...inputStyle} placeholder='Nome completo' name="name" value={registerData.name} onChange={handleChange} />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Endereço</Field.Label>
                                    <Input {...inputStyle} placeholder='Nome completo' name="address" value={registerData.address} onChange={handleChange} />
                                </Field.Root>
                            </HStack>
                            <HStack gap="12">
                                <Field.Root>
                                    <Field.Label>Telefone</Field.Label>
                                    <Input {...inputStyle} placeholder='Telefone' name="phone" value={registerData.phone} onChange={handleChange} />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Placa do veículo</Field.Label>
                                    <Input {...inputStyle} placeholder='Placa de veículo' name="licensePlate" value={registerData.licensePlate} onChange={handleChange} />
                                </Field.Root>
                            </HStack>
                            <HStack gap="12">
                                <Field.Root>
                                    <Field.Label>E-mail</Field.Label>
                                    <Input {...inputStyle} placeholder='E-mail' name="email" type="email" value={registerData.email} onChange={handleChange} />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Modelo do veículo</Field.Label>
                                    <Input {...inputStyle} placeholder='Modelo do veículo' name="vehicleModel" value={registerData.vehicleModel} onChange={handleChange} />
                                </Field.Root>
                            </HStack>
                        </Fieldset.Content>
                        <Button colorPalette="green" type="submit" alignSelf="flex-start" onClick={() => register()}>
                            Enviar
                        </Button>
                    </Fieldset.Root>
                </VStack>
            </Center >
        </>
    );
};

export default RegisterPage;