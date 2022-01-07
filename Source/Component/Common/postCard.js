import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Entypo, EvilIcons, Feather } from "react-native-vector-icons";

const User = (props) => {
  return (
    <View>
      <Image
        source={require("../../../assets/Trish.png")}
        style={{
          width: 60,
          height: 60,
          borderRadius: 25,
          marginRight: 10,
        }}
      />
    </View>
  );
};

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5,
      }}
    >
      {/*Name area */}
      <View style={{ flexDirection: "row" }}>
        <View style={{}}>
          <Text style={{ fontFamily: "bold" }}>Trish</Text>
        </View>
        <View style={{ paddingHorizontal: 5, alignSelf: "center" }}>
          <Image
            source={require("../../../assets/correct.png")}
            style={{ height: 15, width: 15 }}
          />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontFamily: "medium", color: "#A8A8A8" }}>
            @trishtrashers
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Entypo name="dot-single" color="#A8A8A8" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontFamily: "medium", color: "#A8A8A8" }}>1h</Text>
        </View>
      </View>
      {/*Option */}
      <View>
        <Entypo name="dots-three-vertical" color="black" />
      </View>
    </View>
  );
};
const Description = (props) => {
  return (
    <View style={{ paddingBottom: 5 }}>
      <Text style={{ fontFamily: "medium", fontSize: 16 }}>
        The pizza I ever had!!
      </Text>
    </View>
  );
};
const Post = (props) => {
  return (
    <View
      style={{
        alignContent: "center",
        backgroundColor: "#282828",
        borderRadius: 20,
        justifyContent: "center",
        width: "100%",
        height: (Dimensions.get("screen").height * 40) / 100,
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../../../assets/pizza.jpeg")}
        style={{ width: "100%", height: "100%", alignSelf: "center" }}
      />
    </View>
  );
};

const Reaction = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={{ paddingTop: 10, flexDirection: "row" }}>
        <EvilIcons name="comment" color="#A9A9A9" size={30} />
        <View style={{ alignSelf: "center", paddingLeft: 10 }}>
          <Text style={{ fontFamily: "bold", color: "#A8A8A8" }}>451</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Feather name="repeat" color="#A9A9A9" size={20} />
        <View style={{ alignSelf: "center", paddingLeft: 10 }}>
          <Text style={{ fontFamily: "bold", color: "#A8A8A8" }}>1271</Text>
        </View>
      </View>
      <View style={{ paddingTop: 10, flexDirection: "row" }}>
        <EvilIcons name="heart" color="#A9A9A9" size={30} />
        <View style={{ alignSelf: "center", paddingLeft: 10 }}>
          <Text style={{ fontFamily: "bold", color: "#A8A8A8" }}>8403</Text>
        </View>
      </View>
      <View style={{ paddingTop: 10 }}>
        <EvilIcons name="share-google" color="#A9A9A9" size={30} />
      </View>
    </View>
  );
};

const PostCard = (props) => {
  return (
    <View
      style={{
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        borderColor: "#A9A9A9",
      }}
    >
      <View style={{ flexDirection: "row", margin: 15 }}>
        <User />
        <View style={{ width: "84%" }}>
          <Header />
          <Description />
          <Post />
          <Reaction />
        </View>
      </View>
    </View>
  );
};

export default PostCard;
