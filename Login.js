import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props) {

    const { navigation } = props; 

    const goToRegister = () => {
        navigation.navigate("Registro");

    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.firstSection}>
                <Image 
                    source={{
                        uri: 'https://images.pexels.com/photos/18375456/pexels-photo-18375456/free-photo-of-mar-cielo-puesta-de-sol-tarde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }}
                    style={{width: "100%", height: "140%", resizeMode: "cover" }}
                />  
            
                <View
                    style={{
                        position: "absolute"
                    }}
                >
                    <Text style={styles.tittle}>Trevelo</Text> 
                </View>

            </View>

            <View style={styles.secondSection}>
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Email address</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="pink"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>    
                
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="pink"
                            placeholder="********"
                            secureTextEntry={true}
                        /> 
                    </View>

                    <View style={styles.spacing}>
                        <Text style={styles.ForgotPassword}>Forgot password?</Text>
                    </View>
                    
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>Don't have an account?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            
            </View>

        </SafeAreaView>
    );
} 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: '100%',
    },
    secondSection: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between"
    },
    tittle: {
        fontSize: 64,
        color: "white",
    },
    label: {
        color: "#ccc",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    ForgotPassword: {
        color: "black",
        textAlign: 'right'
    },
    button: {
        backgroundColor: "#694b7f",
        padding: 15,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    signup: {
       color: "#694b7f",
       padding: 5, 
    }
})