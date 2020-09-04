const { Schema, models, model } = require('mongoose');

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Question title is required'],
        unique: [true, 'Question already exists'],
        trim: true,
        maxlength: [40, 'Question title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Question description is required'],
        trim: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Who is the creator of this Question?']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = models.Question || model('Question', QuestionSchema);