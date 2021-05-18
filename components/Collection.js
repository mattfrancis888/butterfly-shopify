//Custom collection not from APIimport React from "react";
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
const GET_COLLECTIONS = gql`
    {
        collections(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    handle
                    productsCount
                }
            }
        }
    }
`;

const Collection = () => {
    const { loading, error, data } = useQuery(GET_COLLECTIONS);

    if (error)
        return (
            <h1 className="queryErrorMessage">{`Error: ${error.message}`}</h1>
        );
    if (loading) {
        return <div className="loadingCenter">Loading</div>;
    }
    return (
        // if (loading) return <div>Loading…</div>;
        // if (error) return <div>{error.message}</div>;

        <Card>
            <p>{data}</p>
        </Card>
    );
};
export default Collection;
