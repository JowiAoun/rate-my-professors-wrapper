import { GraphQLClient } from "graphql-request";
import { AUTH_TOKEN } from "./constants";

const client = new GraphQLClient("https://www.ratemyprofessors.com/graphql", {
  headers: {
    authorization: `Basic ${AUTH_TOKEN}`,
  },
});

