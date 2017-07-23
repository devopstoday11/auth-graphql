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