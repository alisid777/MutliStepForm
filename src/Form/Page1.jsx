import React, {useContext} from 'react'
import FormContext from '../FormContex/FormContext'

const Page1 = () => {
    const {
        username,
        setUsername,
        rusername,
        setRUsername
    } = useContext(FormContext)

  return (
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Repeat username</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={rusername} onChange={(e)=>{setRUsername(e.target.value)}}/>
    </div>
  </form>
  )
}

export default Page1