import React from 'react'
import '../App.css'
class Login extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:''
    }

    this.Change=this.Change.bind(this)
    this.Click=this.Click.bind(this)
   
  }


 

  render() {
    return (
      <div className='test'>
        <form>
          <div className="mb-3">
            <label  className="form-label">Email address</label> <br></br>
            <input type="email" className="form-control-sm" name="email" value={this.state.email} onChange={this.Change} />
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label> <br></br>
            <input type="password" className=" form-control-sm" name="password" value={this.state.password} onChange={this.Change} />
           
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.Click}>Submit</button>
        </form>
      </div>

    )
    
  }


  Click(){
    if(this.state.password==''){
      this.setState({
       
      }) 
    }
    
  }

  Change(event){
    console.log(event.target)
    this.setState({
      [event.target.name]:event.target.value
    })
   
  }

  // EmailChange(event){
  //   // console.log(event)
  //   console.log(event.target)
  //   this.setState({
   
  //   email:event.target.value,

    
  //   })
  //  }


  //  PasswordChange(event){
  //   console.log(event.target)
  //   this.setState({
  //     password:event.target.value
  //   })
  //  }


  
}

export default Login;
