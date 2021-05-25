import store from "store-js";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import ResourceListWithProducts from "../components/ResourceList";
import Collection from "../components/Collection";
import { TitleBar } from "@shopify/app-bridge-react";
import {
    TextStyle,
    EmptyState,
    Card,
    DisplayText,
    Form,
    FormLayout,
    Layout,
    Page,
    PageActions,
    TextField,
    Button,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
const Index = () => {
    const [value, setValue] = useState("Jaded Pixel");
    const handleChange = useCallback((newValue) => setValue(newValue), []);
    return (
        <Page>
            <p className="title">Test Me</p>
            <TitleBar
                title="Sample App"
                primaryAction={{
                    content: "Select products",
                }}
                className="title"
            />
            <Layout>
                <TextStyle variation="positive">
                    Sample app using React and Next.js
                </TextStyle>
                <EmptyState
                    heading="Discount your products temporarily"
                    action={{
                        content: "Select products",
                        onAction: () => console.log("clicked"),
                    }}
                    image={img}
                >
                    <p>Select products to change their price temporarily.</p>
                </EmptyState>
                {/* <ResourceListWithProducts /> */}
                <TextField
                    prefix="$"
                    value={"0"}
                    disabled={true}
                    label="Original price"
                    type="price"
                />
                <TextField
                    prefix="$"
                    value={value}
                    onChange={(text) => {
                        handleChange(text);
                    }}
                    label="Discounted price"
                    type="discount"
                />
                <Button>Add product</Button>
                <Collection />
            </Layout>
        </Page>
    );
};

export default Index;
