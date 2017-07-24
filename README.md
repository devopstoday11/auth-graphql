# auth-graphql-starter
Starter project from a GraphQL course on Udemy.com - Section 3!

## Authorization
pros and cons of coupling vs decoupled

graphql handles only data, passport only handles authentication

graphql sits as layer ontop of app
coupled approach, authentication is a service

split react into 2 pieces
authentication layer
and part which does use graphql

limitation of coupled approach
because graphql and passport don't work well together

## Coupling
DOn't stuff authentication logic in mutation
rather outside helper functions handle this


## ! AUTH FLOW PROBLEM
Login User mutation runs

.then is exectued and we also refetch the user query at the same time.
we would also then START refetching current user

which is a forced network request

redirect to dashboard
dashboard would kick us back to login form, then we are left looking at login form

refetchQueries doesn't quite work correctly now

## Suggested workaround
Whenever we rerun a query, components will update with results from query

entire react app, rerenders

so we can trick login and signin form to being aware of state

associate form with user query
when user finishes, then we send to dashboard
