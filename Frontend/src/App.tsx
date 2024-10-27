import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import LogInScreen from './Components/LogInScreen';
import SignUpScreen from './Components/SignUpScreen';
import MyProfileScreen from './Components/MyProfileScreen';
import { AuthContext } from './Services/Auth';
import { useState } from 'react';
import { ProfilePanelContext } from './Services/ProfilePanel';

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

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => { setIsLoggedIn(false)}
    }}>
      <ProfilePanelContext.Provider value={{
        isProfilePanelOpen,
        doOpen: () => { setIsProfilePanelOpen(true)},
        onClose: () => { setIsProfilePanelOpen(false)}
      }}>
        <RouterProvider router={router} />
      </ProfilePanelContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
