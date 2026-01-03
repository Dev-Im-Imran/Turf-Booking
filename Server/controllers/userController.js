import User from '../models/model.js';
import bcrypt from 'bcryptjs';


export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const isMatch = await User.findOne({ username });
        if(isMatch) return res.status(401).json({ message: "user is already exist" })

        const newUser = User({ username, email, password });
        await newUser.save();
        
        res.status(200).json({ message: "Successfully Signup" });
    } catch (error) {
        res.status(404).json({ message: "registration is Failed", error: error.message });
    }
}


export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User is not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "invalid password" })

        res.status(200).json({ message: "login successfull", user });
    } catch (error) {
        res.status(500).json({ message: "invalid username or password", error: error.message })
    }
}

