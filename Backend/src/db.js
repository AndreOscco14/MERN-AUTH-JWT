import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/mernauth");
            console.log('>>> MongoDB  is coneccted <<<');
    } catch (error) {
        console.log(error);
    }
}