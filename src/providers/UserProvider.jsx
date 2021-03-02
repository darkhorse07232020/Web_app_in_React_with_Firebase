import React, { Component, createContext } from "react";
import { auth, getUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async userAuth => {
        const user = await getUserDocument(userAuth.uid);
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