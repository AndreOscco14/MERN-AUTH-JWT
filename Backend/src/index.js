import app from './app.js'
import {connectDB} from './db.js'

async function main() {
    try {
        connectDB();
        app.listen(3000)
        console.log('Server on Port', 3000);
    } catch (error) {
        console.error(error)
    }
}

main()

