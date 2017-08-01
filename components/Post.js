import React from 'react'


import { Text, View, WebView } from 'react-native'

const Post = (props) => (
  // <WebView source={{html: props.title.rendered}} />
  <View key={props.id}>
    <Text>{props.title.rendered}</Text>
  </View>
)

export default Post
