import { View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "./../style/style.js";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { authen, database } from "../Firebase.js";
import { useEffect, useState } from "react";
import SproutSVG from "../assets/SproutSVG.js";
import { ref, onValue } from 'firebase/database';

export let currUserName = "";
export let currUserEmail = "";

export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authen, (user) => {
            if (user) {
                const nameRef = ref(database, "users/" + authen.currentUser.uid + "/name");
                onValue(nameRef, (snapshot) => {
                    currUserName = snapshot.val();
                });
                const emailRef = ref(database, "users/" + authen.currentUser.uid + "/email");
                onValue(emailRef, (snapshot) => {
                    currUserEmail = snapshot.val();
                });
                navigation.navigate("Loading");
            }
        });
        return unsubscribe;
    }, []);

    const handleLogin = () => {
        signInWithEmailAndPassword(authen, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with " + user.email);
            })
            .catch((error) => alert(error.message));
        onAuthStateChanged(authen, (user) => {
            if (user) {
                navigation.navigate("Loading");
            } else {
                console.log("Didn't work");
            }
        });
    };

    return (
        <View style={login.container}>
            <View style={login.background}>
                <View style={login.graphics}>
                    <SproutSVG state="login" />
                </View>
                <View style={login.content}>
                    <TextInput
                        style={login.input}
                        placeholder="email"
                        placeholderTextColor={"rgba(0,0,0,.5)"}
                        onChangeText={(text) => setEmail(text)}
                    ></TextInput>
                    <TextInput
                        secureTextEntry={true}
                        style={login.input}
                        placeholder="password"
                        placeholderTextColor={"rgba(0,0,0,.5)"}
                        onChangeText={(text) => setPassword(text)}
                    ></TextInput>
                    <View style={login.submit}>
                        <Text onPress={handleLogin} style={login.submitText}>
                            sign in
                        </Text>
                    </View>
                    <View style={login.create}>
                        <Text style={login.createText} numberOfLines={1}>
                            need an account?{" "}
                            <Text
                                onPress={() => {
                                    navigation.navigate("CreateAccount");
                                }}
                                style={login.createButton}
                            >
                                create
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
