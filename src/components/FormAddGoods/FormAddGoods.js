import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { serviceAddGoods, serviceTriggerForm } from '../../actions/actions';
import './FormAddGoods.css';

function FormAddGoods(props) {
    const dispatch = useDispatch()
    const initValue = {title: '', price: '', img: '', isDiscount: false, discount: ''}
    const fileRef = useRef();

    const [ value, setValue  ] = useState({...initValue})
    const [ loading, setLoading ] = useState(false);

    const handleCancel = () => {
        dispatch(serviceTriggerForm(false));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) {
            return;
        }
        dispatch(serviceAddGoods(value));
        dispatch(serviceTriggerForm(false))
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValue(prevForm => ({...prevForm, [name]: value}));
    }

    const handleSelect = (e) => {
        setLoading(true);
        new Promise((resolve, reject) => {
            const file = fileRef.current.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                const result = event.target.result;

                setValue(prevForm => ({...prevForm, img: result}));
                resolve(setLoading(false));
            })
            reader.readAsDataURL(file);
        })
    }


    return (
        <div className="form-wrapper">
            <form className='form' onSubmit={handleSubmit}>
                <h3 className='form-title'>Новый товар</h3>
                <div className="input-block title-input-block">
                    <label className='label-input' htmlFor="title">Название товара</label>
                    <input className="input-field title-input" type="text" name='title' id='title' onChange={handleChange} value={value.title} required/>
                </div>
                <div className="input-block price-input-block">
                    <label className='label-input' htmlFor="price">Стоимость</label>
                    <input className="input-field price-input" type="number" name='price' id='price' onChange={handleChange} placeholder='0' value={value.price} required />
                </div>
                <div className="input-block img-input-block">
                    <div className="wrapper-input-file">
                        { value.img
                            ? <span className="wrapper-input-file-text">File selected</span>
                            : <span className="wrapper-input-file-text">Click here to select image</span>}
                    </div>
                    <input className="img-input-file" type="file" name='img' id='img' ref={fileRef} onChange={handleSelect} required/>
                </div>
                <div className="input-block discount-input-block">
                    <div className="discount-input-checkbox">
                        <label className='label-input' htmlFor="discount-checkbox">Товар со скидкой</label>
                        <input className="discount-checkbox" type="checkbox" name='isDiscount' id='discount-checkbox' onChange={handleChange}/>
                    </div>
                   { value.isDiscount && <div className="discount-input-value">
                        <label className='label-input' htmlFor="discount-value">Значение скидки</label>
                        <input className="discount-value" type="number" name='discount' id='discount-value' onChange={handleChange} max='100' value={value.discount} placeholder='0'/>
                    </div> }
                </div>
                <div className="block-submit">
                    <button className='form-button-submit'>Создать</button>
                </div>
                <button type='button' className='form-button-cancel' onClick={handleCancel}></button>
            </form>
        </div>

    )
}

export default FormAddGoods;

