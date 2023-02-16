import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))

    this.setState(prevState => ({
      nameInput: '',
      commentInput: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {nameInput, commentInput, commentList, count} = this.state

    return (
      <div className="comment-app-container">
        <div className="comment-container">
          <form className="form-container" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              value={nameInput}
              type="text"
              className="custom-input"
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              value={commentInput}
              placeholder="Your Comment"
              rows="8"
              cols="30"
              onChange={this.onChangeComment}
            />
            <button type="submit" className="comment-button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
        </div>
        <div className="count-container">
          <p className="count">{count}</p>
          <p className="count-heading">Comments</p>
        </div>

        <ul className="comments-section">
          {commentList.map(eachComment => (
            <CommentItem
              details={eachComment}
              toggleIsLike={this.toggleIsLike}
              deleteComment={this.deleteComment}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
