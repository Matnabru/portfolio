import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [message,setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if(!email || !name || !message){
            alert("Please fill everything.");
        }else {
            emailjs.sendForm('service_kn3qj35', 'template_9tvldxr', e.target, 'user_zB5ezs8dxNuwxA7UBawR3')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setMessage('');
            setEmail('');
            setName('');
        }
    }
    return (
        <div className={"bg-gray-600"}>
            <div className="w-8/12 ml-auto mr-auto pt-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
                    <div className={"text-center text-5xl font-bold text-yellow-500"}>
                        <a>Contact me</a>
                    </div>
                    <div className={"mb-4"}>
                        <input type="hidden" name="contact_number" />
                    </div>
                    <div className={"mb-6"}>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_name" />
                    </div>
                    <div className={"mb-6"}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Your Email"} type="email" name="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className={"mb-6"}>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={"Message"} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" />
                    </div>
                    <div className="flex items-center justify-between">
                        <input className={"bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}  type="submit" value="Send" />
                    </div>
                </form>
                <p className="pb-1 text-center text-gray-300 text-xs">
                    &copy;2021 Matnabru.
                </p>
            </div>
        </div>
    );
}