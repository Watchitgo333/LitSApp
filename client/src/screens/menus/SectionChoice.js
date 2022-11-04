import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import { TopNav } from '../../components/TopNav';

export const ChoiceScreen = ({navigation}) => {

    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        layout:{
            flex:1,
            alignItems:"center",
            padding:55
        },
        header:{
            marginBottom:100
        },
        buttons:{
            margin:20,
            width:150
        }
    })

    const navigateSection = (e, value) => {
        console.log(value)
        navigation.navigate(value)
    }

    return(
        <Layout style={styles.layout}>
            <Text style={styles.header} category='h1'>Section</Text>
            <Button style={styles.buttons} onPress={(e, value="God")=>navigateSection(e, value)}>God</Button>
            <Button style={styles.buttons} onPress={(e, value="Others")=>navigateSection(e, value)}>Others</Button>
            <Button style={styles.buttons} onPress={(e, value="Do")=>navigateSection(e, value)}>Doing</Button>
        </Layout>
    )
} 

//old screen
// <SafeAreaView style={styles.container}>
// <TopNav navigation={navigation}/>
// <Divider/>
// <Layout style={styles.layout}>
//     <Text style={styles.header} category='h1'>Section</Text>
//     <Button style={styles.buttons} onPress={(e, value="God")=>navigateSection(e, value)}>God</Button>
//     <Button style={styles.buttons} onPress={(e, value="Others")=>navigateSection(e, value)}>Others</Button>
//     <Button style={styles.buttons} onPress={(e, value="Do")=>navigateSection(e, value)}>Doing</Button>
// </Layout>
// </SafeAreaView>

