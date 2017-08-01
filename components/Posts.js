import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'

import Post from './Post'

// Enable cross-origin resource sharing (CORS)
// https://cors-anywhere.herokuapp.com/
const crossOrigin = 'https://cors-anywhere.herokuapp.com/',
      postsEndpoint = '/wp-json/wp/v2/posts'

class Posts extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows({}),
    }
  }

  componentDidMount() {
    this._fetchPosts(this._buildURL(this.props.url, postsEndpoint))
  }

  componentDidUpdate() {
    this._fetchPosts(this._buildURL(this.props.url, postsEndpoint))
  }

  _buildURL = (url, endpoint) => url.concat(endpoint)

  _fetchPosts(url) {
    return fetch(url, {mode: 'no-cors'})
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(json)
              })
            })
            .catch((error) => console.error(`Error in response: ${error}`))
            .done()
  }


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(postData) => <Post {...postData} />}
      />
    )
  }
}

export default Posts
