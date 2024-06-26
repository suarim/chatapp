import conversation from "../models/conversation.model.js";
import messagemodel from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    try {
        const { id: receiverid } = req.params;
        const senderid = req.user._id;
        const { message } = req.body;

        let Conversation = await conversation.findOne({
            participants: { $all: [senderid, receiverid] },
        });

        if (!Conversation) {
            Conversation = await conversation.create({
                participants: [senderid, receiverid],
            });
        }

        console.log(Conversation);

        const newmessage = await messagemodel.create({
            senderid, receiverid, message
        });

        if (newmessage) {
            Conversation.messages.push(newmessage._id);
            await Conversation.save(); // Save the updated conversation
        }

        res.status(201).json(newmessage);
    } catch (err) {
        res.status(500).json({ err: "internal server error" });
    }
};

export const getMessages = async (req,res) =>{
    const {id} = req.params
    const senderid = req.user._id
    const Conversation  = await conversation.findOne({
        participants:{$all:[senderid,id]}
    }).populate("messages")
    if(!Conversation){
        return res.status(200).json([])
    }
    res.status(200).json(Conversation.messages)
}
