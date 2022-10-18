import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { TopNav } from '../components/TopNav';

export const ChoiceScreen = ({navigation}) => {

    return(
        <SafeAreaView style={{ flex:1 }}>
            <TopNav navigation={navigation}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ width: 200}} >God</Button>
                <Button style={{ width: 200}} >Others</Button>
                <Button style={{ width: 200}} >Doing</Button>
            </Layout>
        </SafeAreaView>
    )
} 