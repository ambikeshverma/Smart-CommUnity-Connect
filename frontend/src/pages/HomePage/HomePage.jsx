import { useContext } from 'react'
import { UserType } from '../../components/Context/UserTypeContext'

const HomePage = () => {
    const {userType} = useContext(UserType)
    console.log(userType)
  return (
    <>
    {userType==="seeker"? (<div>HomePage Seeker</div>) : (<div className='bg-emerald-500'>HomePage Provider_satya</div>)}
    </>
  )
}

export default HomePage