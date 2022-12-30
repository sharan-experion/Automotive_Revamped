import classes from './FallBackPage.module.css';
// import { BsEmojiFrown } from "react-icons/bs";

const FallBackPage = () => {
    return (
        <div className={classes.container}>
            <p className={classes.icons}>☹</p>
            <h1>404</h1>
            <h2>Ooops, Page Not Found!!</h2>
            
        </div>
    )
};

export default FallBackPage;