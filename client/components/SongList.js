import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import gql from 'graphql-tag';

class SongList extends Component {
  handleDelete(id) {
    this.props.mutate({
      variables: {
        id: id
      },
      refetchQueries: [{ query }]
    });
    //then(() => this.props.data.refetch())
  }
  renderSongs() {
    return this.props.data.songs.map(({id, title}, idx) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => this.handleDelete(id)}>delete</i>
        </li>
      );
    });
  }
  render(){
    if (this.props.data.loading) { return <div>Loading</div>; }
    
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation deleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
