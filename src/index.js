import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connect } from "./database.js";
import schema from "./schema.js";


const app = express()
const port = 4500

connect()

app.get('/', (req, res) => {
	res.json({
		message: "Hello World"
	})
})

//const schema = {}

app.use('/graphql', graphqlHTTP({
	graphiql: true,
	schema: schema,
	context: {
		messageId: 'test'
	}
}))

app.listen(port, () => console.log(`server on port ${port}`))
