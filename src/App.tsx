import React, { constructor, Component } from 'react';
import { styled } from '@material-ui/core/styles';
import fire from './configure/Fire';
import Controls from './components/Controls/Controls';
import LocalVideoPreview from './components/LocalVideoPreview/LocalVideoPreview';
import MenuBar from './components/MenuBar/MenuBar';
import ReconnectingNotification from './components/ReconnectingNotification/ReconnectingNotification';
import Room from './components/Room/Room';
import useRoomState from './hooks/useRoomState/useRoomState';
import './App.scss';
import { Login, Register, LoginRegister } from './components/login/index';
import Home from './components/home';
import { User } from 'firebase';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const Main = styled('main')({
  height: '100%',
  position: 'relative',
});
export default function App() {
  const roomState = useRoomState();
  return (
    <Container>
      <MenuBar />
      <Main>
        {roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
        <Controls />
      </Main>
      <ReconnectingNotification />
    </Container>
  );
}
// class App extends React.Component {
//   constructor(props: User) {
//     super(props);
//     this.state = {
//      user: null,
//     };
//     this.authListener = this.authListener.bind(this);
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     fire.auth().onAuthStateChanged(user => {
//       //console.log(user);
//       if (user) {
//         this.setState({ user });
//         //localStorage.setItem('user', user.uid);
//       } else {
//         this.setState({ user: null });
//         //localStorage.removeItem('user');
//       }
//     });
//   }

//   render() {
//     return <div className="App">{this.state.user ? <Home /> : <LoginRegister />}</div>;
//   }
// }

// export default App;
