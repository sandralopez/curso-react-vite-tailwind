import { useState, useContext, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { Link, Navigate } from 'react-router-dom'

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);

  // User account
  const account = context.user;
  const hasAnAccount = account ? Object.keys(account).length != 0 : true;

  const handleSignIn = () => {
    context.signInUser();
    return <Navigate replace to={'/'} />
  }

  const createUserAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    context.saveUser(data);

    // Sign in
    handleSignIn();
  }

  const renderCreateUser = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex items-center justify-center mb-5">
          <h1 className="font-medium text-xl">Sign Up</h1>
        </div>
        <label htmlFor="name" className="font-light text-sm">Email: </label>
        <input 
          id="email"
          name="email"
          type="text" 
          placeholder="Email" 
          defaultValue={account.user?.email}
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
        <label htmlFor="name" className="font-light text-sm">Username: </label>
        <input 
          id="username"
          name="username"
          type="text" 
          placeholder="Username" 
          defaultValue={account.user?.username}
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
        <label htmlFor="name" className="font-light text-sm">Password: </label>
        <input 
          id="password"
          name="password"
          type="password" 
          placeholder="Password" 
          defaultValue={account.user?.password}
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
        <Link to='/'>
          <button 
            type="button" 
            className="bg-black py-3 text-white w-80 rounded-lg"
            onClick={() => createUserAccount()}>
              Sign up
          </button>
        </Link>
      </form>
    )
  }

  const renderLogIn = () => {
    return (
      <div>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light text-sm">Email: </span>
            <span>{account?.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">Username: </span>
            <span>{account?.username}</span>
          </p>
          <Link
            to="/">
            <button
              className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
              disabled={!hasAnAccount}
              onClick={() => handleSignIn() }>
              Log in 
            </button>
          </Link>

          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-4 mb-2 py-3"
            onClick={() => setView('create-user-account') }
            disabled={hasAnAccount}>
            Sign Up
          </button>
        </div>
      </div>
    )
  }

  const renderView = () => view === 'user-info' ? renderLogIn() : renderCreateUser();

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      { renderView() }
    </Layout>
  )
}

export { SignIn };