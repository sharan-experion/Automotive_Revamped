import classes from './FallBackPage.module.css';
import { BsEmojiFrown } from "react-icons/bs";

const FallBackPage = () => {
    return (
        <div className={classes.fall}>
        <div><BsEmojiFrown size = '110px' className={classes.icons} /></div>
            <div className={classes.tag}>
                <h1>404</h1>
                <h2>Ooops, Page Not Found!!</h2>
            </div>
        </div>
    )
};

export default FallBackPage;