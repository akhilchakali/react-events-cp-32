// Write your code hconst
import './index.css'

const EventItem = props => {
  const {details, clickBtn} = props
  const {imageUrl, name, location, registrationStatus} = details
  const clickedButton = () => {
    clickBtn(registrationStatus)
  }
  return (
    <li className="li-cont">
      <button type="button" onClick={clickedButton}>
        <img className="img" src={imageUrl} alt="event" />
        <p>{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}
export default EventItem
