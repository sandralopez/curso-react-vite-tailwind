import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
	// Shopping bag / Increment quantity
	const [count, setCount] = useState(0);
	
	// Shopping bag / Add products
	const [cartProducts, setCartProducts] = useState([])

	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	// Product Detail - Show product
	const [productToShow, setProductToShow] = useState({})

	// Checkout side menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

	// Shopping bag - Order
	const [order, setOrder] = useState([])

	return (
		<ShoppingCartContext.Provider value={{
			count,
			setCount,
			isProductDetailOpen,
			openProductDetail,
			closeProductDetail,
			productToShow,
			setProductToShow,
			cartProducts,
			setCartProducts,
			isCheckoutSideMenuOpen,
			openCheckoutSideMenu,
			closeCheckoutSideMenu,
			order,
			setOrder,
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export { ShoppingCartContext }
export { ShoppingCartProvider }
