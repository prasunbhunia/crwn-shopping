import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginPage from './components/login/login';
import { auth, createUserProfileDocumnet } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocumnet(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }); 
        });
      }else{
        setCurrentUser(userAuth); 
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/login' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateProps,mapDispatchProps)(App);
