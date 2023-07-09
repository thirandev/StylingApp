import React from "react";
import { StyleSheet, View } from 'react-native';
import ProfileCard from "./ProfileCard";

export type PersonalInfo = {
    name: string;
    age: number;
    imageUrl?: string;
}

const App = () => {
    const myProfile: PersonalInfo = {
        name: 'Thiran',
        age: 24,
        imageUrl: 'https://www.salesconnect.lk/wp-content/uploads/2020/08/portrait-square-05.jpg',
    };

    return (
        <View style={styles.mainContainer}>
            <ProfileCard  {...myProfile} />
        </View>
    )
};

export default App;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999999'
    }
});