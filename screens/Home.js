import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest: ["Jhon", "Don", "Manisha", "Monika", "Vartul"],
      following: ["Avinash"],
    };
  }
  doFollow = (index) => {
    // const followRequest= this.state.followRequest;
    const { followRequest, following } = this.state;
    const followNew = followRequest.splice(index, 1);
    following.push(followNew);
    this.setState({
      followRequest,
      following,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Your are following {this.state.following.length} number of friends.
        </Text>
        <Button
          title="Go to Second Page"
          options={{ title: 'Overview' }}
          onPress={() => {
            this.props.navigation.navigate("SecondPage", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow,
            });
          }}
        />
        <Button
        style={styles.buttons}
          title="Friend List"
          options={{ title: 'Overview' }}
          onPress={() => {
            this.props.navigation.navigate("FriendList", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow,
            });
          }}
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
});
