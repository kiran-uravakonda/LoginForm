import { useState } from "react";
function Login (){
    let [value,setValue]=useState({
        email:'',
        password:'',
        emailErr:'',
        passwordErr:'',
        checkErr:''
    })
 function updateChange(event){
        // console.log(event.target)
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
       
    }

  
    function submitData(event){
   event.preventDefault()
     validate()
    }

    function validate(){
      if(!value.email && !value.password)
      {
        setValue({...value,checkErr:"please enter values"})
      }
      else if(!value.password){
        setValue({...value,passwordErr:"please enter password"})
      }
      else if(!value.email){
        setValue({...value,emailErr:"please enter email"})
      }
      else{
            console.log("success")
      }
    }
  return(
    <div className='test'>
            <form>
              <div className="mb-3">
                <label  className="form-label">Email address</label> <br></br>
                <input type="email" className="form-control-sm width" name="email" value={value.email} onChange={updateChange}/>
              </div>
              <span style={{color:"red"}}>{value.emailErr}</span>
              <div className="mb-3">
                <label  className="form-label">Password</label> <br></br>
                <input type="password" className=" form-control-sm width" name="password" value={value.password} onChange={updateChange}/>
                </div>

                <div style={{color:"red"}}>{value.passwordErr}</div>
              
              <button type="submit" className="btn btn-primary" onClick={submitData} >Submit</button>
            </form>
            <span style={{color:"red"}}>{value.checkErr}</span>
          </div>
  )
}

export default Login;