import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage/AuthPage';
import UserProfile from './pages/UserProfile/UserProfile';
import AuthContext from './store/auth-context';
import Loggedin from './pages/Loggedin';
import AddProduct from './pages/AddProduct/AddProduct';
import Inventory from './pages/Inventory/Inventory';
import RevenueReport from './pages/RevenueReport/RevenueReport';
import JobCard from './pages/JobCard/JobCard';
import EstimationDetails from './pages/EstimationDetails/EstimationDetails';
import Invoice from './pages/Invoice/Invoice';
import EmployeeSheetDisplay from './pages/EmployeeSheetDisplay/EmployeeSheetDisplay'


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>

      {authCtx.isLoggedIn && ( 
      <Route path="/employee/managerslist" component={EmployeeSheetDisplay}/>
      )}

        {/* {!authCtx.isLoggedIn && (
          <Route path='/' exact>
            <HomePage />
          </Route>
        )} */}

        {authCtx.isLoggedIn && (

          <Route path='/' exact>
            <Loggedin />
          </Route>
        )}

        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn &&
            <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/addProduct'>
          {authCtx.isLoggedIn &&
            <AddProduct />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/inventory'>
          {authCtx.isLoggedIn &&
            <Inventory />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>


        
        {/* <Route path='/employeeDetails'>
          {authCtx.isLoggedIn &&
            <EmployeeDisplay />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route> */}

        <Route path='/revenuereport'>
          {authCtx.isLoggedIn &&
            <RevenueReport />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/jobcard'>
          {authCtx.isLoggedIn &&
            <JobCard/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/estimationDetails'>
          {authCtx.isLoggedIn &&
            <EstimationDetails/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='/invoice'>
          {authCtx.isLoggedIn &&
            <Invoice/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
