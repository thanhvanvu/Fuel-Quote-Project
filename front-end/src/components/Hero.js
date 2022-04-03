import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../css/Hero.css'
import AppContext from './AppContext';



export default function Hero() {

    // Need State to get user infomation
    // dispatch to update user to null after sign out
    const { state } = useContext(AppContext)

    const { user } = state
    return (
        <div id="hero" className="container has-two-col">

            {user ? (
                <>
                    <div id="hero-left">

                        {user.address1 === "" && (
                            <>
                                <h1>
                                    You have not created profile yet. Please Edit your profile.
                                </h1>
                            </>
                        )}

                        {user.address1 &&(
                            <>
                                <h1>
                                    Thank you for using our application
                                </h1>
                                <h2>
                                    Sajah Al Zamili - Thanh Vu - Khai Luong
                                </h2>
                                <Link to='/fuelquote' id='get-started'>Get Started</Link>
                            </>
                        )}
                        

                    </div>

                    <div id="hero-right">
                        <img src="image/background1/people.png" alt='' />
                    </div>

                </>
            ) : (
                <>
                    <div id="hero-left">

                        <h1>
                            Assignment and Project Group 28
                        </h1>
                        <h2>
                            Sajah Al Zamili - Thanh Vu - Khai Luong
                        </h2>

                    </div>

                    <div id="hero-right">
                        <img src="image/background1/people.png" alt='' />
                    </div>
                </>
            )}
        </div>
    )
}
