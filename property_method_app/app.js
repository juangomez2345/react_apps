//EMCAS6


function LoginButton(props) {
  return (
    <button onClick={props.onClickk}>
      Login
    </button>
  );
}


function LogoutButton(props) {
  return (
    <button onClick={props.onClickk}>
      Logout
    </button>
  );
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function UserGreeting(props) {
  return (<div><span>welcome</span></div>);
}


function GuestGreeting(props) {
  return (<div><span>please sign up</span></div>);
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClickk={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClickk={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}




ReactDOM.render(<LoginControl />,document.getElementById('root'));

