import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('from sign up',email,password);


        createUser(email,password)
        .then(result => {
            console.log('user created ad fb',result.user);
            const createdAt = result?.user?.metadata?.creationTime

            const newUser = {name, email, createdAt}
            // save new user info
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            }) 
            .then(res => res.json())
            .then(data => {
                if (data.insertedID) {
                    console.log('user created on db');
                }
            })
        })
        .catch( error => {
            console.log('ERROR', error);
        })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign UP Now</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignup} >
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" placeholder="Name" name='name' />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">SignUP</button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;