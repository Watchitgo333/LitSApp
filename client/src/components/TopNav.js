import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import HomeButton from './buttons/HomeButton';
import LightDarkButton from "./buttons/LightDarkButton";

export const TopNav = ({navigation}) => {

  console.log(navigation)
    const navigateBack = () => {
        navigation.popToTop();
      };
    
    
      const BackAction = () => (
        <TopNavigationAction icon={HomeButton} onPress={navigateBack}/>
      );

    return(
        <TopNavigation title='Life in the Spirit' alignment='center' accessoryLeft={BackAction} accessoryRight={LightDarkButton}/>
    )
}