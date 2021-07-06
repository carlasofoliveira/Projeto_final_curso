import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import DropDownItem from "react-native-drop-down-item";


export default function Novo_Evento() {
  const [input, setInput] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.Imageinsert}>
        <LinearGradient
          colors={["#E3CEF6", "#CEF6EC"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.box}
        />
      </View>
      <View>
         <Text style={styles.textitlefirst}> Designação ou Nome* </Text>
       <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          setInput("");
        }}
        placeholder="inserir designação..." 
      />
      </View>
    <DropDownItem>

      </DropDownItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  Imageinsert: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: 300,
    height: 177,
    paddingTop: 1,
    marginTop: -70,
  
    borderRadius: 20,
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    paddingRight: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  textitlefirst: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 25,
  },
  texsecondtitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 25,
    color: "gray",
  },
  input: {
    backgroundColor:"white",
    fontSize:16,
    fontStyle:"normal",
    width: 350,
    borderWidth: 1,
    borderRadius: 12,
    padding: 5,
    paddingLeft:25,
    marginTop: -5,
    marginRight: 10,
    marginBottom: 15,
    borderColor:"#FFFFFF",
  },
  texttitlesecond: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    paddingBottom: 5,
    marginTop: 5,
    marginLeft: 25,
  },
  content:{
    backgroundColor: "#EEF5FF",
    paddingBottom: 5,
    marginTop: 5,
    marginLeft: 10,
  },
});
