import React from 'react';

import Photo from './Photo'
class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
      <pre>
      {this.props.posts.map((post,i) => <Photo />)}
      </pre>
      </div>
    )
  }
}

export default PhotoGrid
