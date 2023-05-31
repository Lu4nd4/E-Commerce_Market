import React from 'react';
import './payment.css';
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.png"; 

// function spacify(str, after = 4, c = ' ') {
//     if (!str) {
//       return false;
//     }
//     const v = str.replace(/[^\dA-Z]/g, '');
//     const reg = new RegExp(`.{${after}}`, 'g');
//     return v.replace(reg, (a) => {
//       return a + c;
//     }).replace(/[^0-9]+$/, '');
//   }

  

function PaymentForm() {

    // const result1 = spacify('123123123131', 4, ' ');
    // const result2 = spacify('12312312313', 4, '-');
  
    // console.log(result1);
    // console.log(result2);


  return (

    <div className="padding">

      
        
                <div className="titlevisa">
                    <h1 className='titlecc'>CREDIT/DEBIT CARD PAYMENT</h1>
                  
                    {/* <img src="https://img.icons8.com/color/36/000000/visa.png" alt="Visa" />
                    <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="Mastercard" />
                    <img src="https://img.icons8.com/color/36/000000/amex.png" alt="Amex" /> */}
                    <img src={visa} className='visaimg'></img>
                    <img src={mastercard} className='mastercardimg'></img>
                
                </div>
              
              <div className="card-body" >
              
                  <label htmlFor="cc-number" className="control-label cardNumber">CARD NUMBER:</label>
                  {/* <input
                    id="cc-number"
                    type="number"
                    className="input-lg form-control cc-number"
                    autoComplete="cc-number"
                    placeholder="•••• •••• •••• ••••"
                    required
                  /> */}
                  <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
            
               
                 
                    <div className="form-group">
                      <label htmlFor="cc-exp" className="control-label caedExpiry">CARD EXPIRY:</label>
                      {/* <input
                        id="cc-exp"
                        type="number"
                        className="input-lg form-control cc-exp"
                        autoComplete="cc-exp"
                        placeholder="•• / ••"
                        required
                      /> */}
                      <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
               
                  </div>
                 
                    <div className="form-group">
                      <label htmlFor="cc-cvc" className="control-label cardCVC">
                        CARD CVC:
                      </label>
                      {/* <input
                        id="cc-cvc"
                        type="tel"
                        className="input-lg form-control cc-cvc"
                        autoComplete="off"
                        placeholder="••••"
                        required
                      /> */}
                      <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
                    </div>
              
            
                <div className="form-group">
                  <label htmlFor="numeric" className="control-label cardHolder">CARD HOLDER NAME:</label>
                  {/* <input type="text" className="input-lg form-control" /> */}
                  <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
                </div>
                <div className="form-group text-center">
                  {/* <input
                    value="MAKE PAYMENT"
                    type="button"
                    className="btn btn-success btn-lg form-control"
                    style={{ fontSize: '.8rem' }}
                  /> */}
                  <button type="submit">Send Message</button>
                </div>
              </div>

              {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="  Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="  Your Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="  Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                            </div>

                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form> */}
            
          
        
      
    </div>
  );
}

export default PaymentForm;
