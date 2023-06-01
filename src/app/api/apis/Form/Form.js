'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Form = (props) => {
    const router = useRouter();
    const { singleContennt } = props
    const [inputValue, setInputValue] = useState({
        name: '',
        email: ''
    })
    const handleInput = (e) => {
        const newInput = { ...inputValue }
        if (e.target.name === 'name') {
            newInput[e.target.name] = e.target.value
        }
        if (e.target.name === 'email') {
            newInput[e.target.name] = e.target.value
        }
        setInputValue(newInput)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('click")
        const inputData = new FormData()
        inputValue.append('item', 'null')
        inputValue.append('name', inputValue.name)
        inputValue.append('item', inputValue.email)
        fetch("https://aslam84.pythonanywhere.com/api/subscriber/email/", {
            method,
            body: fromInfo

        })
            .then(res =>{
        if(res){
             router.push('/new-url');
        }})
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='form_section'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onChange={handleInput} value={inputValue.name} className='inputClass' type="text" name='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleInput} value={inputValue.email} className='inputClass' type="email" name="email" />
                    </div>
                </form>
                    <button style={{ background: singleContennt.btn_background, color: singleContennt.btn_color }} >
                        {singleContennt.btn}
                    </button>
            </div>
        </div>
    );
};

export default Form;
