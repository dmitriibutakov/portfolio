import React from 'react';
import privateClass from "./Contacts.module.scss";
import commonClass from "../../common/classes/InnerContainer.module.css";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";
import {useFormik} from 'formik';
import {sendFormTC} from "../../DAL/send_form";


const ContactsForm = () => {
type formikErrorType = {
    email?: string
    number?: string
}
    const formik = useFormik({
        initialValues: {
            number: null as unknown as number,
            email: '',
            text: '',
        },
        validate: (values) => {
            const errors: formikErrorType = {};
            if (!values.email) {
                errors.email = 'email is required';
            } else if (!/^[A-Z/d._%+-]+@[A-Z/d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.number) {
                errors.number = "number is required"
            }
            return errors
        },
        onSubmit: values => {
            sendFormTC(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className={privateClass.form}>
            <div className={commonClass.container}>
                <input
                    {...formik.getFieldProps("email")}
                    className={privateClass.input__form}
                    placeholder={"email"}/>
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
            </div>
            <div className={commonClass.container}>
                <input
                    className={privateClass.input__form}
                    type={"number"}
                    {...formik.getFieldProps("number")}
                       placeholder={"number"}/>
                {formik.touched.number && formik.errors.number && <p>{formik.errors.number}</p>}
            </div>
            <div className={commonClass.container}>
                <textarea className={privateClass.textarea__form} placeholder={"addition"}/>
            </div>
            <div className={privateClass.btn__block}>
                <UniversalBtn type={"submit"} text={"send"}/>
            </div>
        </form>
    );
};

export default ContactsForm;
