import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
	// Shopping Cart / Increment quantity
	const [count, setCount] = useState(0);
	
	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	// Product Detail - Show product
	const [productToShow, setProductToShow] = useState({})

	return (
		<ShoppingCartContext.Provider value={{
			count,
			setCount,
			isProductDetailOpen,
			openProductDetail,
			closeProductDetail,
			productToShow,
			setProductToShow,
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export { ShoppingCartContext }
export { ShoppingCartProvider }
