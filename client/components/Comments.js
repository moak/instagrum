import React from 'react';
import { Link } from 'react-router';
import { removeComment } from '../actions/actionCreators'
import { connect } from 'react-redux';

import  CSSTRansitionGroup from  'react-addons-css-transition-group'



class Comments extends React.Component {


  handleSubmit (e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
  render() {
    const { postId } = this.props.params;
    return (
      <div  className="comments">
        {this.props.postComments.map((comment,i) => {
          return (
            <div className="comment" key={i}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={this.props.removeComment2.bind(null,this.props.params.postId,i)}>&times;</button>
              </p>
            </div>
          )
        })
      }
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     state
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    removeComment2: (postId, id) => {
      console.log(postId);
      console.log(id);
      dispatch(removeComment(postId,id))
    }
  }
}

const CommentContainer = connect(
  null,
  mapDispatchToProps
)(Comments)

export default CommentContainer
