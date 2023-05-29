import * as Yup from "yup"
import uniqid from 'uniqid';


let initialValues = {
   name: "",
   email: "",
   phone: "",
   message: "",

}

const onSubmit = (values, actions) => {
   actions.setSubmitting(false);
   setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
   }, 500)
   actions.resetForm({
      values: {
         name: "",
         email: "",
         phone: "",
         message: "",

      },
   })
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
   name: Yup.string('')
      .min(3, "Username should be 3-16 characters and should't include any special character")
      .max(24, "Username should be 3-24 characters and should't include any special character")
      .required("Name is required"),
   email: Yup.string('Enter your email')
      .required("Email is required")
      .email("It should be like mail@mail.com"),
   phone: Yup.string('')
      .required("Phone is required")
      .matches(phoneRegExp, 'Phone number is not valid'),
   message: Yup.string("").required("Message is required"),

})

export const fileFormats = ["application/pdf"];

export const footerForm = {
   initialValues,
   onSubmit,
   validationSchema
}

export const FormFooterData = [
   {
      id: uniqid(),
      name: "username",
      placeholder: "Username",
   },
   {
      id: uniqid(),
      name: "email",
      placeholder: "Email",
   },
   {
      id: uniqid(),
      name: "phone",
      placeholder: "Phone",
   },
   {
      id: uniqid(),
      name: "message",
      placeholder: "Message",
   },
]