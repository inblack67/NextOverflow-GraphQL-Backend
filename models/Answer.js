const { Schema, models, model } = require('mongoose');

const AnswerSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Answer content is required'],
        trim: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Who is the creator of this Answer?']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = models.Answer || model('Answer', AnswerSchema);