import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Register(props) {
    const { navigation } = props;
    const [selectedImage, setSelectedImage] = useState(null);
    const goToRegister = () => {
        navigation.navigate("Registro");
    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }
        } catch (error) {
            console.error('Error al seleccionar una imagen:', error);
        }
    };

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

                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button} onPress={pickImage}>
                            <Text style={styles.buttonText}>Escoger imagen de Galería</Text>
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
