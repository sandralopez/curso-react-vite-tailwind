import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const activeStyle = 'underline underline-offset-4'

	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink 
						to='/'
					>
						Shop
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/anko'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Anko
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/fruits'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Fruits
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/ice-cream'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Ice Cream
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/creams'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Cream
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/nuts-and-seeds'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Nuts and seeds
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">
					aaaaaa@aaaaa.aaa
				</li>
				<li>
					<NavLink 
						to='/my-orders'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/my-account'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/sign-in'
						className={({ isActive }) => 
							isActive ? activeStyle : undefined
					}>
						Sign In
					</NavLink>
				</li>
				<li>
					Cart
				</li>
			</ul>
		</nav>
	)
}

export { Navbar };