import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Sources from './components/Sources'


export default class App extends React.Component {
  render() {
    return (
      <Sources />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
