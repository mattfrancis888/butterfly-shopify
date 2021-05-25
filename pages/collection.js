import React, { useRef, useEffect, useState, useCallback } from "react";

import AutoComplete from "../components/AutoComplete";
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

class AnnotatedLayout extends React.Component {
    // state = {
    //     discount: "10%",
    // };

    render() {
        // const { discount } = this.state;

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Enter Collection"
                        description="Collection will be used for discounts"
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        onChange={this.handleChange("discount")}
                                        label="Collection"
                                        type="discount"
                                    />
                                    <AutoComplete />
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
    }

    // handleSubmit = () => {
    //     this.setState({
    //         discount: this.state.discount,
    //     });
    //     console.log("submission", this.state);
    // };

    handleChange = (field) => {
        return (value) => this.setState({ [field]: value });
    };
}

export default AnnotatedLayout;
