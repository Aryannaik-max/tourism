import { useState, useRef, useEffect } from 'react'
import './UserAvatar.css'
import { Link, useNavigate } from 'react-router-dom'

const UserAvatar = ({ user, onLogout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const modalRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if(modalRef.current && !modalRef.current.contains(event.target)){
                setIsModalOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [modalRef])

    const handleLogoutClick = () => {
        setIsModalOpen(false);
        onLogout();
        navigate('/');
    }
  return (
    <div className="avatar-menu-container" ref={modalRef}>
      <button onClick={() => setIsModalOpen(!isModalOpen)} className="avatar-button">
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          className="avatar-image"
        />
      </button>

      {isModalOpen && (
        <div className="dropdown-modal">
          <Link
            to={'/dashboard'}
            className="modal-link"
          >
            Dashboard
          </Link>
          <Link
            to={"/profile"}
            className="modal-link"
          >
            Profile
          </Link>
          <div className="modal-divider"></div>
          <button
            onClick={handleLogoutClick}
            className="modal-logout-button"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default UserAvatar