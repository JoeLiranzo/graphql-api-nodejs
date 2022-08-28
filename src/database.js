import mongoose from "mongoose";

export async function connect(){
	try {
		await mongoose.connect('mongodb://deepthinking.dev/mongodbgraphql', {
			useNewUrlParser: true,
		})
		console.log('>>>DB is connected')
			
	} catch (error) {
		console.log('Something goes wrong: ')
		console.log(error)
	}	
}


