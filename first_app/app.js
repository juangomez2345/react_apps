/** Sin JSX */
//---------------------------------------------------------------
//ReactDOM.render(
//  React.createElement('h1', null, 'Msg 01'),
//  document.getElementById('root')
//);

//const myElement = React.createElement(
//'h1',
//{id:'title'},
//'Msg 02'
//);
//ReactDOM.render(myElement,document.getElementById('root'));


/** Con compilacion babel para uso de JSX */
//------------------------------------------------------------------
//ECMAS5
//function Regards(){
//  return <h1>Msg 03</h1>
//}
//ReactDOM.render(<Regards/>,document.getElementById('root'));



//EMCAS6
class Regard extends React.Component{
  constructor(props){
   super(props);
  }

 render(){
   return (
   <h3>Msg {this.props.parameter}</h3>
   )
 }

}

ReactDOM.render(<Regard parameter="06"/>,document.getElementById('root'));

