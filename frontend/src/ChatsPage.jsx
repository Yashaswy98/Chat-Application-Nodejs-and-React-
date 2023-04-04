import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('6faa3cee-d123-430b-a133-925c3ae4c9e3',
  props.user.username,
  props.user.secret
   ); 
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )
}

export default ChatsPage
