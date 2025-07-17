import { Link } from "react-router-dom";

const styles = {
    navStyles : {
        color : 'red',
        backgroundColor : 'yellow',       
        border : '2px dashed blue'
    },

    lineStyles : {
        display : 'inline',
        padding : '20px'
    }

}

const Menu = () => {
    return(
        <div style={styles.navStyles}>
            <ul>
                <li style={styles.lineStyles}>                    
                    <Link to='/'>홈</Link>
                </li>
                <li style={styles.lineStyles}>                    
                    <Link to='/first'> 첫번째 </Link>
                </li>
                <li style={styles.lineStyles}>                    
                    <Link to='/second'> 두번째 </Link>
                </li>
                <li style={styles.lineStyles}>                    
                    <Link to='/third'> 세번째 </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;