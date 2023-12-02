import React from 'react'
import '../App.css'
class Login extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:'',
      emailErr:''
    }
    
    this.Change=this.Change.bind(this)
    this.Click=this.Click.bind(this)
   
  }


 

  render() {
    let {email,password,emailErr}=this.state
    return (
      
      <div className='test'>
        <form>
          <div className="mb-3">
            <label  className="form-label">Email address</label> <br></br>
            <input type="email" className="form-control-sm" name="email" value={email} onChange={this.Change} />
          </div>
          <span style={{color:"red"}}>{emailErr}</span>
          <div className="mb-3">
            <label  className="form-label">Password</label> <br></br>
            <input type="password" className=" form-control-sm" name="password" value={password} onChange={this.Change} />
           
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.Click}>Submit</button>
        </form>
      </div>
      

    )
    
  }


  Click(event){
    event.preventDefault()
   this.Validate()
   
  }

  Validate(){
   
    if(this.state.email==='')
    {
      this.setState({
        emailErr:"please enter email"
      })
    }

   else if(!this.validateEmail(this.state.email)){
    this.setState({
      emailErr:"please enter a valid email address"
    })
   }



  }

   validateEmail(email) {
    var re =  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return re.test(email);
  }
  

  Change(event){
    // console.log(event)
    this.setState({
      [event.target.name]:event.target.value
    })
   
  }


}



export default Login;
