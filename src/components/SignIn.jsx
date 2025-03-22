import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const {signInUser,setUser} = useContext(AuthContext)

    const handleSignin = e => {
        e.preventDefault()

        const email = e.target.email.value 
        const password = e.target.password.value
        // console.log(email,password); 
        signInUser(email,password)
        .then(result => {
            // console.log(result);

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime
            const loginInfo = {email,lastSignInTime}

            fetch(`https://coffee-store-server-pi-ivory.vercel.app/users`, {
                method: "PATCH",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                // console.log( 'signin info updated in db', data);
                setUser(data)
            })


        })
        .catch( error => {
            // console.log(error);
            error.message
        })

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In Now</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignin} >
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Signin</button>
                                </fieldset>
                            </div>
                            <p>New To Coffee Drinker: <Link to='/signup'>SignUP</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;