import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

const Categories = () => {
    return(
        <div className="sidebar">
            <div className="sidebar_menu">      
                <Link to='/' className="sidebar_item meals">
                    <HomeOutlinedIcon className="icon" sx={{fontSize: 38, stroke: "#FDFDFD", strokeWidth: 1}}/>
                    <span className="side_text">Meals</span>
                </Link>

                <Link to='/order' className="sidebar_item order">
                    <ShoppingCartOutlinedIcon className="icon" sx={{fontSize: 38, stroke: "#FDFDFD", strokeWidth: 1}}/>
                    <span className="side_text">Order</span>
                </Link>
           
                <Link to='/newrecipe' className="sidebar_item recipe">
                    <PlaylistAddOutlinedIcon className="icon" sx={{fontSize: 38, stroke: "#FDFDFD", strokeWidth: 1}}/> 
                    <span className="side_text">Add recipe</span>
                </Link>
            </div>
        </div>
        )
}

export default Categories;
