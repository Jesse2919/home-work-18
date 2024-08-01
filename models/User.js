const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        // columns on your table
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
        },

        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]

    },
    {
        // options for your table
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})
const User = model("User", userSchema)

module.exports = User