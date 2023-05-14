import "../components/radio-toggle-button.css"
import ACTIVITIES from "./icons/activities-icon";
import ANIMAL from "./icons/animal-icon";
import COMPONENTICON from "./icons/component-icon";
import FLAG from "./icons/flag-icon";
import FOOD from "./icons/food-icon";
import OBJECTICON from "./icons/object-icon";
import PEOPLE from "./icons/people-icon";
import SMILEY from "./icons/smiley-icon";
import SYMBOL from "./icons/symbol-icon";
import TRAVEL from "./icons/travel-icon";

import { Provider, useStore } from "../store";
import { ChangeEvent } from "react";

const RadioToggleButton = () => {
    const { setProvider, provider } = useStore()

    const updateProvider = (event: ChangeEvent<HTMLInputElement>) => {
        const newProvider = event.target.value as Provider;
        setProvider(newProvider)
    }
    return (
        <div className="InputGroup">
            <input type="radio" name="size" id="size_1" checked={provider === 'activities'} value="activities" onChange={updateProvider} />
            <label htmlFor="size_1"><ACTIVITIES /></label>
            
            <input type="radio" name="size" id="size_2" checked={provider === 'animal'} value="animal" onChange={updateProvider} />
            <label htmlFor="size_2"><ANIMAL /></label>

            <input type="radio" name="size" id="size_3" checked={provider === 'component'} value="component" onChange={updateProvider} />
            <label htmlFor="size_3"><COMPONENTICON /></label>

            <input type="radio" name="size" id="size_4" checked={provider === 'flag'} value="flag" onChange={updateProvider} />
            <label htmlFor="size_4"><FLAG /></label>

            <input type="radio" name="size" id="size_5" checked={provider === 'food'} value="food" onChange={updateProvider} />
            <label htmlFor="size_5"><FOOD /></label>

            <input type="radio" name="size" id="size_6" checked={provider === 'object'} value="object" onChange={updateProvider} />
            <label htmlFor="size_6"><OBJECTICON /></label>

            <input type="radio" name="size" id="size_7" checked={provider === 'people'} value="people" onChange={updateProvider} />
            <label htmlFor="size_7"><PEOPLE /></label>

            <input type="radio" name="size" id="size_8" checked={provider === 'smiley'} value="smiley" onChange={updateProvider} />
            <label htmlFor="size_8"><SMILEY /></label>

            <input type="radio" name="size" id="size_9" checked={provider === 'symbol'} value="symbol" onChange={updateProvider} />
            <label htmlFor="size_9"><SYMBOL /></label>

            <input type="radio" name="size" id="size_10" checked={provider === 'travel'} value="travel" onChange={updateProvider} />
            <label htmlFor="size_10"><TRAVEL /></label>
        </div>
    )
};

export default RadioToggleButton;