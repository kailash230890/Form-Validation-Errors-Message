import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';


const Forms = () => {
    const { register, handleSubmit, errors } = useForm();

    console.log(errors);
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="App">
            <div className="container py-5">
                <div className="card border-0 shadow p-4 w-75 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text"
                                className={classNames("form-control", {
                                    "is-invalid": errors.fullname,
                                })}
                                id="fullname"
                                ref={register({
                                    required: "this field is required",
                                    minLength: {
                                        value: 4,
                                        message: "please enter min 4 characters"
                                    }
                                })}
                                name='fullname'
                            />
                            {errors.fullname && (<div className='invalid-feedback'>{errors.fullname.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" 
                            className={classNames("form-control", {
                                "is-invalid": errors.email,
                            })} 
                            id="email"
                                ref={register({
                                    required: "this field is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "please valid email"
                                    }
                                })}
                                name='email'
                            />
                            {errors.email && (<div className='invalid-feedback'>{errors.email.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" 
                            className={classNames("form-control", {
                                "is-invalid": errors.phone,
                            })} 
                            id="phone"
                                ref={register({
                                    required: "this field is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "please enter a vaild 10 digit numbers"
                                    }
                                })}
                                name='phone'
                            />
                            {errors.phone && (<div className='invalid-feedback'>{errors.phone.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                             className={classNames("form-control", {
                                "is-invalid": errors.password,
                            })} 
                            id="password"
                                ref={register({
                                    required: "this field is required",
                                    pattern: {
                                        value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                        message: "UpperCase, LowerCase, Number/Special Char and min 8 Chars"
                                    }
                                })}
                                name='password'
                            />
                            {errors.password && (<div className='invalid-feedback'>{errors.password.message}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='state'>Choose Your State</label>
                            <select 
                             className={classNames("form-control", {
                                "is-invalid": errors.state,
                            })} 
                            id='state' 
                            ref={register({
                                required: "this field is required",
                            })} 
                            name='state'
                            >
                                <option value=''>Select your state</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="MP">MP</option>
                            </select>
                            {errors.state && (<div className='invalid-feedback'>{errors.state.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="male" value="male" ref={register({
                                    required: "this field is required",
                                })} name='gender' />
                                <label className="form-check-label" htmlFor="male">male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="female" value="female" ref={register({
                                    required: "this field is required",
                                })} name='gender' />
                                <label className="form-check-label" htmlFor="female">female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="other" value="other" ref={register({
                                    required: "this field is required",
                                })} name='gender' />
                                <label className="form-check-label" htmlFor="other">other</label>
                            </div>
                            {errors.gender && (<div className='form-text text-danger'>{errors.gender.message}</div>
                            )}
                        </div>
                      
                        <div className='form-group'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="tnc" value="agree"
                                    name='tnc' ref={register({
                                        required: "this field is required",
                                    })} />
                                <label className="form-check-label" htmlFor="tnc">I agree all terms and conditons</label>
                            </div>
                            {errors.tnc && (<div className='form-text text-danger'>{errors.tnc.message}</div>
                            )}
                        </div>


                        <button type='submit' className='btn btn-secondary btn-block'>Submit Form</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forms;
