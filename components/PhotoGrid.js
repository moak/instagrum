import React from 'react';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        WELCOME
      {JSON.stringify(this.props.posts, null, '')}
      ---
      </div>
    )
  }
}

export default PhotoGrid
