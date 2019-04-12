//EMCAS6

const userItems=[
 {
   name: "Chris Evans",
   alias: "Captain America"
 },
 {
   name: "Scarlett Johansson",
   alias: "Black Widow"
 },
 {
   name: "Chris Hemsworth",
   alias: "Thor"
 }
];


class User extends React.Component{
  constructor(props){
   super(props);
  }

 render(){
   return (
   <div id="iduser">
     <table>
       <tbody>
         <tr><td>{this.props.userItem.name}</td></tr>
         <tr><td>{this.props.userItem.alias}</td></tr>
       </tbody>
     </table>
     <br/>
   </div>
   )
 }
}



class UserList extends React.Component{
  constructor(props){
   super(props);
  }

 render(){  
   const userList = this.props.list.map(function(userItem, i){
   return <User userItem={userItem} key={i}/>;
   });
  
   return (
   <div id="iduserlist">
     {userList}
   </div>
   )
 }
}

ReactDOM.render(<UserList list={userItems}/>,document.getElementById('root'));

