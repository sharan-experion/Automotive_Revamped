import { useContext } from 'react';
import AuthPage from '../AuthForm/AuthPage';
import AuthContext from '../../store/auth-context';


function Wrapper(props) {
    const authCtx = useContext(AuthContext);
    return(
        <div>
            {authCtx.isLoggedIn ? (props.children) : <AuthPage/>}
        </div>
        
    )
}  
export default Wrapper;     