import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading
} from '@chakra-ui/react'
const contactus = () => {
    return (
        <>
            <Heading textAlign='center' as='h2' size='xl'>
                Contact Us
            </Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='blue'>

                    <Thead>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                Office</Td>
                            <Td>
                                New Krishna Dham, Shop No. 6,
                                Near Veena Nagar, Opp. Gabriel India,
                                L.B.S. Marg, Mulund (W),
                                Mumbai 400 080</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                        </Tr>
                        <Tr>
                            <Td>Phone</Td>
                            <Td>	022 - 21640633</Td>
                        </Tr>
                        <Tr>
                            <Td>E-mail</Td>
                            <Td>		sales@vashuindustrialwear.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile</Td>
                            <Td>		9821556963 , 9320056963 (Manish Chellani)</Td>
                        </Tr>
                        <Tr>
                            <Th>Office</Th>
                            <Th>	S-1, Krishana Ganga, Rajaji Path,
                                Ramnagar, Next to Ramnagar Police station,
                                Dombivali (E), Thane 421 201.</Th>
                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer>
        </>
    )
}

export default contactus