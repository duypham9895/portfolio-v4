import axios from "axios";
import dotenv from "dotenv";
import path from "path";

import { IResponseToken } from "./types";

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const fetchToken = async (): Promise<string> => {
  const { data } = await axios.post<IResponseToken>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
    {
      identifier: `${process.env.NEXT_PUBLIC_STRAPI_IDENTIFIER}`,
      password: `${process.env.NEXT_PUBLIC_STRAPI_PASSWORD}`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return data.jwt;
};

export default (async () => {
  const token = await fetchToken();
  return {
    schema: [
      {
        [`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT}`]: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    ],
    overwrite: true,
    hooks: {
      afterAllFileWrite: "prettier --write",
    },
    documents: "graphql/**/*.graphql",
    generates: {
      "types/generated.tsx": {
        plugins: [
          "typescript",
          "typescript-react-apollo",
          "typescript-operations",
        ],
        config: { reactApolloVersion: 3 },
      },
    },
  };
})();
