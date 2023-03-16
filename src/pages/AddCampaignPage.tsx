import React, {FC, FormEvent} from "react";
import useForm from "../hooks/useForm";
import {CampaignInput} from "../types/campaing-types";
import {toast} from "react-toastify";
import {createCampaign} from "../requests/campaign-requests";

const AddCampaignPage: FC = () => {

    const {formValues, handleInputChange, formReset} = useForm<CampaignInput>({name: "", hashtag: "", creationDate: ""});
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValues.hashtag || !formValues.creationDate || !formValues.name)
            return toast.error("A field is missing");

        createCampaign(formValues).then((result) => {
            formReset();
            toast.success("Campaign created");
        }).catch((e) => {
            toast.error("Impossible to create a campaign")
        })

    }

    return (
        <div>
            <h1 className={"text-4xl text-center mt-24"}>Create a campaign</h1>

            <form action="#" className={"flex flex-col mx-auto w-96 mt-12"} onSubmit={handleSubmit}>
                <div className={"flex space-x-4"}>
                    <div>
                        <label className={"label label-text"} htmlFor="name">Name : </label>
                        <input type="text" id="name" placeholder="First campaign" name="name"
                               className="input input-bordered w-full" value={formValues.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className={"label label-text"} htmlFor="creation-date">Creation date : </label>
                        <input type="date" id="creation-date" placeholder="Type here" name="creationDate"
                               className="input input-bordered w-full" value={formValues.creationDate} onChange={handleInputChange}/>
                    </div>
                </div>

                <div>
                    <label className={"label label-text"} htmlFor="hashtag">HashTag :</label>
                    <input type="text" id="hashtag" placeholder="london" name="hashtag"
                           className="input input-bordered w-full text" value={formValues.hashtag} onChange={handleInputChange}/>
                </div>

                <button className={"btn btn-primary w-full mt-8"} type={"submit"} >Add a campaign</button>
            </form>
        </div>
    )
}

export default AddCampaignPage;
