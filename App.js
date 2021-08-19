import { blue } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Saúl Alejandro Laínez Mejía{"\n"}</Text>
      <Text style={styles.paragraph}>Hobbies:😜{"\n"}</Text>
      <Text style={styles.list}>
        *Leer libros📚{"\n"}
        *Aprender🔑{"\n"}
        *Jugar Videojuegos⚔{"\n"}
        *Cocinar🍽{"\n"}
      </Text>
      <Image source={require('./assets/my.png')} style={styles.imageMy}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph:{
    fontSize: 20,
    color: '#fbff0d',
  },
  imageMy:{
    height: 180,
    width: 180,
  },
  list:{
    color: '#fff',
  },
});
