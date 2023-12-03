import React, {useContext} from 'react'
import FormContext from '../FormContex/FormContext'


const Page3 = () => {
    const{
        email,
        setEmail,
        remail,
        setREmail
    } = useContext(FormContext)

  return (
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Repeat Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={remail} onChange={(e)=>{setREmail(e.target.value)}}/>
    </div>
  </form>
  )
}

export default Page3