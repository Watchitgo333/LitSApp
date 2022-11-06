import { Icon, TopNavigationAction } from "@ui-kitten/components"

const SettingsButton = () => {

    const SettingsIcon = (props) => {
        return(
            <Icon {...props} name="settings-2-outline" />

        )
    }

    return(
        <TopNavigationAction icon={SettingsIcon} />

    )
}

export default SettingsButton;