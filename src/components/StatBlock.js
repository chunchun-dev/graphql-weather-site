import { Flex, Text } from '@chakra-ui/layout'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat'
import React from 'react'

function StatBlock({ statName, stat }) {
    return (
        <Stat bg='linear-gradient(#d60973, #fc804a)' p={10} paddingTop={2} paddingBottom={2} m={2} borderRadius={10}>
            <StatLabel>{statName}</StatLabel>
            <StatNumber>{stat}</StatNumber>
        </Stat>
    )
}

export default StatBlock
