'use strict'

import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken}  from '../libs/jwt.js'

export const register = async (req, res) => { 
    const {email , password, username} = req.body

    try {
        // Encriptacion de la contraseña 
        const passwordHash = await bcrypt.hash(password, 10)  //Genera un String aleatorio

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

       const userSaved = await newUser.save()
      const token =  await createAccessToken({id: userSaved._id})
       res.cookie('token',token)
       res.json({ 
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt
        })
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => {
   res.send("Loginnn")
}