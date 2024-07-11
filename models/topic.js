import mongoose,{ Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    }, {
        timestamps:true,
    }
);

// To check if a model called Topic already exists and if not it will create a model called  Topic defined in topicSchema
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;