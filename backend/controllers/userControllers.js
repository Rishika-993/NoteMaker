import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    // if (!name || !email || !password) {
    //     res.status(400);
    //     throw new Error('Please fill all the fields');
    // }

    // // Here you would typically check if the user already exists and save the new user to the database
    // // For now, we will just return a success message
    // res.status(201).json({ message: 'User registered successfully' });

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            isAdmin: user.isAdmin,  
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

});

export const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {     //these are mongoose method to check and verify, this method return true if password matches
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),  //generates a JWT token
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});