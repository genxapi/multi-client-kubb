# multi-client-kubb-demo

Demo SDK generated from the public Petstore API using @genxapi/cli with the Kubb template.

## Clients

| Client | OpenAPI Source | Base URL | Description |
| ------ | -------------- | -------- | ----------- |
| pets | [Swagger Petstore - OpenAPI 3.0](https://petstore3.swagger.io/api/v3/openapi.json) | https://api.pets.local | This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) |
| store | [Swagger Petstore - OpenAPI 3.0](https://petstore3.swagger.io/api/v3/openapi.json) | https://api.store.local | This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml) |

## Usage

Install dependencies and regenerate clients:

```bash
npm install
npm run generate-clients
```

The generated Kubb configuration is available at `kubb.config.ts`.

## Regeneration

Run `npm run generate-clients` inside this package to regenerate the API bindings after updating the OpenAPI spec.

