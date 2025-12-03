import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig(() => [
  {
    name: "pets",
    root: ".",
    input: {
             "path": "https://petstore3.swagger.io/api/v3/openapi.json"
           },
    output: {
              "path": "./src/pets",
              "clean": true
            },
    plugins: [
      pluginOas({
          "output": {
            "path": "oas",
            "clean": true
          },
          "validate": true
      }),
      pluginTs({
          "output": {
            "path": "./model",
            "barrelType": "named"
          },
          "enumType": "asConst",
          "dateType": "date"
      }),
      pluginClient({
          "output": {
            "path": "./client.ts"
          },
          "client": "fetch",
          "dataReturnType": "data",
          "pathParamsType": "object",
          "paramsType": "object",
          "operations": true,
          "baseURL": "https://api.pets.local"
      })
    ]
  },
  {
    name: "store",
    root: ".",
    input: {
             "path": "https://petstore3.swagger.io/api/v3/openapi.json"
           },
    output: {
              "path": "./src/store",
              "clean": true
            },
    plugins: [
      pluginOas({
          "output": {
            "path": "oas",
            "clean": true
          },
          "validate": true
      }),
      pluginTs({
          "output": {
            "path": "./model",
            "barrelType": "named"
          },
          "enumType": "enum",
          "dateType": "date"
      }),
      pluginClient({
          "output": {
            "path": "./client.ts"
          },
          "client": "axios",
          "dataReturnType": "full",
          "pathParamsType": "object",
          "paramsType": "object",
          "operations": true,
          "baseURL": "https://api.store.local"
      })
    ]
  }
]);
