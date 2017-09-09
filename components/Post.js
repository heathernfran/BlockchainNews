import React, { Component } from 'react'
import { StyleSheet, Text, View, WebView } from 'react-native'

export default class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <WebView
        ref={'webview'}
        automaticallyAdjustContentInsets={false}
        source={{html: this.props.title.rendered}}
        style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 100
  }
})
