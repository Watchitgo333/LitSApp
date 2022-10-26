import { ThemeContext } from "../../../theme/context";
import { Icon, TopNavigationAction } from '@ui-kitten/components'
import { useContext } from "react";

const LightDarkButton = () => {

const themeContext = useContext(ThemeContext);

const MoonIcon = (props) => (
    <Icon {...props} name="moon-outline"/>
)

    return(
        <TopNavigationAction icon={MoonIcon} onPress={themeContext.toggleTheme}/>
    )
}

export default LightDarkButton;