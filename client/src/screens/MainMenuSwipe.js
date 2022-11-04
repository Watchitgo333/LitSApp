import React from "react"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { TopNav } from "../components/TopNav"
import { Divider, Layout, Text, ViewPager } from '@ui-kitten/components';
import { DetailsScreen } from "./menus/BeginGroupPrayer";
import { ChoiceScreen } from "./menus/SectionChoice";
export const ParentScreen = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <TopNav navigation={navigation}/>
            <Divider/>
            <ViewPager
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
            >
                <Layout style={{height:'100%'}}>
                    <DetailsScreen 
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        navigation={navigation}/>
                </Layout>
                <Layout style={{height: "100%"}}>
                    <ChoiceScreen 
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        navigation={navigation}/>
                </Layout>
            </ViewPager>
        </SafeAreaView>
    )
}