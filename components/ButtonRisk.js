import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonRisk = () => {
    return (
        <TouchableOpacity style={styles.viewStyle}>
            <Text style={styles.textBtn}>Learn more</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        width: 323,
        height: 32,
        borderRadius: 6,
        marginTop:10,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems:"center",
    },
    textBtn: {
        fontFamily: 'RedHatDisplay',
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 26,
        textAlign:'center',
        color:'#97A98F',
    },
})

export default ButtonRisk;