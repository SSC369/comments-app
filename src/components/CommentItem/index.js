import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, toggleIsLike, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName} = details
  const duration = formatDistanceToNow(new Date())
  const onClickLike = () => {
    toggleIsLike(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="each-comment">
      <div className="align-profile">
        <button className={initialClassName} type="button">
          {name[0].toUpperCase()}
        </button>
        <div className="align-name-comment">
          <div className="name-time">
            <h1 className="name">{name}</h1>
            <p className="time">{duration}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="like-delete">
        <div className="align-like">
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
              className="like-icon"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-icon"
            />
          )}
          <button type="button" className="like-button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
