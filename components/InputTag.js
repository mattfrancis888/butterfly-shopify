//Custom collection not from APIimport React from "react";
import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { TextField, Button, Tag, Stack } from "@shopify/polaris";
const Collection = (props) => {
    const [value, setValue] = useState("Jaded Pixel");

    const [selectedTags, setSelectedTags] = useState([
        "Rustic",
        "Antique",
        "Vinyl",
        "Refurbished",
    ]);

    const removeTag = useCallback(
        (tag) => () => {
            setSelectedTags((previousTags) =>
                previousTags.filter((previousTag) => previousTag !== tag)
            );
        },
        []
    );

    const tagMarkup = selectedTags.map((option) => (
        <Tag key={option} onRemove={removeTag(option)}>
            {option}
        </Tag>
    ));

    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return (
        <React.Fragment>
            <TextField label="Tag" value={value} onChange={handleChange} />
            <Stack spacing="tight">{tagMarkup}</Stack>;
            <Stack distribution="trailing">
                <Button
                    primary
                    submit
                    onClick={() => {
                        // props.callback(value);
                        let data = [...selectedTags]; //DO NOT DO let data = selectedTags,
                        // we should not mutate our hook value or else hook won't rerender
                        //https://stackoverflow.com/questions/47802105/why-is-react-is-not-rerendering-after-setstate
                        data.push(value);

                        setSelectedTags(data);
                    }}
                >
                    Add Tag To Product
                </Button>
            </Stack>
        </React.Fragment>
    );
};
export default Collection;
