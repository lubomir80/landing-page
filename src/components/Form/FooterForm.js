import { Formik, Form, Field, ErrorMessage } from 'formik';
import { footerForm } from "./FormData/FoterFormik"
import "./Forma.scss"


function FooterForm() {
   const { initialValues, onSubmit, validationSchema } = footerForm;



   const passFormInside = () => (
      <Form className='forma'>
         <div className="formInput" >
            <Field className="input" name="name" placeholder="Your name" />
            <label className="label" htmlFor="name" >Your name</label>
            <ErrorMessage className='error' name="name" component="span" />
         </div>
         <div className="formInput" >
            <Field className="input" name="email" placeholder="Email" />
            <label className="label" htmlFor="email" >Email</label>
            <ErrorMessage className='error' name="email" component="span" />
         </div>
         <div className="formInput" >
            <Field className="input" name="phone" placeholder="Phone " />
            <label className="label" htmlFor="phone" >Phone </label>
            <ErrorMessage className='error' name="phone" component="span" />
         </div>
         <div className="formInput" >
            <Field className="input" name="message" placeholder="Message" />
            <label className="label" htmlFor="message" >Message</label>
            <ErrorMessage className='error' name="message" component="span" />
         </div>
         <button type='submit' className='button'>Contact</button>
      </Form>
   )


   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}>
         {passFormInside}
      </Formik>
   )
}

export default FooterForm









