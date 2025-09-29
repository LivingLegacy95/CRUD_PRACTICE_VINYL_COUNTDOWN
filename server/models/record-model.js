import {model, Schema} from 'mongoose';

/* This code snippet is defining a Mongoose schema for a record in a music collection. Let's break down
what each field represents: */
const RecordSchema = new Schema({
/* This part of the code snippet is defining the "title" field in the Mongoose schema for a record in a
music collection. Here's what each property represents: */
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long, please enter a valid title"]
    },
/* This part of the code snippet is defining the "artist" field in the Mongoose schema for a record in
a music collection. Here's what each property represents: */
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [2, "Artist must be at least 2 characters long, please enter a valid artist name"]
    },
/* This part of the code snippet is defining the "cover" field in the Mongoose schema for a record in
a music collection. Here's what each property represents: */
    cover: {
        type: String,
        required: [true, "Please enter album cover URL"],
        minlength: [2, "Album cover URL must be at least 2 characters long, please enter a valid URL"]
    },
/* This part of the code snippet is defining the "description" field in the Mongoose schema for a record in
a music collection. Here's what each property represents: */
    description: {
        type: String,
        required: [true, "Description is required, please enter a description"],
        minlength: [10, "Description must be at least 10 characters long, please enter a valid description"]
    },
/* The `isOwned` field in the Mongoose schema for a record in a music collection is defining a boolean
property. */
    isOwned: {
        type: Boolean,
        default: false
    },
/* The `genres` field in the Mongoose schema for a record in a music collection is defining a
subdocument with three properties: `genre1`, `genre2`, and `genre3`, each of type String. This
structure allows for storing up to three genres for a record. The `required` property is set to
`[true, "At least one genre is required"]`, which means that at least one genre must be provided
when creating a new record. */
    genres: {
        genre1: String,
        genre2: String,
        genre3: String,
        // type: [String],
        // required: [true, "At least one genre is required"],
    }
});

export const Record = model('Record', RecordSchema);
export default RecordSchema;