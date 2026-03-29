import '../App.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  let resMsg = document.getElementById('res');

  const handleMail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_rq3s22m', 'template_e05t4k8', form.current, {publicKey: 'TMoAA2LUHwv0GU4gd',})
    .then(() => {resMsg.textContent = 'Sent! Thank you for contacting me, I will get back to you shortly!'}, (error) => {console.log('something went wrong :(', error.text)})
  }

  return (
      <div id='contact' className='container'>
        <h2>contact me</h2>
        <form ref={form} onSubmit={handleMail}>
          <label className='text'>name<br></br><input name='name' type='text' required></input></label><br></br>
          <label className='text'>email<br></br><input name='email' type='text' required></input></label><br></br>
          <label className='text'>message<br></br><textarea name='message' rows='4' required></textarea></label><br></br>
          <button className='submit-btn' type='submit'>send</button><br></br>
          <p id='res' style={{fontStyle:'italic'}}></p>
        </form>
    </div>
  );
};

export default Contact;