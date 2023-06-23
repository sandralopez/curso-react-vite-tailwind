import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
	const [count, setCount] = useState(0);
	console.log('COUNT ', count)

	return (
		<ShoppingCartContext.Provider value={{
			count,
			setCount
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export { ShoppingCartContext }
export { ShoppingCartProvider }
