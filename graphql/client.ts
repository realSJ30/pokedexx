import { PokeData } from "@/utils/interface";
import {
  ApolloClient,
  ApolloError,
  DocumentNode,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

interface GQLErrorProps {
  error: boolean;
  message: ApolloError | undefined | unknown;
}

export const ExecGraphQL = async (
  query: DocumentNode,
  variables: any = {}
): Promise<PokeData | GQLErrorProps> => {
  try {
    const { data, error } = await client.query({
      query,
      variables,
    });
    if (error) {
      return { error: true, message: error };
    }
    return data;
  } catch (err) {
    return { error: true, message: err };
  }
};
