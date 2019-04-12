//EMCAS6

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name + ' ' +value);

    this.setState({
      [name]: value
    }); 
    
    console.log(this.state.value1);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name1:
          <input type="text" name="value1" value={this.state.value1} onChange={this.handleChange} />
        </label>
        <label>
          Name2:
          <input type="text" name="value2" value={this.state.value2} onChange={this.handleChange} />
        </label>        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />,document.getElementById('root'));

