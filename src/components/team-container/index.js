import React from 'react'
import Kpic from '../../assets/kpic.jpg'
import Zpic from '../../assets/zpic.jpg'

import './team.css'

class TeamContainer extends React.Component {
  render() {
    return(
      <div className='team'>
        <div>
          <img src={Kpic} />
          <p><h5>"Your Title Here"</h5>"Your Bio Here"</p>
        </div>
        <div>
          <img src={Zpic} />
          <p><h5>"Your Title Here"</h5>"Your Bio Here"</p>
        </div>
      </div>
    )
  }
}

export default TeamContainer
