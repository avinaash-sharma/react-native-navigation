import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class FriendList extends Component {
  render() {
    const dataParsed = this.props.route.params;
    const followRequestParsed = dataParsed.following;
    console.log(followRequestParsed);
    return (
      <View style={styles.container}>
        {followRequestParsed.map((friend, index) => (
          <Button
            style={styles.followButtons}
            key={friend}
            title={`${friend}`}
            onPress={() => {
              console.log("Clicked");
            }}
          />
        ))}
        <Button
          title="Go Back Please.."
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  followButtons:{
    padding: 2,
    margin: 3,
    paddingHorizontal:10,
    backgroundColor: "#000"
  }
});
