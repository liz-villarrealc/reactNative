import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Register() {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.firstSection}>  
                <View
                    style={{
                        position: "Center"
                    }}
                >    
                    <Text style={styles.tittle}>Regístrate</Text>

                </View>
            </View>

            <View style={styles.secondSection}>
            
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="pink"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>    
                
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="pink"
                            placeholder="********"
                            secureTextEntry={true}
                        /> 
                    </View>
                    
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    

        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondSection: {
        flex: 2,
        width: '100%',
        padding: 20,
        backgroundColor: "white"
    },
    tittle: {
        fontSize: 30,
        color: "white",
    },
    label: {
        color: "black",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    button: {
        backgroundColor: "#694b7f",
        padding: 15,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 15,
    },
})