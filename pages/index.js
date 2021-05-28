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
    return (
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Add/Remove Tag For Products"
                    description="Tag will be used to identify products"
                >
                    <Card sectioned>
                        <InputTag />
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
            <div className="layoutSpacing">
                <Layout>
                    <Layout.AnnotatedSection
                        title="Add Custom Tag To Product"
                        description="Tag will be used to identify products"
                    >
                        <Card sectioned>
                            <InputTag
                                callback={(val) => {
                                    setValue(val);
                                }}
                            />
                        </Card>

                        <Card sectioned>
                            <InputTag />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </div>
            {/*Calendar */}

            <Layout>
                <Layout.AnnotatedSection
                    title="Enter Date"
                    description="Start Date will indicate when discount will start. End date will indicate when discount will end."
                >
                    {/* <Card sectioned>
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
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Add Date
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card> */}

                    <div className="tagsInputButttonWrap">
                        {/* <Button primary submit>
                            Save
                        </Button> */}
                    </div>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
};

export default Index;
