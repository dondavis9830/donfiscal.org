import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './CommonPages/Home'
import Aut from './CommonPages/Aut'
import PNF from './CommonPages/PNF'
import UserDashboard from './Pages/User_Page/UserDashboard'
import AdminDashboard from './Pages/Admin_Page/AdminDashboard'
import AccountDetails from './Pages/User_Page/AccountDetails'
import FinanceAdvisor from './Pages/User_Page/FinanceAdvisor'
import Profile from './Pages/User_Page/Profile'
import UserPayementHistory from './Pages/User_Page/UserPayementHistory'
import AllMentors from './Pages/Admin_Page/AllMentors'
import AllUsers from './Pages/Admin_Page/AllUsers'
import MentorDashboard from './Pages/Mentor_Page/MentorDashboard'
import MentorClients from './Pages/Mentor_Page/MentorClients'
import MentorNotification from './Pages/Mentor_Page/MentorNotification'
import PaymentHistory from './Pages/Mentor_Page/PaymentHistory'
import Upload from './Pages/Mentor_Page/Upload'
import MentorProfile from './Pages/Mentor_Page/MentorProfile'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Aut/>}/>
        <Route path='*' element={<PNF/>}/>
        <Route path='/user/dashboard' element={<UserDashboard/>}/>
        <Route path='/user/accounts' element={<AccountDetails/>}/>
        <Route path='/user/mentors' element={<FinanceAdvisor/>}/>
        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/user/payment_history' element={<UserPayementHistory/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/mentors' element={<AllMentors/>}/>
        <Route path='/admin/users' element={<AllUsers/>}/>
        <Route path='/mentor/dashboard' element={<MentorDashboard/>}/>
        <Route path='/mentor/profile' element={<MentorProfile/>}/>
        <Route path='/mentor/clients' element={<MentorClients/>}/>
        <Route path='/mentor/notification' element={<MentorNotification/>}/>
        <Route path='/mentor/paymentHistory' element={<PaymentHistory/>}/>
        <Route path='/mentor/uploads' element={<Upload/>}/>
      </Routes>
    </>
  )
}

export default App
