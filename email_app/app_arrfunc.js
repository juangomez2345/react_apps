//EMCAS6

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '',
      error: {
        error_email_message: '',
        error_password_message: ''
      }
    };
  }

  validateEmail = (email_string) =>{
    var expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email_string.length>0)
      if(!expreg.test(email_string))
        return false;    
    return true;
  }  

  validatePassword = (password_string) => {
    if(password_string.length>0)
      if(password_string.length<8)
        return false;    
    return true;
  }

  emailHandleInputChange = (event) => {
    this.setState({email: event.target.value});

    const value = event.target.value;

    if(!this.validateEmail(value))
      this.setState({error: {error_email_message: "email format error"}});
    else
      this.setState({error: {error_email_message: ""}});    
  }

  passwordHandleInputChange = (event) => {
    this.setState({password: event.target.value});

    const value = event.target.value;

    if(!this.validatePassword(value))
      this.setState({error: {error_password_message: "min length 8"}});
    else
      this.setState({error: {error_password_message: ""}});    
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                email:
              </td>
              <td>
              <input 
              type="text" 
              name="email" 
              value={this.state.email}
              onChange={this.emailHandleInputChange}/>
              </td> 
              <td>
                {this.state.error.error_email_message}
              </td>             
            </tr>
            <tr>
              <td>
                password:
              </td>
              <td>
              <input 
              type="text" 
              name="password" 
              value={this.state.password}
              onChange={this.passwordHandleInputChange}/>
              </td> 
              <td>
                {this.state.error.error_password_message}
              </td>                           
            </tr>            
          </tbody>
        </table>
      </form>
    );
  }
}


ReactDOM.render(<Form />,document.getElementById('root'));

