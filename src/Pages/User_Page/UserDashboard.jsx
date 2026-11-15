import React from 'react'
import UserHeader from '../../Components/User-components/UserHeader'
import UserSidebar from '../../Components/User-components/UserSidebar'

export default function UserDashboard() {
  return (
    <div>
      <div className='flex h-screen overflow-hidden'>
        <div className='fixed top-0 shrink-0'>
          <UserSidebar/>
        </div>
        <section className='flex flex-col flex-1 ml-72'>
          <div className='shrik-0'>
            <UserHeader/>
          </div>
          <main className='overfloy-y-auto h-screen'>
            <h1>user dashboard</h1>
          </main>
        </section>
      </div>
    </div>
  )
}
