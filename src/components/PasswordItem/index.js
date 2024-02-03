import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isShow} = props
  const {
    id,
    websiteName,
    userName,
    password,
    initialClassName,
  } = passwordDetails
  const initial = websiteName ? websiteName[0].toUpperCase() : ''
  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="item-list">
      <p className={`profile ${initialClassName}`}>{initial}</p>
      <div className="list-container">
        <p className="website">{websiteName}</p>
        <p className="username">{userName}</p>
        {!isShow && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
        {isShow && <p className="password">{password}</p>}
      </div>
      <button
        type="button"
        onClick={onDeletePassword}
        className="delete-btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
