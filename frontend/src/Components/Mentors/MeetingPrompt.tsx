import * as React from 'react'

export default function MeetingPrompt() {
  return (
    <div className='meeting__prompt'>
        <div className='center'>
            <div>
                <img src="./Alternate Mobile.svg" alt="cellphone" />
            </div>

            <div>
                <h3>John Smith is waiting for you
Join Now!  </h3>
            </div>
            <div className="mentorButtonContainer row-btn">
          <button className="btn-collection col-btn">Join Meeting</button>
            <button className="btn-collection col-btn danger">Cancel Meeting</button>

      </div>

        </div>
    </div>
  )
}