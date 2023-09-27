import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

return (
    <div>
        <Badge badgeContent={2} color="secondary" >
            <ShoppingCartIcon color="action" onClick={()=>{"Vista carrito"}} />
        </Badge>
    </div>
    
);
};

export default CartWidget;