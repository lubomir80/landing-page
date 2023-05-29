import { Formik, Form, Field, ErrorMessage } from 'formik';
import { smallForm } from "./FormData/PartnerFormik"
import "./Forma.scss"

const PartnerForm = () => {
   const { initialValues, onSubmit, validationSchema } = smallForm;


   const passFormInside = () => (
      <Form className='forma form__horizontal'>
         <div className="formInput" >
            <Field className="input" name="email" placeholder="Email" />
            <label className="label" htmlFor="email" >Email</label>
            <ErrorMessage className='error' name="email" component="span" />
         </div>
         <button type='submit' className='button button-circle'>Contact</button>
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


export default PartnerForm
