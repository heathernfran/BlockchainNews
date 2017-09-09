import React from 'react'
import { StyleSheet, View } from 'react-native'

import Sources from './components/Sources'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Sources />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
