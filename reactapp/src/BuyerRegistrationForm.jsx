import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const BuyerRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile_number: '',
        address: '',
        user_type: 3 // Set user_type to 3 for buyer
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/buyer/register/', formData);
            setSuccessMessage('Registration success!');
            setErrorMessage(''); // Reset error message
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.'); // Display error message
            setSuccessMessage(''); // Reset success message
        }
    };

    return (
<div>
<Navbar />
        <div className="card" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
            <div className="card-body">
                <h5 className="card-title">Buyer Registration</h5>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="user_type" value={formData.user_type} />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile_number" className="form-label">Mobile Number:</label>
                        <input type="text" id="mobile_number" name="mobile_number" value={formData.mobile_number} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default BuyerRegistrationForm;
