    import { useState } from 'react';
    import emailjs from '@emailjs/browser';

    // Contact component to display a contact form and handle the form submission
    export default function Contact() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        // handle the form submission and send the email
        const handleSubmit = (e) => {
            e.preventDefault();

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

        // Add your emailjs code here to send the email

            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_USER_ID)


            setName('');
            setEmail('');
            setMessage('');
        };

        return (
            <>
                <section className='container flex my-3'>
                    <h1><b><i>Contact Me</i></b></h1>
                </section>

                <form onSubmit={handleSubmit} className='container-sm flex my-3 justify-between items-center'>
                    <div className='my-3'>
                        <label htmlFor="name">Name:</label>
                        <input
                            className='form-control text-center'
                            type="text"
                            id="name"
                            name='user_name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='form-control text-center'
                            type="email"
                            id="email"
                            name='user_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className='form-control text-center'
                            id="message"
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button className='custom-btn' type="submit">Send</button>
                </form>
            </>
        );
    }
