import React, { Component, createContext } from "react";
import { auth, getUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async userAuth => {
        
        const user = userAuth ? await getUserDocument(userAuth.uid) : null ;
        this.setState({ user });
    });
    // auth.onAuthStateChanged(userAuth => {
    //     this.setState({ user: userAuth});
    // });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;