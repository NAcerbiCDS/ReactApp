import CartWidget from '../../common/cartWidget/CartWidget';
import './Navbar.css';
import { Outlet, Link } from 'react-router-dom';

export let Navbar = () => {
    return (
        <>
            <div className={'containerNavbar'}>
                <Link to="/">
                    <h4>Cocinas ciudad evita</h4>
                </Link>
                <ul className="categories">
                    <Link to="/">
                        <li>Todas</li>
                    </Link>
                    <Link to="/category/empanadas">
                        <li>Empanadas</li>
                    </Link>
                    <Link to="/category/calzones">
                        <li>Calzones</li>
                    </Link>
                    <Link to="/category/pizzas">
                        <li>Pizzas</li>
                    </Link>
                    <Link to="/category/porciones">
                        <li>Porciones</li>
                    </Link>
                    <Link to="/category/cocina">
                        <li>Cocina</li>
                    </Link>
                    <Link to="/category/vinos">
                        <li>Vinos</li>
                    </Link>
                </ul>
                <CartWidget />
            </div>
        </>
    );
};
