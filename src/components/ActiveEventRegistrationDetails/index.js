// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  render() {
    const {result} = this.props
    const functionWithSwitch = () => {
      switch (result) {
        case 'YET_TO_REGISTER':
          return (
            <div>
              <img
                className="img1"
                alt="yet to register"
                src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              />
              <p>
                A live performance brings so much to your relationship with
                dance
              </p>
              <button type="button">Register Here</button>
            </div>
          )
        case 'REGISTERED':
          return (
            <div>
              <img
                className="img1"
                alt="registered"
                src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              />
              <h1>You have already registered for the event</h1>
            </div>
          )
        case 'REGISTRATIONS_CLOSED':
          return (
            <div>
              <img
                className="img1"
                alt="registrations closed"
                src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              />
              <h1>Registrations Are Closed Now!</h1>
              <p>Stay tuned. We will reopen</p>
            </div>
          )
        default:
          return <p>Click on an event, to view its registration details</p>
      }
    }
    return <div>{functionWithSwitch(result)}</div>
  }
}
export default ActiveEventRegistrationDetails
