import { useContext } from 'react';
// import AuthPage from '../AuthPage/AuthPage';
import AuthContext from '../../store/auth-context';
import FallBackPage from '../FallBack/FallBackPage';


function Wrapper(props) {
    const authCtx = useContext(AuthContext);
    return(
        <div>
            {authCtx.isLoggedIn ? (props.children) : <FallBackPage/>}
        </div>
        
    )
}  
export default Wrapper;     