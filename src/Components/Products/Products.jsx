import React from 'react'
import "./Products.css"
const Products = () => {
    return (
        <div className='Main'>
            <div className='Prodwithimage'>
                <div className='prodcont'>
                    <div className='ImageProduct'>
                        <img src='https://woxro.com/public/assets/png/services/webdesigning.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Web Designing</p>
                    </div>
                    <div className='Text'>
                        We create impressive interfaces. Usability +
                        user experience are created based on a
                        study of preferences and user behavior,
                        using the latest web design trends, our
                        experience, and achievements.
                    </div>
                </div>
                <div className='ImageCont'>
                    <div className='ImageProduct'>
                        <img src='https://woxro.com/public/assets/png/services/webapplication.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Web Application</p>
                    </div>
                    <div className='Text'>
                        We have completed projects in full cycle
                        web application using CRM,HRM,and<br></br>
                        project management solutions.Look no<br></br>
                        further if you are in search of a <br></br>
                        professional partner who can develop.
                    </div>
                </div>
                <div className='MobileCont'>
                    <div className='ImageProduct'>
                        <img src='https://woxro.com/public/assets/png/services/mobileappdevelopment.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Mobile App Developement</p>
                    </div>
                    <div className='Text'>
                        We develop high-quality and effective
                        applications   for your business. Our expertise
                        and knowledge help us create reliable
                        mobile applications for iOS and <br></br>
                        Android and cross-platform solutions.

                    </div>
                </div>
            </div>

            <div className='SecondLines'>
                <div className='EcomCont'>
                    <div className='ImageProduct'>
                        <img src='https://woxro.com/public/assets/png/services/ecommercedevelopment.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Ecommerce Developement</p>
                    </div>
                    <div className='Text'>
                        For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.
                    </div>
                </div>
                <div className='Digcont'>
                    <div className='ImageProduct'>
                        <img src='	https://woxro.com/public/assets/png/services/digitalmarketing.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Digital Marketing</p>
                    </div>
                    <div className='Text'>
                        We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.
                    </div>
                </div>
                <div className='GraphCont'>
                    <div className='ImageProduct'>
                        <img src='https://woxro.com/public/assets/png/services/graphic.png' />
                    </div>
                    <div className='Bio'>
                        <p className='Web'>Graphic Designing</p>
                    </div>
                    <div className='Text'>
                        We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products