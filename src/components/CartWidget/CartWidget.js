import cart from './../../assets/cart-plus.svg'


const CartWidget = () => {
    return (
        <>
            <img src={cart} alt="cart-widget" width="80" height="80" />
            <h1 className="title navbar-item buttons is-size-4 button is-primary ">0</h1>
        </>
    )
}

export default CartWidget;