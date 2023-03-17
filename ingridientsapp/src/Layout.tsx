import {Outlet} from 'react-router-dom';
import Categories from './Categories';

const Layout = () => {
    return(
        <>
            <Categories />
            <div className="main"><Outlet /></div>  
        </>
    )
}

export default Layout;