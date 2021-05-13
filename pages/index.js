import { TextStyle, EmptyState, Layout, Page } from "@shopify/polaris";
import store from "store-js";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import ResourceListWithProducts from "../components/ResourceList";
import { TitleBar } from "@shopify/app-bridge-react";
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
            <ResourceListWithProducts />
        </Layout>
    </Page>
);

export default Index;
