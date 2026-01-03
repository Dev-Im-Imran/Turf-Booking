import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^.+@.+\..+$/, 'Please enter the valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters'],
        validate: {
            validator: function (value){
                return /^(?=.*\d).{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters and must contains a numbers'
        }
    },
    createAt: {
        type: Date,
        default: Date.now
    }
    
}, { collection: 'user' });


userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

export default mongoose.model('user', userSchema);
