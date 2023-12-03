
import React, {useContext} from 'react'
import FormContext from '../FormContex/FormContext'


const Page2 = () => {
    const {
        phone,
        setPhone,
        rphone,
        setRPhone
    } = useContext(FormContext)
  return (
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Repeat phone</label>
      <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={rphone} onChange={(e)=>{setRPhone(e.target.value)}} />
    </div>
  </form>
  )
}

export default Page2