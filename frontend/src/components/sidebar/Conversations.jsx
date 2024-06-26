import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";
const Conversations = () => {
	const {loading,conversations} = useGetConversations()
	// console.log(typeof conversations)
	if (!conversations.alluser || !Array.isArray(conversations.alluser)) {
        return null; // or handle loading state or empty conversations
    }
	conversations.alluser.map((i)=>{
		if(!i)return null
		console.log(i)
})
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.alluser.map((i,idx) => (
                <Conversation key={i._id} conversation={i} 
				emoji={getRandomEmoji()}
				lastIdx={idx === conversations.length - 1}
				 />
            ))}

		</div>
	);
};
export default Conversations;