//Custom collection not from APIimport React from "react";
import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { TextField, Button } from "@shopify/polaris";
const Collection = () => {
    const [value, setValue] = useState("Jaded Pixel");

    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return (
        <React.Fragment>
            <TextField label="Date" value={value} onChange={handleChange} />
        </React.Fragment>
    );
};
export default Collection;
