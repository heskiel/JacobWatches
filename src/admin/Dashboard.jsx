import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart } from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../redux/actions/admin';

const DataBox = ({title, qtyPercentage, qty, profit}) =>(
    <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)' } p={'8'} borderRadius={'lg'}>
        <Text>{title}</Text>
        <HStack spacing={'6'}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>{qty}</Text>
            <HStack>
            <Text>{qtyPercentage} %</Text>
            {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />}
        </HStack>
        </HStack>
        <Text opacity={'0.6'}>Since last month</Text>
    </Box>
);

const Bar = ({title, value, profit}) =>(
    <Box py={'4'} px={['0', '20']}>
        <Heading size={'sm'} mb={'2'}>{title}</Heading>
        <HStack w={'full'} alignItems={'center'}>
            <Text children={profit ? '0%' : `-${value}%`} />
            <Progress  w={'full'} value={profit ? value : 0} colorScheme='blue' />
            <Text>{value > 100 ? value : 100}%</Text>
        </HStack>
    </Box>
)

const Dashboard = () => {
    const dispatch = useDispatch();
    const {
        usersCount,
        subscriptionCount,
        viewsCount,
        subscriptionPercentage,
        usersPercentage,
        viewsPercentage,
        subscriptionProfit,
        viewsProfit,
        usersProfit} = useSelector(state=>state.admin);

    useEffect(()=>{
        dispatch(getDashboardStats());
    },[dispatch])
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box boxSizing='border-box' py={'16'} px={['4', '0']}>
            <Text textAlign={'center'} opacity={0.5}>Last Change was on {String(new Date()).split("G")[0]}</Text>
            <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>DashBoard</Heading>
            <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
                <DataBox title="Visitors" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
                <DataBox title="Users" qty={usersCount} qtyPercentage={Math.round(usersPercentage)} profit={usersProfit} />
                <DataBox title="Buyers" qty={subscriptionCount} qtyPercentage={subscriptionPercentage} profit={subscriptionProfit} />
            </Stack>
            {/* <Box m={['0', '16']} borderRadius={'lg'} p={['0', '16']} mt={['4', '16']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)' } >
                <Heading textAlign={['center', 'left']} size={'md'} pt={['8', '0']} ml={['0', '16']}>Views Graph</Heading>
                <LineChart />
            </Box> */}
            <Grid templateColumns={['1fr', '2fr 1fr']}>
                <Box p={'4'}>
                    <Heading textAlign={['center', 'left']} size={'md'} my={'8'} ml={['0', '16']}>Progress Bar</Heading>
                    <Box>
                        <Bar profit={viewsProfit} title="Visitors" value={viewsPercentage} />
                        <Bar profit={usersProfit} title="Users" value={usersPercentage} />
                        <Bar profit={subscriptionProfit} title="Buyers" value={subscriptionPercentage} />
                    </Box>
                </Box>
                <Box p={['0', '16']} boxSizing='border-box' py={'4'}>
                    <Heading textAlign={'center'} size={'md'} mb={'4'}>Users</Heading>
                    <DoughnutChart views={[subscriptionCount, usersCount - subscriptionCount]} />
                </Box>
            </Grid>
        </Box>
        <Sidebar />
    </Grid>
  )
}

export default Dashboard
