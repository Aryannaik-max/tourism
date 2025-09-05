import { useState } from "react"
import './Complain.css'

const Complain = () => {
    const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
    </svg>
    );

    const StateIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
    );


    const AddressIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
        </svg>
    );

    const EmailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
        </svg>
    );

    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.28 1.465l-2.094 2.094a.25.25 0 0 0 .085.341l2.301 1.534a.25.25 0 0 0 .341-.085l2.094-2.094a1.745 1.745 0 0 1 1.465-.28l2.308 1.538a1.745 1.745 0 0 1 .163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03.007-2.137.703-2.877z"/>
        </svg>
    );

    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
        </svg>
    );

    const UploadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
        </svg>
    );

    const [formData, setFormData] = useState({
        category: '',
        state: '',
        firstName: '',
        lastName: '',
        gender: 'Male',
        address: '',
        email: '',
        mobile: '',
        complaintDate: '',
        complaintDetail: '',
        file: null,
        recaptcha: false,
    });

    const [fileName, setFileName] = useState('No file chosen');

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
        }));
    };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
        setFormData(prevState => ({ ...prevState, file: e.target.files[0] }));
        setFileName(e.target.files[0].name);
    } else {
        setFormData(prevState => ({ ...prevState, file: null }));
        setFileName('No file chosen');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted! Check the console for the data.');
  };

  return (
    <>
        <div className="banner">
            <h1>Make Us Better</h1>
        </div>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="form-grid">
                {/* Row 1 */}
                <div className="form-group">
                <label className="label-container" htmlFor="category">
                    <span className="icon"><UserIcon /></span>
                    Select Complaint Category <span className="required-star">*</span>
                </label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                    <option value="" disabled>--Please choose an option--</option>
                    <option value="booking">Hotel Booking</option>
                    <option value="service">Hotel Service</option>
                    <option value="local site seeing">Local Site Seeing</option>
                    <option value="login problem">Login Problem</option>
                    <option value="online payment">Online Payment</option>
                    <option value="tour package">Tour Package</option>
                    <option value="transportation">Transportation</option>
                    <option value="other">Other</option>
                </select>
                </div>
                
                <div className="form-group">
                <label className="label-container" htmlFor="state">
                    <span className="icon"><StateIcon /></span>
                    Select State <span className="required-star">*</span>
                </label>
                <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="" disabled>--Select State--</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Orissa">Orissa</option>
                    <option value="UP">Uttar Pradesh</option>
                </select>
                </div>

                {/* Row 2 */}
                <div className="form-group">
                <label className="label-container" htmlFor="firstName">
                    <span className="icon"><UserIcon /></span>
                    First Name <span className="required-star">*</span>
                </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                <label className="label-container" htmlFor="lastName">
                    <span className="icon"><UserIcon /></span>
                    Last Name <span className="required-star">*</span>
                </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                {/* Row 3 */}
                <div className="form-group">
                <span className="label-container">
                    Gender <span className="required-star">*</span>
                </span>
                <div className="gender-group">
                    <label>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                    Male
                    </label>
                    <label>
                    <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                    Female
                    </label>
                </div>
                </div>

                <div className="form-group">
                <label className="label-container" htmlFor="address">
                    <span className="icon"><AddressIcon /></span>
                    Address <span className="required-star">*</span>
                </label>
                <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
                </div>
                
                {/* Row 4 */}
                <div className="form-group">
                <label className="label-container" htmlFor="email">
                    <span className="icon"><EmailIcon /></span>
                    E-mail <span className="required-star">*</span>
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                <label className="label-container" htmlFor="mobile">
                    <span className="icon"><PhoneIcon /></span>
                    Mobile No <span className="required-star">*</span>
                </label>
                <div className="mobile-group">
                    <span className="country-code">+91</span>
                    <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required pattern="\d{10}" title="Mobile number should be 10 digits"/>
                </div>
                </div>

                {/* Row 5 */}
                <div className="form-group">
                <label className="label-container" htmlFor="complaintDate">
                    <span className="icon"><CalendarIcon /></span>
                    Date Of Complain <span className="required-star">*</span>
                </label>
                <input type="date" id="complaintDate" name="complaintDate" value={formData.complaintDate} onChange={handleChange} required max={today}/>
                </div>

                <div className="form-group">
                    <label className="label-container" htmlFor="file-upload">
                        <span className="icon"><UploadIcon /></span>
                        Choose File
                    </label>
                    <div className="file-upload-wrapper">
                        <input type="file" id="file-upload" name="file" onChange={handleFileChange} />
                        <span className="file-upload-btn">Choose File</span>
                        <span className="file-name">{fileName}</span>
                    </div>
                    <div className="file-hint">Size limit is 1MB. Only .jpeg, .jpg, .gif, .pdf, .doc, .docx files are allowed</div>
                </div>
                
                {/* Full width rows */}
                <div className="form-group full-width">
                <label className="label-container" htmlFor="complaintDetail">
                    <span className="icon"><AddressIcon /></span>
                    Complain Detail <span className="required-star">*</span>
                </label>
                <textarea id="complaintDetail" name="complaintDetail" value={formData.complaintDetail} onChange={handleChange} required></textarea>
                </div>
                
                <div className="form-group full-width">
                <div className="recaptcha-placeholder">
                    <label>
                        <input type="checkbox" name="recaptcha" checked={formData.recaptcha} onChange={handleChange} required/>
                        I'm not a robot
                    </label>
                    {/* In a real app, a reCAPTCHA widget would be rendered here */}
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" style={{ height: '32px' }}/>
                </div>
                </div>
                
                <button type="submit" className="submit-btn">SUBMIT</button>
            </div>
            </form>
        </div>
    </>
  )
}

export default Complain