How to start:
- pnpm i
- rename .env.example to .env
- pnpm run dev

Description

For the project structure I selected FSD https://fsd.how, it is an architectural methodology for scaffolding front-end applications. I had something similar (feature folder structure) at my previous project, and I wanted to try FSD as a continuation.

I selected TypeScript because it is already a standard de facto, there are some alternatives like flowjs and ReScript but both of them are marginalized despite the fact that they provide more soundness. Using pure JavaScript is not optional any more since support for PropTypes has been completely removed from the core React package.

To fetch the data I selected react-query, currently, it is the most boring solution, I have experience with useQuery from apollo-client, and useQuery from react-query was not something new for me. For parsing API responses I selected ArkType in order to follow the "parse, don’t validate" principle.

For saving items which were added to the basket I selected localStorage, for fetching the basket data, from localStorage, I also used react-query, we already have an server state storage, no need to add one more, more over, the localStorage strategy can be easily substituted with real API.

I add the selected product category to the search parameters to allow a user to share the URL with the selected category.

I selected decimal.js to calculate the money because I do not like the workaround with tofixed(2). Moreover, the calculation of the total price per product and the total price for the entire basket must be performed on the server side. This is a very important business logic and should be as a the single source of truth. Only backend knows all business rules that must be applied during calculation

I added a 1 second delay to the basket related API calls to simulate the network request.