import {ChangeEvent, useState} from "react";

const useForm = <T>(initialValues: T) => {

    const [formValues, setFormValues] = useState<T>(initialValues);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({...formValues, [name]: value })
    }


    const formReset = () => {
        setFormValues(initialValues);
    }

    return {formValues, handleInputChange, formReset};
}

export default useForm;
