import { Icon, Button } from "@ui-kitten/components"
import { forward } from "../styles/icons"

const ForwardButton = ({navigation}) => {


    const navigateSection = () => {
        navigation.navigate('SectionChoice');
      }

      const ForwardIcon = (props) => (
            <Icon  name="arrow-forward" {...props} />
      )

    return(
        <Button accessoryRight={ForwardIcon} onPress={navigateSection}>Next</Button>
        // <Icon onPress={navigateSection} style={forward} name="arrow-forward" />
    )
}

export default ForwardButton