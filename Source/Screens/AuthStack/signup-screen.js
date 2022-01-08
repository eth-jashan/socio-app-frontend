import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import constants from "../../Constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../Redux/auth/action";

const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
  const styles = StyleSheet.create({
    header: {
      fontFamily: "bold",
      fontSize: 26,
      marginTop: 12,
      marginBottom: 16,
    },
    textInput: {
      fontFamily: "regular",
      fontSize: 16,
      backgroundColor: "transparent",
    },
  });

  const [signup, setSignup] = useState(true);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: `${first} ${last}`,
  });
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const dispatch = useDispatch();

  const validationEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      return true;
    }
    //alert("You have entered an invalid email address!")
    return false;
  };

  useEffect(() => {
    setUser((state) => {
      return {
        email: state.email,
        password: state.password,
        name: `${first} ${last}`,
      };
    });
  }, [first, last]);

  const onRePassword = (text) => {
    console.log("text", text, user.password);
    setPassword(text);
    if (text !== user.password) {
      setPasswordErr(true);
    } else if (password === user.password) {
      setPasswordErr(false);
    }
  };

  const signupAction = () => {
    if (password === user.password && validationEmail()) {
      dispatch(signUpUser(user.email, user.password, user.name));
      console.log("user", user);
    } else {
    }
  };

  const renderHeading = () => (
    <View>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={styles.header}>{signup ? "Sign up" : "Log in"}</Text>
    </View>
  );

  const signUpForm = () => (
    <View style={{ marginVertical: 12 }}>
      <TextInput
        autoCapitalize={"none"}
        value={user.email}
        onChangeText={(text) => setUser((prev) => ({ ...prev, email: text }))}
        theme={{ colors: { primary: constants.colors.primary } }}
        mode="flat"
        placeholder="Your email"
        style={[styles.textInput, { width: "100%" }]}
      />
      {!validationEmail() && user.email.length > 0 ? (
        <Text style={{ alignSelf: "flex-end", color: constants.colors.error }}>
          Enter a valid email address
        </Text>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 26,
        }}
      >
        <View style={{ width: "48%" }}>
          <TextInput
            value={first}
            onChangeText={setFirst}
            theme={{ colors: { primary: constants.colors.primary } }}
            placeholder="First  name"
            style={[styles.textInput, { width: "100%" }]}
          />
        </View>
        <View style={{ width: "48%" }}>
          <TextInput
            value={last}
            onChangeText={setLast}
            theme={{ colors: { primary: constants.colors.primary } }}
            placeholder="Last  name"
            style={[styles.textInput, { width: "100%" }]}
          />
        </View>
      </View>

      <TextInput
        error={password !== user.password}
        value={user.password}
        onChangeText={(text) =>
          setUser((prev) => ({ ...prev, password: text }))
        }
        theme={{ colors: { primary: constants.colors.primary } }}
        placeholder="Create password"
        secureTextEntry
        style={[styles.textInput, { width: "100%", marginTop: 26 }]}
      />

      <TextInput
        error={password !== user.password}
        value={password}
        onChangeText={(text) => setPassword(text)}
        theme={{ colors: { primary: constants.colors.primary } }}
        placeholder="Re-enter  password"
        secureTextEntry
        style={[styles.textInput, { width: "100%", marginTop: 26 }]}
      />
      {password !== user.password && (
        <Text style={{ alignSelf: "flex-end", color: constants.colors.error }}>
          Password don't match
        </Text>
      )}
    </View>
  );

  const loginForm = () => (
    <View style={{ marginVertical: 12 }}>
      <TextInput
        theme={{ colors: { primary: constants.colors.primary } }}
        mode="flat"
        placeholder="Your email"
        style={[styles.textInput, { width: "100%" }]}
      />

      <View>
        <TextInput
          theme={{ colors: { primary: constants.colors.primary } }}
          placeholder="Password"
          secureTextEntry
          style={[styles.textInput, { width: "100%", marginTop: 26 }]}
        />
        <Text style={{ alignSelf: "flex-end" }}>Forgot password?</Text>
      </View>
    </View>
  );

  const renderTnc = () => (
    <Text
      style={{
        width: "70%",
        textAlign: "center",
        alignSelf: "center",
        color: "gray",
        marginVertical: 12,
      }}
    >
      By signing up you agree to our Terms of Use and Privacy Policy
    </Text>
  );

  const renderSignupButton = () => (
    <TouchableOpacity
      style={{
        marginVertical: 12,
        backgroundColor: constants.colors.primary,
        width: "100%",
        padding: 12,
        alignSelf: "center",
        borderRadius: 60,
      }}
      onPress={signupAction}
    >
      <Text
        style={{
          fontFamily: "medium",
          color: constants.colors.white,
          alignSelf: "center",
        }}
      >
        {signup ? "Sign up" : "Log in"}
      </Text>
    </TouchableOpacity>
  );

  const renderFormChange = () => (
    <Text style={{ fontFamily: "medium", alignSelf: "center", color: "gray" }}>
      {signup ? "Already have a account?" : "Donont have an acount"}
      <Text
        onPress={() => setSignup(!signup)}
        style={{ fontFamily: "bold", color: "black" }}
      >
        {"  "}
        {signup ? "Log in" : "Sign in"}
      </Text>
    </Text>
  );

  return (
    <SafeAreaView
      style={{ backgroundColor: constants.lightMode.background, flex: 1 }}
    >
      <View style={{ padding: 16, width: "100%", height: "100%" }}>
        {renderHeading()}
        {signup ? signUpForm() : loginForm()}
        {renderTnc()}
        <View>
          {renderSignupButton()}
          {renderFormChange()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
