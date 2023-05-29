import * as Yup from "yup"


let initialValues = {
   email: "",
}

const onSubmit = (values, actions) => {
   setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
   }, 500)
   actions.setSubmitting(false);
   actions.resetForm({
      values: {
         email: "",
      },
   })
}

const validationSchema = Yup.object({
   email: Yup.string('Enter your email').required("Email is required")
      .email("It should be like mail@mail.com"),
})



export const smallForm = {
   initialValues,
   onSubmit,
   validationSchema
}


