import { useContext } from 'react'
import { UserType } from '../../components/Context/UserTypeContext'

const HomePage = () => {
    const {userType} = useContext(UserType)
    console.log(userType)
  return (
    <>
    {userType==="seeker"? (<div>HomePage Seeker</div>) : (<div>HomePage Provider</div>)}
    </>
  )
}

export default HomePage