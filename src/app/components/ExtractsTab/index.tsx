"use client";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ExtractsHistory } from './../ExtractsHistory/index';

export function ExtractsTab(){
    return (<Tabs colorScheme="purple" position="relative" variant="unstyled">
    <TabList>
        <Tab _selected={{ color: "#42287A" }}>Extratos</Tab>
        <Tab _selected={{ color: "#42287A" }}>Graficos</Tab>
    </TabList>
    <TabIndicator
    mt="-1.5px"
    height="2px"
    bg="#6D45C0"
    borderRadius="1px"
    />
    <TabPanels>
    <TabPanel>
        <ExtractsHistory />
    </TabPanel>
    <TabPanel>
        <div>
            grafico
        </div>
    </TabPanel>
</TabPanels>
</Tabs>)
}