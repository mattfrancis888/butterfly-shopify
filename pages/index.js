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
} from "@shopify/polaris";
const Index = () => (
    <Page>
        <TitleBar
            title="Sample App"
            primaryAction={{
                content: "Select products",
            }}
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
                value={"0"}
                // onChange={this.handleChange("discount")}
                label="Discounted price"
                type="discount"
            />
            <Collection />
        </Layout>
    </Page>
);

export default Index;
