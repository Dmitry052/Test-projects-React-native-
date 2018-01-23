import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbomDetail';

class AlbumList extends Component {
  state = { alboms: [] };

  componentWillMount = () => {
    axios({ method: 'get', url: 'http://reduxblog.herokuapp.com/api/posts' })
      .then(response => this.setState({ alboms: response.data }));
  };

  renderAlbums = () =>
    this.state.alboms.map(alboms => <AlbumDetail key={alboms.id} record={alboms} />);

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
