# Example project for using GraphQL.js using Express.js server on Node.js application.
##Calling API using Postman:

1) Get person by calling:
    ```
    POST http://localhost:3000/graphql
    body:
    {
    	"query" : "{ getPersonById(id: 0) { id, name, surname} }"
    }
    ```

2) Change persons name by calling:
    ```
    POST http://localhost:3000/graphql
    body:
    {
    	"query" : "mutation { changeName(id: 0, name: \"John\") { id, name, surname } }"
    }
    ```
