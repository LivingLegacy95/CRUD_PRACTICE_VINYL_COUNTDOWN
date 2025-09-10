import {model, Schema} from 'mongoose';

const RecordSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long, please enter a valid title"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [2, "Artist must be at least 2 characters long, please enter a valid artist name"]
    },
    cover: {
        type: String,
        required: [true, "Please enter album cover URL"],
        minlength: [2, "Album cover URL must be at least 2 characters long, please enter a valid URL"]
    },
    description: {
        type: String,
        required: [true, "Description is required, please enter a description"],
        minlength: [10, "Description must be at least 10 characters long, please enter a valid description"]
    },
    isOwned: {
        type: Boolean,
        default: false
    },
    genres: {
        genre1: String,
        genre2: String,
        genre3: String,
        // type: [String],
        required: [true, "At least one genre is required"],
    }
});

export const Record = model('Record', RecordSchema);