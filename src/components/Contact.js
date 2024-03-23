import React from 'react';
import './contact.css'
const Contact = () => {
  const serifFont2 = {
    fontFamily: "serif",
  };

  const handleSendEmail = () => {
    // Open default email client
    window.location.href = 'mailto:perfectspring1202@gmail.com';
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 mb-3 mb-md-0">
            <form className="input-group">
              <input type="email" className="form-control" placeholder="Email to perfectspring1202@gmail.com" />
              <button 
                style={serifFont2} 
                className="btn btn-outline-light send-btn" 
                type="button"
                onClick={handleSendEmail} // Call function to open default email client
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-md-4 text-md-center mb-3 mb-md-0">
            <p style={serifFont2}>RAJESH SINGH</p>
            <p style={serifFont2}>09871041732</p>
            <p style={serifFont2}>08383879838</p>
          </div>
          <div className="col-md-3 text-md-right">
            <p style={serifFont2}>&copy; Perfect Spring Industries</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
