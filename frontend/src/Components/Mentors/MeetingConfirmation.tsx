import * as React from 'react'

function MeetingConfirmation() {
  return (
    <div className='meeting__prompt'>
    <div className='center'>
        <div>
            <img src="./Alternate Mobile.svg" alt="cellphone" />
        </div>

        <div>
            <h3>Meeting with John Smith Scheduled for
                  12th June 2023 @ 5pm GMT!
            </h3>
        </div>
        <div className="mentorButtonContainer row-btn">
          <button className="btn-collection col-btn danger">Cancel Meeting</button>

      </div>

    </div>
</div>

  )
}

export default MeetingConfirmation ;