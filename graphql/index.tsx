import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT}`,
  cache: new InMemoryCache(),
});

// const StrapiApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
//   return <ApolloProvider client={client}>{children}</ApolloProvider>;
// };

// export default StrapiApolloProvider;
