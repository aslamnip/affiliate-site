'use client'
import React, { useState } from 'react';
// import Router from 'next/router';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('click')
        const inputData = new FormData()
        inputData.append('item', 'null')
        inputData.append('name', inputValue.name)
        inputData.append('item', inputValue.email)
        fetch("https://aslam84.pythonanywhere.com/api/subscriber/email/", {
            method: "POST",
            body: inputData,

        })
            .then(res =>{
                if(res){
                     console.log(res);
//                     window.location.assign("https://www.google.com/");
                       window.open('https://www.google.com/', '_blank');
                }})
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='form_section'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input required onChange={handleInput} value={inputValue.name} className='inputClass' type="text" name='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input required onChange={handleInput} value={inputValue.email} className='inputClass' type="email" name="email" />
                    </div>
                       <input className='submitbutton' style={{ background: singleContennt.btn_background, color: singleContennt.btn_color }}  type="submit" value=  {singleContennt.btn} />

                </form>
                   
            </div>
        </div>
    );
};

export default Form;
