import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Posts from './Posts';
import { urls } from '../data/urls';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      url: '',
      visible: false,
    }
  }

  _showSources() {
    let sourceArray = []
    urls.forEach((v, k) => {
      sourceArray.push(
        <TouchableOpacity key={k} onPress={() => this._showPosts(v, k)}>
          <Text>{k}</Text>
        </TouchableOpacity>
      )
    })
    return sourceArray
  }

  _showPosts = (valueUrl, keySource) => {
    this.setState({
      source: keySource,
      url: valueUrl,
      visible: true,
    })
  }

  render() {
    const sourceNames = this._showSources()

    return (
      <View style={styles.container}>
        <Text>News sources available</Text>
          <View>{sourceNames}</View>
          {
            this.state.visible ?
            (
              <View>
                <Text>{this.state.source}</Text>
                <Posts {...this.state} />
              </View>
            ) :
            <Text>Click news source</Text>
          }
      </View>
    );
  }
}

export default Sources

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
