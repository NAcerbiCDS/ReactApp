import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import Cart from './components/pages/cart/cart';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import Layout from './components/layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryName"
                        element={<ItemListContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/itemDatail/:id"
                        element={<ItemDetailContainer />}
                    />
                    {/* <Route path="*" element={<h1>Not found</h1>} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
