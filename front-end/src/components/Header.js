import React, { useContext } from 'react'
import AppContext from './AppContext';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import imageToRender from '../../src/assets/images/logo_rou.png'


export default function Header() {

    // Need State to get user infomation
    // dispatch to update user to null after sign out
    const { state, dispatch } = useContext(AppContext)

    const { user } = state


    const signOut = () => {

        // when sign out, remove token in the local storage
        localStorage.removeItem("token")

        // reset user to null
        dispatch({
            type: "CURRENT_USER",
            payload: null
        })
    }


    return (
        <header id="top-bar" className="container has-two-col">

            <h1>
                <Link to='/'>
                    <img src={imageToRender} alt='' />
                </Link>
            </h1>

            <div className="inline">

                <ul id="menu" className="inline-list">

                    {/* if user is available */}
                    {user ? (
                        <>

                            { ( user.address1 === "" & user.state === "" & user.city ==="" & user.zipcode==="" ) &&
                                <>
                                    <li onClick={signOut}>
                                        <Link to='/'>Sign out</Link>
                                    </li>
                                    <li id='name'><Link to='/userProfile'>Hello, {user.name}</Link></li>
                                </>
                            } 

                            { (user.address1 || user.state || user.city  || user.zipcode) &&

                                <>  
                                    
                                    <li id='name'><Link to='/userProfile'>Hello, {user.name}</Link></li>

                                    <li><Link to='/quoteHistory'>Quote History</Link></li>

                                    <li onClick={signOut}>
                                        <Link to='/'>Sign out</Link>
                                    </li>

                                    <li className='fuel-quote'><Link to='/fuelQuote'>Fuel Quote</Link></li>
                                </>
                            }

                        </>

                    ) : (  // if user not available
                        <>
                            <li className='fuel-quote'><Link to='/login'>Login</Link></li>
                        </>

                    )}

                </ul>

                <ul id="social">
                    <li><img src="image/social/fb.png" alt='' /></li>
                    <li><img src="image/social/tw.png" alt='' /></li>
                    <li><img src="image/social/youtube.png" alt='' /></li>
                    <li><img src="image/social/instagram.png" alt='' /></li>
                </ul>

            </div>

        </header >
    )
}
