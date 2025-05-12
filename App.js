import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mensaje, setMensaje] = useState("");
  const [tema, setTema] = useState(true);
  const [hover, setHover] = useState(false);
  return (<>
    <StatusBar style="light" />
    <ImageBackground style={{flex: 4}} source={require("./assets/Fondo.jpg")} resizeMode="repeat">
      <SafeAreaView style={{flex: 1, justifyContent: "center", paddingHorizontal: 20}}>
    
        <View style={styles.container}>
          <Image source={require("./assets/Perfil.png")}/>
          <Text style={tema ? styles.nombre1 : styles.nombre2}>Matias Wilder</Text>
          <Text style={tema ? styles.titulo1 : styles.titulo2}>Estudiante</Text>

          <TextInput style={styles.input }onChangeText={setMensaje} placeholder="Enviar mensaje"/>
          <TouchableOpacity style={styles.boton} onPress={() => Alert.alert(mensaje)}>
            <Text style={{color: "#fff"}}>Contactar</Text>
          </TouchableOpacity>

          <Pressable
          style={[styles.boton, hover ? styles.boton3 : styles.boton2]}
          onPress={() => setTema(!tema)}
          OnPressIn={() => setHover(true)}
          onPressOut={() => setHover(false)}>
            <Text style={{color: "#fff"}}>Ver perfil</Text>
          </Pressable>
        </View>

      </SafeAreaView> 
    </ImageBackground>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#DDE0E0"
  },

  input:{
    height :30,
    fontSize: 20
  },

  boton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#000000"
  },
  boton2: {
    marginTop: 5,
    backgroundColor: "#000000"
  },
  boton3: {
    marginTop: 5,
    backgroundColor: "#000000"
  },


  nombre1: {fontFamily: "sans-serif", fontStyle: "bold", fontSize: 30},
  nombre2: {fontFamily: "comic sans ms", fontSize: 25},
  titulo1: {fontStyle: "italic", fontSize: 30},
  titulo2: {fontStyle: "bold", fontSize: 15}
});
