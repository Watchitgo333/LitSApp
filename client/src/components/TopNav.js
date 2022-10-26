import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import BackButton from './buttons/BackButton';
import LightDarkButton from "./buttons/LightDarkButton";

export const TopNav = ({navigation}) => {

    const navigateBack = () => {
        navigation.goBack();
      };
    
    
      const BackAction = () => (
        <TopNavigationAction icon={BackButton} onPress={navigateBack}/>
      );

    return(
        <TopNavigation title='Life in the Spirit' alignment='center' accessoryLeft={BackAction} accessoryRight={LightDarkButton}/>
    )
}