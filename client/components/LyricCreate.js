import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        id: this.props.id,
        content: this.state.content
      }
    });
    this.setState({
      content: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Song Lyric</label>
        <input value={this.state.content} onChange={event => this.setState({ content: event.target.value })} />
      </form>
    )
  }
}

const mutation = gql`
mutation addLyricToSong($id: ID, $content: String){
  addLyricToSong(content: $content, songId: $id){
    id
    lyrics {
      id
      content
      likes
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);