import "../components/radio-toggle-button.css"
import AWS from '../components/icons/aws-icon';
import GCP from '../components/icons/gcp-icon';
import { Provider, useStore } from "../store";
import { ChangeEvent } from "react";
import Azure from "./icons/azure-icon";

const RadioToggleButton = () => {
    const { setProvider, provider } = useStore()

    const updateProvider = (event: ChangeEvent<HTMLInputElement>) => {
        const newProvider = event.target.value as Provider;
        setProvider(newProvider)
    }

    return (
        <div className="InputGroup">
            <input type="radio" name="size" id="size_1" checked={provider === 'aws'}
                value="aws" onChange={updateProvider} />
            <label htmlFor="size_1"><AWS /></label>

            <input type="radio" name="size" id="size_2" checked={provider === 'gcp'} value="gcp" onChange={updateProvider} />
            <label htmlFor="size_2"><GCP /></label>

            <input type="radio" name="size" id="size_3" checked={provider === 'azure'} value="azure" onChange={updateProvider} />
            <label htmlFor="size_3"><Azure /></label>

            <input type="radio" name="size" id="size_4" checked={provider === 'arts'} value="arts" onChange={updateProvider} />
            <label htmlFor="size_4"><Azure /></label>
        </div>
    )
};

export default RadioToggleButton;