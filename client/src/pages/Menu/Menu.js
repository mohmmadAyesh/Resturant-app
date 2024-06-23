import {useState,useEffect, useContext} from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import api from '../../api/api';
import { Wrapper,Title, Item,Name, Description, IcreBtn, DecBtn, MinusPlusContainer, Input, PlaceButton } from './menu.styles';
import { AuthContext } from '../../context/AuthContext';
const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [cart, setCart] = useState([]);
    const { user }=useContext(AuthContext);
    const [totalPrice,setTotalPrice]=useState(0);
    const navigate=useNavigate();
    useEffect(()=>{
            if(!user){
                navigate('/login');
        }
        },[user]);
    useEffect(() => {
        const fetchMenu = async () => {
            const res = await api.get('/menu');
            setMenu(res.data.data);
        };
        fetchMenu();
    }, []);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(i => i._id === item._id);
            console.log(existingItem);
            if (existingItem) {
                console.log('price addeddd');
                return prevCart.map(i => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i);
            } else {
                console.log('item added');
                console.log('price added here too');
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        console.log('cart: ',cart);
    };

    const removeFromCart = async (item) => {
        await setCart((prevCart) => {
            const existingItem = prevCart.find(i => i._id === item._id);
            if (existingItem && existingItem.quantity > 0) {
                if(existingItem.quantity===1){
                    return prevCart.filter(i => i._id !== item._id);
                }
                return prevCart.map(i => i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i);

            } else {
                return prevCart.filter(i => i._id !== item._id);
            }
        });
        console.log('cart: ',cart);
    };

    const placeOrder = async () => {
        const items = cart.map(cartItem => ({
            item:cartItem._id,
            quantity: cartItem.quantity
        }));
        try{;
        await api.post('/order/placeOrder', { items , totalPrice });
        setCart([]);
        setTotalPrice(0);
        } catch (err) {
            console.error('Error placing order: ', err);
        }
    };
    const getQuantity = (itemId) => {
        const item = cart.find(i => i._id === itemId);
        return item ? item.quantity : 0;
    };

    return (
        <Wrapper>
            <Title>Menu</Title>
            <ul><h1>Total Price: {totalPrice.toFixed(2)}</h1>
                {menu.map(item => (
                    <Item key={item._id}>
                        <Name>{item.name}</Name>
                        <Description>{item.description}</Description>
                        <p> Price: ${item.price}</p>
                        <MinusPlusContainer>
                        <DecBtn onClick={() => {removeFromCart(item);  setTotalPrice(price => (price + item.price));}} disabled = {getQuantity(item._id)===0}>-</DecBtn>
                        <Input disabled controls={false} type='number' defaultValue={0} value={getQuantity(item._id)}/>
                        <IcreBtn onClick={() => {addToCart(item); setTotalPrice(price => (price + item.price));}}>+</IcreBtn>
                        </MinusPlusContainer>
                    </Item>
                ))}
            </ul>
            <PlaceButton onClick={placeOrder} disabled={!cart.length} style={{backgroundColor:"#0062FF",color:"white"}}>Place Order</PlaceButton>
        </Wrapper>
    );
};

export default Menu;