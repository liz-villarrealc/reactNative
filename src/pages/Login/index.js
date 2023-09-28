import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native"
import styles from "../../styles/Login"
import Login from "../../../Login"

function login() {

    return(
        <View styles={styles.container}>
            <text style={styles.tittle}>Hola mundo :D </text>
            <TextInput>
                placeholder="email"
                underlineColorAndroid="purple"
            </TextInput>
        </View>
    )
}

export default Login;
