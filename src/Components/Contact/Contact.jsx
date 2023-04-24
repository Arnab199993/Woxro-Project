import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div>
            <div className='Contact'>
                <div style={{ display: "flex" }}>
                    <div className='Contactdiv'>
                        <span className='contactfirst'>We offer all kinds of IT services that</span><br></br>
                        <span className='contactSecond'>Ensure you success</span>
                    </div>
                    <div className='Btn'>
                        <div className='DivBtn'>
                            <button className='Button'>
                                <div style={{ display: "flex", marginLeft: "10px" }}>
                                    <img className='contactphoto' src='./telephone.png' /><span className='talk'>Contact Us</span>
                                </div>
                            </button>
                            <button className='Button1'>
                                <div style={{ display: "flex", marginLeft: "10px" }}>
                                    <img className='contactphoto' src='./speech-bubble.png' />
                                    <span className='talk'>Lets Talk</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact