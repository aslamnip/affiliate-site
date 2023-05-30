'use client'
import React, { useState } from 'react';

const Form = (props) => {
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
    const handleSubmit = () => {
        const inputData = new FormData()
        inputValue.append('item', 'null')
        inputValue.append('name', inputValue.name)
        inputValue.append('item', inputValue.email)
        fetch(fetchUrl, {
            method,
            body: fromInfo

        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    console.log(inputValue)
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
                <a href={singleContennt.url} target="_blank" rel="noopener noreferrer">
                    <button style={{ background: singleContennt.btn_background, color: singleContennt.btn_color }} >
                        {singleContennt.btn}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Form;