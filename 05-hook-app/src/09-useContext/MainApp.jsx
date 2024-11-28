import {Outlet} from 'react-router-dom';
import {Navbar} from './Navbar';
import { UserProvider } from './context/UserProvider';
//import {UserProvider} from './UserProvider'; 

UserProvider
export const MainApp = () => {
  return (
    <UserProvider> 
      <Navbar />
      <hr />
 
      <div>
        <Outlet />
      </div>
 
    </UserProvider>
  )
}
