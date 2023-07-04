import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const ShoppingBag = () => {
	const context = useContext(ShoppingCartContext);

	const openCheckoutSideMenu = () => {
		context.openCheckoutSideMenu();
		context.closeProductDetail();
	}

	return (
		<div className="flex items-center relative gap-0.5" onClick={() => openCheckoutSideMenu()}>
			<ShoppingBagIcon className="h-6 w-6 text-black w-6 h-6 fill-none stroke-black cursor-ponter" /> 
			<div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white">{ context.cartProducts.length }</div>
		</div>
	)

}

export { ShoppingBag }