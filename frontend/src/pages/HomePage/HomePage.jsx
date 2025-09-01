import { useContext } from 'react'
import { UserType } from '../../components/Context/UserTypeContext'
import SeekerDashboard from '../SeekerPages/SeekerDashboard/SeekerDashboard'
import ProviderDashboard from '../ProviderPages/ProviderDashboard/ProviderDashboard'

const HomePage = () => {
    const {userType} = useContext(UserType)
    console.log(userType)
  return (
    <>
    {userType==="seeker"? (<SeekerDashboard></SeekerDashboard>) : (<ProviderDashboard></ProviderDashboard>)}
    </>
  )
}

export default HomePage