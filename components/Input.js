import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { TextField, Button, Stack } from "@shopify/polaris";

const Input = (props) => {
    const [value, setValue] = useState("");

    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const renderButton = () => {
        if (props.prefix === "%") {
            return (
                <Stack distribution="trailing">
                    <div className="submitButtonMarginWrap">
                        <Button
                            primary
                            submit
                            onClick={() => {
                                if (value > 100 || value < 0) {
                                    alert("Invalid percentage");
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </Stack>
            );
        }
    };
    return (
        <React.Fragment>
            <TextField
                label={props.title}
                type={props.type}
                prefix={props.prefix || ""}
                value={value}
                onChange={handleChange}
            />
            {renderButton()}
        </React.Fragment>
    );
};

export default Input;
