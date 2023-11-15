import Header from './Components/header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import {createBrowserRouter} from 'react-router-dom'
import Help from './Components/Help/Help'
import Error from './Components/Error/Error'



function App() {
 

  return (
    <>
    
     <Header/>
     <Body/>
     <Footer />
    </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:'/help',
    element:<Help/>
  }
]);

export default AppRouter;
