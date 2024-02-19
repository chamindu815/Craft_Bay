import React, {useState} from 'react'
import "./modal.css";

const Modal = ({closeModal, onSubmit, defaultValue}) => {
    const [formState,  setFormState] = useState(defaultValue||{
        date: "",
        price: "",
        quantity: "",
    });

    const [errors, setErrors] = useState("");

    const validateForm = () =>{
        if(formState.date && formState.price && formState.quantity){
            setErrors("")
            return true;
        }else{
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
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

        if(!validateForm()) return;

        onSubmit(formState)

        closeModal();
    }

  return (
    <div>
        <div className="modal-container" onClick={(e) =>{
            if (e.target.className === "modal-container")
            closeModal();
        }}>
            <div className="modal">
                <form>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input name='date' value={formState.date} onChange={handleChange}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input name='price'value={formState.price} onChange={handleChange}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input name='quantity'value={formState.quantity} onChange={handleChange}/>
                    </div>
                    {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal