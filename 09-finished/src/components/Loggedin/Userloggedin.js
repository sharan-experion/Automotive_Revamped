import classes from './Userloggedin.module.css';
import { FcAutomotive } from "react-icons/fc";

import { FcExternal,  FcViewDetails,FcReadingEbook,FcCalculator,FcComboChart} from "react-icons/fc";
import AddProduct from '../Profile/AddProduct';
import { Link } from 'react-router-dom';
const Userloggedin =()=>{

   
    return(
        
        <table>
                {/* Quick Action */}
           
            <tr>
                <td><Link to='/addProduct'>
                    <FcExternal  size = '150px'  className={classes.icon}></FcExternal></Link>
                    <h2 className={classes.title}>ADD PRODUCT</h2>
                </td>
                <td>
                    <Link to = '/'>
                    <FcViewDetails size = '150px'  className={classes.icon}><span>Job Card</span></FcViewDetails></Link>
                    <h2 className={classes.title}>JOB CARD</h2>
                </td>
                <td>
                    
                <Link to = '/employeeDetails'>
                    <FcReadingEbook size = '150px'   className={classes.icon}></FcReadingEbook></Link>
                    <h2  className={classes.title}>EMPLOYEE DETAILS</h2>
                    
                </td>





            </tr>
            <tr>
                <td><Link to='/inventory'>
                    <FcAutomotive size = '150px' className={classes.icon}><span> Inventory</span></FcAutomotive></Link>
                    <h2 className={classes.title}>Inventory</h2>
               </td>

                <td>
                    
                    <FcCalculator size = '150px'  className={classes.icon}></FcCalculator>
                    <h2 className={classes.title}>Estimation</h2>
               
                </td>

                <td>
                    <FcComboChart  size = '150px' className={classes.icon}><span>Revenue Report</span></FcComboChart>
                   <h2 className={classes.title}> Revenue Report</h2>
                </td>
            </tr>
        </table>
    )

}

export default Userloggedin;