import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Home() {
  return (
    <View>
      <View>
        <Text>Hi Abe,</Text>
        <Text>Welcome Back 👋</Text>
      </View>
      <View>
        <TextInput />
        <Text>
          Each xkcd comic comes with an ID tag alonside it. Enter ID of the
          comic to search OR tap the favorites button in the tab bar to view
          your favorite xkcd comics.
        </Text>
      </View>
      <Text>Latest Comic</Text>
      <View>
        <View></View>
        <View>
          <View>
            <Text>#737</Text>
            <Text>Yogurt</Text>
            <Text>Date created : 5/20</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
