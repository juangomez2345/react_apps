
/** Con compilacion babel para uso de JSX */
//------------------------------------------------------------------
//EMCAS6

class Contador extends React.Component{
  constructor(props){
   super(props);
   this.state = {
    counter: 0
   }

   this.incrementCounter = this.incrementCounter.bind(this);
   this.decrementCounter = this.decrementCounter.bind(this);
   this.resetCounter = this.resetCounter.bind(this);
  }


 incrementCounter(e){
   e.preventDefault(); //elimina # de la URL
   this.setState({counter: this.state.counter + 1})
 };


 decrementCounter(e){
   e.preventDefault();
   if(this.state.counter>=1){
     this.setState({counter: this.state.counter - 1})
   }
 };


 resetCounter(e) {
   e.preventDefault();
   this.setState({counter: 0})
 };


 render(){
   return (
   <div id="counter">
     <div id="count">
       {this.state.counter}
       <p/><a href="#" onClick={this.incrementCounter}>increment</a>
       <p/><a href="#" onClick={this.decrementCounter}>decrement</a>
       <p/><a href="#" onClick={this.resetCounter}>reset</a>
     </div>
   </div>
   )
 }

}

ReactDOM.render(<Contador/>,document.getElementById('root'));

