import React, { useRef, useEffect, useState, useCallback } from "react";
import { Autocomplete } from "@shopify/polaris";
const AutoComplete = (data) => {
    const deselectedOptions = [
        { value: "rustic", label: "Rustic" },
        { value: "antique", label: "Antique" },
        { value: "vinyl", label: "Vinyl" },
        { value: "vintage", label: "Vintage" },
        { value: "refurbished", label: "Refurbished" },
    ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState(deselectedOptions);

    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            if (value === "") {
                setOptions(deselectedOptions);
                return;
            }

            const filterRegex = new RegExp(value, "i");
            const resultOptions = deselectedOptions.filter((option) =>
                option.label.match(filterRegex)
            );
            setOptions(resultOptions);
        },
        [deselectedOptions]
    );

    const updateSelection = useCallback(
        (selected) => {
            const selectedValue = selected.map((selectedItem) => {
                const matchedOption = options.find((option) => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });

            setInputValue(selectedValue[0]); //Note to me: Changed this compared to the API so that autocomplete shows input after dropdown is selected
            setSelectedOptions(selected);
        },
        [options]
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Collection"
            value={inputValue}
            // prefix={<Icon source={SearchMinor} color="base" />}
            placeholder="Search"
        />
    );

    return (
        <div style={{ height: "225px" }}>
            <Autocomplete
                options={options}
                selected={selectedOptions}
                onSelect={updateSelection}
                textField={textField}
            />
        </div>
    );
};
export default AutoComplete;
