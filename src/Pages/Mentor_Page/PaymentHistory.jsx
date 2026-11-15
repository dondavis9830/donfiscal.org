import React from 'react'
import MentorSidebar from '../../Components/Mentor-components/MentorSidebar'
import MentorHeader from '../../Components/Mentor-components/MentorHeader'

export default function PaymentHistory() {
  return (
    <div>
      <div className='flex overflow-hidden h-screen'>
        <div className='fixed top-0 shrink-0 h-screen'>
          <MentorSidebar/>
        </div>
        <section className='flex flex-col flex-1 ml-72'>
          <div className='shrink-0'>
            <MentorHeader/>
          </div>
          <main className='overflow-y-auto p-10'>
            Mentor Payment History
          </main>
        </section>
      </div>    </div>
  )
}
