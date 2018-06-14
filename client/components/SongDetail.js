import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if(!song) { return (<div>Loading</div>); };
    return (
    <div>
      <Link to="/">Back</Link>
      <h2>{song.title}</h2>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate id={this.props.params.id} />
    </div>
    );
  }
}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);