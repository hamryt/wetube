import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl : {
        type: String,
        required: "File Url is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comments"// 참조하는 model의 이름이어야함  const model = mongoose.model("Comment", CommentSchema);
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;