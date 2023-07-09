import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonalInfo } from '../App';


type Props = PersonalInfo;

const ProfileCard = ({ name, age, imageUrl }: Props) => {

    const handleOnPressBtn = () => {
        Alert.alert(`Hi ${name}! Welcome to React Native Course`);
    }

    return (
        <View style={styles.container}>
            {imageUrl && <Image style={styles.imageContainer} source={{ uri: imageUrl }} />}
            <View style={styles.subContainer}>
                <Text style={styles.textContainer}>NAME:{name}</Text>
                <Text style={styles.textContainer}>AGE:{age}</Text>
            </View>
            <TouchableOpacity onPress={handleOnPressBtn} style={styles.buttonContainer}>
                <Text style={styles.buttonTextContainer}>REACT NATIVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: '#1E1E1E',
        borderRadius: 25,
    },
    imageContainer: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    },
    subContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        color: '#FFFFFFFF',
        fontWeight: '600',
        fontSize: 15,

    },
    buttonContainer: {
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderRadius: 10,
    },
    buttonTextContainer: {
        color: '#1C6075',
        fontWeight: '800',
        fontSize: 15,
    }
})