//EMCAS6

var userInfolist = [
 {
   "name": "Michael",
   "phone": "111111",
   "address": "address1"
  },
  {
    "name": "John",
    "phone": "22222",
    "address": "address2"
  }
];


class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfolist
    };
	
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.handleAddInfo(this.state);
    this.setState({		
      name: '',
      phone: '',
      address: ''
    });
  }
  
  handleAddInfo(userInfo) {
    this.setState({
      userInfolist: [...this.state.userInfolist, userInfo]
    })
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }
  
  removeUser(index){
    this.setState({
      userInfolist: this.state.userInfolist.filter((e, i) => {
        return i !== index
      })
    });
  }  

  render() {
    const userlist = this.state.userInfolist.map((user, i)=>{
      return (
	    <div id="iduserItem" key={i}>
          <table>
            <tbody>
              <tr>
			    <td><button onClick={this.removeUser.bind(this, i)}>del</button></td>
			    <td>{user.name}</td>
			    <td>{user.phone}</td>
			    <td>{user.address}</td>
              </tr>
 	         </tbody>
          </table>
		</div>
      )
    });	  
	  
	  
    return (
      <div id="iduserForm">
        <form onSubmit={this.handleSubmit}>		
          <table>
            <tbody>
              <tr><td><input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" /></td></tr>
			  <tr><td><input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} placeholder="phone" /></td></tr>
			  <tr><td><input type="text" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="address" /></td></tr>
              <tr><td><button type="submit">add</button></td></tr>
 	         </tbody>
          </table>
        </form>	  
	    <p/>
		{userlist}
	  </div>
    );
  }
}

ReactDOM.render(<MyForm />,document.getElementById('root'));

