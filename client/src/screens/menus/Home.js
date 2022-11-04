import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import LightDarkButton from '../../components/buttons/LightDarkButton';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    // navigation.navigate('BeginGroupPrayer');
    navigation.navigate('Main')
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Life in the Spirit' alignment='center' accessoryRight={LightDarkButton}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Group Prayer</Button>
      </Layout>
    </SafeAreaView>
  );
};