import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import AuthPage from '../AuthPage/AuthPage';
import AuthContext from '../../store/auth-context';


function Wrapper(props) {
    const authCtx = useContext(AuthContext);
    return(
        <div>
            {authCtx.isLoggedIn ? (props.children) :  <Redirect to='/auth' />}
        </div>
        
    )
}  
export default Wrapper;     