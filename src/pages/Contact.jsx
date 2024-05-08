    import Footer from '../components/Footer';
    import { useState } from 'react';
    import emailjs from '@emailjs/browser';

    export default function Contact() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

        // TODO: Add your emailjs code here to send the email

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID') 


            setName('');
            setEmail('');
            setMessage('');
        };

        return (
            <>
                <div className='flex'>
                    <h1>Contact</h1>
                    <p>This is the contact page</p>
                </div>

                <form onSubmit={handleSubmit} className='container-sm flex item-center'>
                    <div className='my-3 form-control-sm'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='my-3 form-control-sm'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='my-3 form-control-sm'>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>

                <div className='mx-3'>
                    <Footer />
                </div>
            </>
        );
    }