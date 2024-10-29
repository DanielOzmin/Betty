import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import LogInScreen from './Components/LogInScreen';
import SignUpScreen from './Components/SignUpScreen';
import MyProfileScreen from './Components/MyProfileScreen';
import { AuthContext } from './Services/Auth';
import { useState } from 'react';
import { ProfilePanelContext } from './Services/ProfilePanel';
import { UserContext, User } from './Services/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />, // guest,User
  },
  {
    path: "login",
    element: <LogInScreen /> // guest, user
  },
  {
    path: "signup",
    element: <SignUpScreen /> // guest only
  },
  {
    path: "myprofile",
    element: <MyProfileScreen /> // user
  }
])

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isProfilePanelOpen, setIsProfilePanelOpen] = useState(false)
  const [user, setUser ] = useState<User>({id: 1, userName: "Kacsa",balance: 10000,playedMatches: []})

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => { setIsLoggedIn(false)}
    }}>
      <UserContext.Provider value={{user, setUser}}>
      <ProfilePanelContext.Provider value={{
        isProfilePanelOpen,
        doOpen: () => { setIsProfilePanelOpen(true)},
        onClose: () => { setIsProfilePanelOpen(false)}
      }}>
        <RouterProvider router={router} />
      </ProfilePanelContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
