import * as React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/app-background.png')} style={styles.image}>
      <View>
        {/* <View style={styles.header}>
          <Text style={styles.title}>prIDe</Text>
          <Text style={styles.subtitle}>A Pride Flag Identifier</Text>
        </View> */}
        <View style={styles.category_button_container}>
          <TouchableOpacity
            style={styles.category_button}
            onPress={() => navigation.navigate('Flags')}>
            <View style={styles.category_text}>
              <Text style={styles.category_text_title}>Flags</Text>
              <Text>Swipe through the Pride flag flashcards.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category_button}
            onPress={() => navigation.navigate('About')}>
            <View style={styles.category_text}>
              <Text style={styles.category_text_title}>About</Text>
              <Text>Why does this app exist?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '15%'
  },
  category_button_container: {
    backgroundColor: 'grey',
    opacity: 0.95,
    height: 425,
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 5
  },
  category_button: {
    paddingBottom: '15%',
    paddingTop: '15%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
    opacity: 0.9,
    alignItems: 'center'
  },
  category_icon: {
    backgroundColor: '#033769',
    borderRadius: 10,
    height: 54,
    width: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_text: {
    marginLeft: '5%'
  },
  category_text_title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  Text: {
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.7
  },
  title: {
    fontSize: 42,
    color: 'black',
    opacity: 0.9
  },
  subtitle: {
    fontSize: 12,
    color: 'black',
    opacity: 0.9
  }
})
