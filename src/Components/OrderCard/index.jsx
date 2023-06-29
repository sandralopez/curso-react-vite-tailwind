import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
	const {
		id,
		title,
		imageURL,
		price,
		handleDelete
	} = props;

	return (
		<div className="flex justify-between items-center mb-2">
			<div className="flex items-center gap-2">
				<figure className="w-14 h-14">
					<img className="w-full h-full rounded-lg object-cover" src={imageURL} alt={title} />
				</figure>
				<p className="text-sm font-light">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium">${price}</p>
				<XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer" />
			</div>
		</div>
	)
}

export { OrderCard }