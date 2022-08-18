import React, {useState} from 'react';
import privateClass from "./Contacts.module.scss";
import commonClass from "../../common/classes/InnerContainer.module.css";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";
import {useFormik} from 'formik';
import axios from "axios";

const ContactsForm = () => {
   const [btnErr, setBtnErr] = useState(false)
    type FormikValuesType = {
        name: string, message: string, email: string,
    }
    type formikErrorType = {
        email?: string
        name?: string
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: formikErrorType = {};
            if (!values.email) {
                errors.email = 'please, give me a mail';
            } else if (!/^[A-Z/d._%+-]+@[A-Z/d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.name) {
                errors.name = "please, give me a name"
            }
            return errors
        },
        onSubmit: async (values: FormikValuesType) => {
            try {
                setBtnErr(true)
                await axios.post('https://gmail-server-smtp.herokuapp.com/sendMessage', {
                    name: values.name,
                    email: values.email,
                    message: values.message
                })
                alert("your message has been sent")
            } catch (e) {
                console.log(e)
            } finally {
                setBtnErr(false)
            }
            formik.resetForm()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={privateClass.form}>
            <div className={commonClass.container}>
                <div className={privateClass.input__block}>
                    <input
                        {...formik.getFieldProps("email")}
                        className={privateClass.input__form}
                        placeholder={"email"}/>
                    {formik.touched.email && formik.errors.email &&
                        <p className={privateClass.error}>{formik.errors.email}</p>}
                </div>
            </div>

            <div className={commonClass.container}>
                <div className={privateClass.input__block}>
                    <input
                        className={privateClass.input__form}
                        {...formik.getFieldProps("name")}
                        placeholder={"name"}/>
                    {formik.touched.name && formik.errors.name &&
                        <p className={privateClass.error}>{formik.errors.name}</p>}
                </div>
            </div>

            <div className={commonClass.container}>
                <textarea
                    {...formik.getFieldProps("message")}
                    className={privateClass.textarea__form}
                    placeholder={"write a message"}/>
            </div>
            <div className={privateClass.btn__block}>
                <UniversalBtn disabled={btnErr} type={"submit"} text={"send"}/>
            </div>
        </form>
    );
};

export default ContactsForm;
