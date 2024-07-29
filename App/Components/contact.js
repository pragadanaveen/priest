import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import back from '../Images/bddesign.jpg';
import { LinearGradient } from 'react-native-linear-gradient';

const Contact = ({ navigation }) => {
    const gradientColors = ['#349de1', '#2672a6'];
    return (
        <View style={styles.container}>
            <View >
                <Image source={back} style={styles.main} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Contact Us
                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor="gray"
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Message</Text>
                <TextInput
                    style={styles.inputt}
                    placeholder="Enter Message"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    multiline={true}
                    numberOfLines={5}
                />
                <TouchableOpacity>
                    <LinearGradient colors={gradientColors} style={styles.btn}>
                        <Text style={styles.sign}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        // backgroundColor: 'skyblue',
        // height: 250,
        width: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: -9
    },
    backButton: {
        // position: 'relative',
        left: 10,
        top: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 20,
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 130,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 40
    },
    label: {
        color: "black",
        fontSize: 17,
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 16,
    },
    inputt: {
        height: 100,
        textAlignVertical: 'top',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 16,
    },
    textArea: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 10,
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 25,
        fontSize: 16,
    },
    btn: {
        top: 20,
        padding: 15,
        width: '95%',
        margin: 'auto',
        borderRadius: 30,
        bottom: 10,
        marginBottom: 10,
    },
    sign: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default Contact;