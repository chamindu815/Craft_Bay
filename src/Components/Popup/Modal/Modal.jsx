import React, { useState } from 'react'
import "./modal.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Moment from "moment";

const Modal = ({ closeModal, modalType, onSubmit, defaultValue }) => {
    const initialState = modalType == 'BuyingPrice' ? {
        date: Moment().format('YYYY-MM-DD'),
        price: "",
        quantity: "",
    } : {
        date: Moment().format('YYYY-MM-DD'),
        price: "",
    };
    const [formState, setFormState] = useState(defaultValue || initialState);

    const [errors, setErrors] = useState("");
    const handleDateChange = date => {
        setFormState({...formState,date:Moment(date).format('YYYY-MM-DD')});
      };
    const validateForm = () => {
        if (formState.date && formState.price) {
            setErrors("")
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(","));
            return false;
        }

    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        onSubmit(formState)

        closeModal();
    }

    return (
        <div>
            <div className="modal-container" onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal();
            }}>
                <div className="modal">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='date'>Date</label>
                            <DatePicker
                                selected={formState.date}
                                onChange={handleDateChange}
                                dateFormat="yyyy/MM/dd"
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input name='price' value={formState.price} onChange={handleChange} />
                        </div>

                        {modalType == 'BuyingPrice' && <div className='form-group'>
                            <label htmlFor='quantity'>Quantity</label>
                            <input name='quantity' value={formState.quantity} onChange={handleChange} />
                        </div>}
                        {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                        <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal