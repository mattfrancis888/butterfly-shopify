import store from "store-js";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import ResourceListWithProducts from "../components/ResourceList";
import Collection from "../components/Collection";
import { TitleBar } from "@shopify/app-bridge-react";
import InputTag from "../components/InputTag";
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    Tag,
} from "@shopify/polaris";
import AutoComplete from "../components/AutoComplete";
import React, { useState, useCallback } from "react";
const Index = () => {
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
    console.log(selectedTags);
    return (
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Enter Tag"
                    description="Tag will be used to identify products"
                >
                    <Card sectioned>
                        <Form
                            onSubmit={() => {
                                selectedTags.push("Hi");
                                setValue("Test");
                                setSelectedTags(selectedTags);
                            }}
                        >
                            <FormLayout>
                                <InputTag />
                                <Tag>{value}</Tag>
                                <Stack spacing="tight">{tagMarkup}</Stack>;
                                <Stack distribution="trailing">
                                    <Button
                                        primary
                                        submit
                                        // onClick={() => {
                                        //     let data = selectedTags.push("Hi");
                                        //     console.log("test me", data[4]);
                                        // }}
                                    >
                                        Submit Tag
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
};

export default Index;
