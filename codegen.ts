import got from "got";
import dotenv from "dotenv";
import path from "path";

import { IResponseToken } from "./types";

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const fetchToken = async (): Promise<string> => {
  const { body } = await got.post<IResponseToken>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
    {
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
      json: {
        identifier: `${process.env.NEXT_PUBLIC_STRAPI_IDENTIFIER}`,
        password: `${process.env.NEXT_PUBLIC_STRAPI_PASSWORD}`,
      },
    }
  );
  return body.jwt;
};

export default (async () => {
  const token = await fetchToken();
  return {
    schema: [
      {
        [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`]: {
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
    generates: {
      "types/generated.d.ts": {
        plugins: ["typescript"],
        config: {
          skipTypename: false,
          noExport: true,
          declarationKind: "interface",
          constEnums: false,
          namingConvention: {
            typeNames: "change-case#pascalCase",
          },
        },
      },
      "types/generated.ts": {
        plugins: ["typescript"],
        config: {
          skipTypename: false,
          noExport: false,
          declarationKind: "interface",
          constEnums: false,
          namingConvention: {
            typeNames: "change-case#pascalCase",
          },
        },
      },
    },
  };
})();
