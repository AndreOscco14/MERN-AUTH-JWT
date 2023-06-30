import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/mernauth");
            console.log('>>> BBDD  is coneccted');
    } catch (error) {
        console.log(error);
    }
}