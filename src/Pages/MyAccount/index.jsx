import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { Layout } from '../../Components/Layout'

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    context.saveUser(data);
    setView('user-info');
  }

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span>Username: {context.user.username}</span>
        </p>
        <p>
          <span>Email: {context.user.email}</span>
        </p>
        <button 
          type="button" 
          className="bg-white py-3 text-black border border-black w-80 rounded-lg mt-5" 
          onClick={() => setView('edit-user-info')}
          >
            Edit
        </button>     
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <div className="flex flex-col w-80"> 
        <form ref={form} className="flex flex-col gap-4 w-80">
          <input 
            name="email"
            type="text" 
            placeholder="Email" 
            defaultValue={context.user.email}
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
          <input 
            name="username"
            type="text" 
            placeholder="Username" 
            defaultValue={context.user.username}
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
          <input 
            name="password"
            type="password" 
            placeholder="Password" 
            defaultValue={context.user.password}
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
          <button 
            type="button" 
            className="bg-black py-3 text-white w-80 rounded-lg" 
            onClick={() => editAccount()}
            >
              Edit
          </button>
        </form>
      </div>
    )
  }

  const renderView = () => view === 'user-info' ? renderUserInfo() : renderEditUserInfo();

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">My Account</h1>
      { renderView() }
    </Layout>
  )
}

export { MyAccount };
