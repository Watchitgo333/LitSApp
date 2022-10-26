import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import ForwardButton from '../../components/buttons/ForwardButton';
import { TopNav } from '../../components/TopNav';
import { marginBody, contentContainer } from '../../styles/layout';

export const DetailsScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};