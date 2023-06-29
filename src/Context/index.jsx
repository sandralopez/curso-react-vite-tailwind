import { createContext, useState, useEffect } from 'react'

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

	// Get products
	const [items, setItems] = useState(null); 
	const [filteredItems, setFilteredItems] = useState(null); 

	useEffect(() => {
	fetch('http://127.0.0.1:5000/products')
	  .then(response => response.json())
	  .then(data => setItems(data))
	}, []);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = useState(null); 

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
	}

	// Get products by category
	const [searchByCategory, setSearchByCategory] = useState(null);

	const filteredItemsByCategory = (items, searchByCategory) => {
		return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
	}

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
		if (searchType === 'BY_TITLE') {
			return filteredItemsByTitle(items, searchByTitle)
		} 

		if (searchType === 'BY_CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory)
		}

		if (searchType === 'BY_TITLE_AND_CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
		}

		if (!searchType) {
			return items
		}
	}

	useEffect(() => {
		if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
		if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
		if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
		if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
	}, [items, searchByTitle, searchByCategory]);

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
			items,
			setItems,
			searchByTitle,
			setSearchByTitle,
			filteredItems,
			searchByCategory,
			setSearchByCategory,

		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export { ShoppingCartContext }
export { ShoppingCartProvider }
