import * as React from 'react'
import PropTypes from 'prop-types'
import { Button, View, Text } from 'react-native'

function AboutScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
        title="Go home"
        onPress={() => navigation.goBack()}
        />
    </View>
  )
}

AboutScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default AboutScreen
