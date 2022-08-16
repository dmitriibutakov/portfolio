import axios from "axios";

export type FormikValuesType = {
    number: number, text?: string, email: string,
}

export const sendFormTC = (values: FormikValuesType) => async () => {
    try {
        await axios.post('sendmail.php', {method: "POST", body: {values}})
    } catch (e) {
        console.log(e)
    }
}