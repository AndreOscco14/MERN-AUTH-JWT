import mongoose from 'mongoose'
import dotenv from 'dotenv'


export const connectDB = async () => {
    dotenv.config()
    try {
        // Conectado a MongooAtlas
        await mongoose.connect(process.env.MONGODB_URL);
        
        // Asi llamo a la BBDD local. mernauth
        
        // await mongoose.connect("mongodb://localhost/mernauth");
            console.log('>>> MongoDB  is coneccted <<<');
    } catch (error) {
        console.log(error);
    }
}