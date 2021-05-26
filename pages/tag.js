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
    TextField,
} from "@shopify/polaris";
import AutoComplete from "../components/AutoComplete";
import React, { useState, useCallback } from "react";
const Tag = () => {
    const [value, setValue] = useState("Jaded Pixel");
    const handleChange = useCallback((newValue) => setValue(newValue), []);
    return (
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Enter Tag"
                    description="Tag will be used to identify products"
                >
                    <Card sectioned>
                        <Form>
                            <FormLayout>
                                <InputTag />
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Submit
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

export default Tag;
