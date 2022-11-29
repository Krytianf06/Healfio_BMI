import React from "react";
import { Text, View } from "react-native";
import styles from './headerStyles';


const Header = () => {
    return (
    <View>
        <Text style={styles.header}>Healt</Text>
        <Text style={styles.title}>Your body condition</Text>
    </View>
        
    )
};

export default Header;