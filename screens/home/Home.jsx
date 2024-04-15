import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reuseable from "../../components/Reuseable/reuseable.style";
import { HeightSpacer, ReuseableText } from "../../components/Tiles/index";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reuseable.container}>
      <View>
        <View style={reuseable.rowWithSpace("space-between")}>
          <ReuseableText
            text={"Hey User!"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReuseableText
          text={"Place"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
