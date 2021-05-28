import store from "store-js";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import ResourceListWithProducts from "../components/ResourceList";
import Collection from "../components/Collection";
import { TitleBar } from "@shopify/app-bridge-react";
import InputTag from "../components/InputTag";
import Input from "../components/Input";
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
import InputCalendar from "../components/InputCalendar";
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
                            <InputTag />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </div>
            {/*Calendar */}

            <div className="layoutSpacing">
                <Layout>
                    <Layout.AnnotatedSection
                        title="Start Date"
                        description="Tag will be used to identify products"
                    >
                        <Card sectioned>
                            <Input />
                            <InputCalendar />
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </div>
        </Page>
    );
};

export default Index;
