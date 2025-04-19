import React from 'react';
import {useState} from 'react';
import {motion} from 'motion/react';
import '../App.css';

const ContactPage = () => {
    let [data, setData] = useState({name: '', email: '', msg: ''});
    let [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(data);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('success!');
        }
        else {
            console.log('something went wrong');
        }
    };
    
    const validate = (data) => {
        const errors = {};

        if (!data.name.trim()) {
            errors.name = 'Please enter a name';
        }

        if (!data.email.trim()) {
            errors.email = 'Please enter an email';
        }
        else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        if (!data.msg) {
            errors.msg = 'Please enter a message';
        }

        return errors;
    };

    return (
        <motion.div className='container2' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
            <h1>Contact</h1>
            {errors.name && (<span className='error'>{errors.name}</span>)}<br></br>
            <input
                className='small-input'
                type='text'
                name='name'
                value={data.name}
                onChange={handleChange}
                placeholder='Name'
            /><br></br>
            {errors.email && (<span className='error'>{errors.email}</span>)}<br></br>
            <input
                className='small-input'
                type='text'
                name='email'
                value={data.email}
                onChange={handleChange}
                placeholder='Email'
            /><br></br>
            {errors.msg && (<span className='error'>{errors.msg}</span>)}<br></br>
            <textarea
                className='large-input'
                type='text'
                name='msg'
                value={data.msg}
                onChange={handleChange}
                placeholder='Message'
            /><br></br><br></br>
            <motion.button className='nav-button' onClick={handleSubmit} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>submit</motion.button>
        </motion.div>
    );
};

export default ContactPage;