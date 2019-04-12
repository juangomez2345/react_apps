//EMCAS6

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectvalue: 'Grapefruit',
      inputvalue: ''
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(event){
    this.setState({selectvalue: event.target.value});
  }

  handleInputChange(event) {
    this.setState({inputvalue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectvalue + ' ' + this.state.inputvalue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>select a flavor:</td>
              <td>
                <select value={this.state.selectvalue} onChange={this.handleSelectChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select></td>
            </tr>
            <tr>
              <td>enter some input</td>
              <td><input type="text" value={this.state.inputvalue} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Submit" /></td>
            </tr>
 	  </tbody>
        </table>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />,document.getElementById('root'));

