import React, { useContext } from 'react'
import "../CSS/TermsAndConditions.css"
import { Context } from './Contex'

const TermsAndConditions = () => {
  const {setShowTermsAndConditionsUI}=useContext(Context)
  return (
    <div className='TermsAndConditionsWrap'>
        <div className='TermsAndConditions'>
            <div className='TermsAndConditionsA'>
              <h3>Terms and Conditions</h3>
                  <div className='Article'>
                  <h4>Introduction</h4>

                  <p>These terms and conditions govern the provision of web development services by 
                  Digital Premium Tech. to clients. By engaging Digital Premium Tech's Services, the Client agrees 
                  to be bound by these terms and conditions. (Also note that Digital Premium Tech shall be refered to as "The Developer" in certain statements in this Article)</p>
                  </div>

                  <div className='Article'>
                  <h4>Services</h4>

                  <p>Digital Premium Tech offers the services as mentioned on the web page 
                    https://digitalpremiumtech.vercel.app/. Digital Premium tech reserves the 
                    right to fullfill these services either directly or indirectly but will always 
                    do her best to see to the satisfaction of her clients. Digital Premium Tech may offer promotional
                    and special offers from time to time, 
                    subject to specific terms outlined at the time of the offer.</p>
                  </div>

                  <div className='Article'>
                  <h4>Payment</h4>
                  <p>The Client agrees to pay to Digital Premium Tech the mentioned amount for any chosen or selected service.</p>
                  </div>

                  <div className='Article'>
                  <h4>Project Delivery</h4>
                  <p>Digital Premium Tech will endeavor to complete the project within the agreed-upon time frame.</p>
                  <p>The client Acknowledges that delays in project completion may occur due to factors beyond the Developer's control, including but not limited to:
                  <br/>
                  Delayed provision of necessary materials or information by the Client,<br/>
                  Technical issues beyond the Developer's control<br/>
                  Force majeure events.</p>
                  </div>

                  <div className='Article'>
                  <h4>Client Responsibilities</h4>
                  <p>The Client agrees to provide all necessary materials and information required for the completion of the project in a timely manner.</p>
                  <p>The Client is responsible for providing feedback and approvals promptly to avoid delays in project completion.</p>
                  <p>The Client acknowledges that any delays caused by their failure to fulfill their responsibilities may result in project delays.</p>
                  </div>

                  <div className='Article'>
                  <h4>Intelectual Property</h4>
                  <p>Digital Premium Tech retains the right to use the completed project for promotional purposes and to display it in their portfolio.</p>
                  </div>

                  <div className='Article'>
                  <h4>Limitation of Liability</h4>
                  <p>Either party may terminate the agreement in writing if the other party breaches any material term of the agreement and fails to remedy the breach within 30 days of receiving written notice.</p>
                  </div>

                  

                  <div className='Article'>
                  <h4>Amendments</h4>
                  <p>The Developer reserves the right to amend these terms and conditions at any time.</p>
                  </div>

                  <div className='Article'>
                  <h4>Termination</h4>
                  <p>The Developer shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the Services provided.</p>
                  </div>

                  <div className='Article'>
                  <h4>Entire Agreement</h4>
                  <p>These terms and conditions constitute the entire agreement between the Developer and the Client and supersede all prior agreements and understandings, whether written or oral.</p>
                  </div>

                  <div className='Article'>
                  <h4>Contact Information</h4>
                  <p>For any inquiries regarding these terms and conditions or the Services provided, please contact the Digital Premium Tech through the "Contact Us" page form or th eother contact information on the page.</p>
                  </div>

                  <div className='Article'>
                  <h4>Summary</h4>
                  <p>By engaging the Developer's Services, the Client acknowledges that they have read, understood, and agreed to these terms and conditions.</p>
                  </div>
                  
                  <button style={{height:"70px"}} onClick={()=>setShowTermsAndConditionsUI(false)}>Ok</button>
            </div>
            
        </div>
    </div>
  )
}

export default TermsAndConditions

