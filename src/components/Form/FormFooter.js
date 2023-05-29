import React, { useState } from 'react'
import Forma from './Forma'
import FormInput from './FormInput'
import FormFooterData from "./FormData"
import emailjs from '@emailjs/browser';


function FormFooter() {
   const [ref, setRef] = useState("")
   const [success, setSuccess] = useState(null);
   const [error, setError] = useState(null);

   const handlerForm = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_t4i291e', 'template_tknmqxd', ref.current, 'mrZEHhcy__N2K0Rtt')
         .then((result) => {
            console.log(result.text);
            setSuccess(true);
         }, (error) => {
            console.log(error.text);
            setSuccess(false);
            setError(true);
         });
   }

   return (
      <Forma
         className="forma"
         onSubmit={handlerForm}
         setRef={setRef}
         success={success}
         error={error}>
         {FormFooterData.map((item) =>
            <FormInput key={item.id} item={item} />)}
         <button className='button' type='submit'>Hire us</button>
      </Forma>

   )
}

export default FormFooter