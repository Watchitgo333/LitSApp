// import { useState } from 'react';
// import { Button, SafeAreaView, StyleSheet } from 'react-native';
// import { ChoiceScreen } from './SectionChoice';
// import { TopNav } from '../../components/TopNav';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import ForwardButton from '../../components/buttons/ForwardButton';
import { marginBody, contentContainer } from '../../styles/layout';
import { Gesture } from 'react-native-gesture-handler';
import { GestureDetector } from 'react-native-gesture-handler';
import { screensEnabled, ScreenStackHeaderLeftView } from 'react-native-screens';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const DetailsScreen = ({ navigation, setSelectedIndex, selectedIndex }) => {

  // const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(selectedIndex)
  
  const scale =  useSharedValue(1);
  const savedScale = useSharedValue(1);
  
  const pinchGesture = Gesture.Pinch()
    .onUpdate((e)=>{
      // if(savedScale.value <= 2.5){
          console.log(e)
          scale.value = savedScale.value * e.scale
        // }
      })
      .onEnd(()=>{
          console.log(scale.value)
          savedScale.value = scale.value;
        })
      

    const animatedStyle = useAnimatedStyle(()=>({
      transform: [{ scale: scale.value }]
    }))
    const styles = StyleSheet.create({
      box: {
        height: '100%'
      },
    });

  return (
    // <GestureDetector gesture={pinchGesture}>
    //   <Animated.View style={[styles.box, animatedStyle]}>
          <Layout style={contentContainer}>
            <Text category='h1'>Presence</Text>
            <Text style={marginBody} category='p1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet. 
              Lectus urna duis convallis convallis tellus. Vel pretium lectus quam id leo. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Aliquet nibh praesent tristique magna. 
              Ipsum dolor sit amet consectetur adipiscing elit duis. Elit sed vulputate mi sit amet mauris commodo quis. Mauris sit amet massa vitae. 
              Sit amet nisl suscipit adipiscing bibendum. Venenatis tellus in metus vulputate eu scelerisque felis. 
              Dapibus ultrices in iaculis nunc sed augue lacus viverra.
            </Text>
            <Divider/>
            {/* <ForwardButton navigation={navigation} screen={"Section"} /> */}
            <ForwardButton
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}/>
        </Layout>
    //   </Animated.View>
    // </GestureDetector>
  );
};

//old screen
{/* <SafeAreaView style={{ flex: 1 }}>
<Text category='h1'>{selectedIndex}</Text>
<Button title='Next' onPress={() => setSelectedIndex(selectedIndex + 1)}/>
<ViewPager
  selectedIndex={selectedIndex}
  onSelect={index => setSelectedIndex(index)}
>
  <ChoiceScreen level="2">

  </ChoiceScreen>
  <ChoiceScreen level="2">
    
    </ChoiceScreen>
<Layout style={{height:'100%'}}>
  <TopNav navigation={navigation}/>
  <Divider/>
    <Layout style={contentContainer}>
      <Text category='h1'>Presence</Text>
      <Text style={marginBody} category='p1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet. 
        Lectus urna duis convallis convallis tellus. Vel pretium lectus quam id leo. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Aliquet nibh praesent tristique magna. 
        Ipsum dolor sit amet consectetur adipiscing elit duis. Elit sed vulputate mi sit amet mauris commodo quis. Mauris sit amet massa vitae. 
        Sit amet nisl suscipit adipiscing bibendum. Venenatis tellus in metus vulputate eu scelerisque felis. 
        Dapibus ultrices in iaculis nunc sed augue lacus viverra.
      </Text>
      <Divider/>
      <ForwardButton navigation={navigation} screen={"Section"} />
    </Layout>

</Layout>
      <ChoiceScreen></ChoiceScreen>
</ViewPager>
</SafeAreaView> */}