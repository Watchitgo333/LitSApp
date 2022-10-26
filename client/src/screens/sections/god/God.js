import { Divider, Layout, Text } from "@ui-kitten/components"
import { SafeAreaView } from "react-native"
import { TopNav } from "../../../components/TopNav"
import { contentContainer, marginBody } from "../../../styles/layout"
import ForwardButton from "../../../components/buttons/ForwardButton"

export const GodScreen = ({ navigation }) => {


    return(
        <SafeAreaView style={{flex:1}}>
            <TopNav navigation={navigation}/>
            <Layout style={contentContainer}>
                <Text category='h1'>Lectio</Text>
                <Text style={marginBody} category='p1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet. 
                    Lectus urna duis convallis convallis tellus. Vel pretium lectus quam id leo. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Aliquet nibh praesent tristique magna. 
                    Ipsum dolor sit amet consectetur adipiscing elit duis. Elit sed vulputate mi sit amet mauris commodo quis. Mauris sit amet massa vitae. 
                    Sit amet nisl suscipit adipiscing bibendum. Venenatis tellus in metus vulputate eu scelerisque felis. 
                    Dapibus ultrices in iaculis nunc sed augue lacus viverra.
                </Text>
                <Divider/>
                {/* Tells the button which screen to navigate to next */}
                <ForwardButton navigation={navigation} screen={"God"} />
            </Layout>
        </SafeAreaView>
    )
}