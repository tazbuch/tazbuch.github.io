import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const imageUrl = 'https://cdn.discordapp.com/attachments/846827486481743908/1191163418330267769/2finga.png?ex=65a47061&is=6591fb61&hm=109cb2c4538c1ddfde1db3fa18b131d4659cc531fd6293ae3c34ed66668192cb&';
  const [audio] = useState(new Audio('https://github.com/tazbuch/tazbuch.github.io/tree/main/taz/media/music.mp3'));
 
  useEffect(() => {
    audio.play().catch(() => console.log('Audio play failed'));
    return () => {
      audio.pause();
    };
  }, [audio]);
 
  const handlePress = () => {
    // Your link opening code would go here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: imageUrl }}
          style={StyleSheet.absoluteFillObject}
          blurRadius={50}
        />
        <View style={styles.contentBox}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.profileImage}
          />
          <Text style={styles.title}>Tazbuch</Text>
          <Text style={styles.subtitle}>Be careful of who you trust, the devil was once an angel.</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <MaterialCommunityIcons name="camera" size={20} color="#000" />
            <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: '#fffefe00',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  contentBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default App;