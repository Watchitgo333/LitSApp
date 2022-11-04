import { Icon, Button } from "@ui-kitten/components"
import { forward } from "../../styles/buttons"

const ForwardButton = ({navigation, screen, selectedIndex, setSelectedIndex}) => {

    
    const navigateSection = () => {
        console.log(screen)
        navigation.navigate('SectionChoice');
      }

      const ForwardIcon = (props) => (
            <Icon  name="arrow-forward" {...props} />
      )

    return(
        // <Button accessoryRight={ForwardIcon} onPress={navigateSection}>Next</Button>
        <Button accessoryRight={ForwardIcon} onPress={()=>setSelectedIndex(selectedIndex + 1)}>Next</Button>
        // <Icon onPress={navigateSection} style={forward} name="arrow-forward" />
    )
}

export default ForwardButton