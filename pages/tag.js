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
const Tag = () => {
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
    console.log("Render", selectedTags);
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
                                let data = [...selectedTags]; //DO NOT DO let data = selectedTags,
                                // we should not mutate our hook value or else hook won't rerender
                                //https://stackoverflow.com/questions/47802105/why-is-react-is-not-rerendering-after-setstate
                                data.push(value);

                                setSelectedTags(data);
                            }}
                        >
                            <FormLayout>
                                <InputTag />
                                <Stack spacing="tight">{tagMarkup}</Stack>;
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Add Tag To Product
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>

                    <Card sectioned>
                        <Form
                            onSubmit={() => {
                                let data = [...selectedTags]; //DO NOT DO let data = selectedTags,
                                // we should not mutate our hook value or else hook won't rerender
                                //https://stackoverflow.com/questions/47802105/why-is-react-is-not-rerendering-after-setstate
                                data.push(value);

                                setSelectedTags(data);
                            }}
                        >
                            <FormLayout>
                                <InputTag />
                                <Stack spacing="tight">{tagMarkup}</Stack>;
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Exclude Tag From Discount
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>
                    <div className="tagsInputButttonWrap">
                        <Button primary submit>
                            Save
                        </Button>
                    </div>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
};

export default Tag;
