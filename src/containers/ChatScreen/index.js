import React, { useState } from 'react'
import "./styles.css"
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {

    const [input, setInput] = useState('')

    const [messages, setMessages]= useState([
        {
            id: "01",
            name: "Ellen",
            profilePic: "...",
            message: "Hello world"
        },
        {
            id: "02",
            name: "Ellen",
            profilePic: "...",
            message: "How its going?"
        },
        {
            id: "03",
            message: "Fine, How you doing?"
        }
    ])

    const handleSend = (e) => {
        e.preventDefault()
        setMessages([...messages, {message: input }])
        setInput("")
    }

    return (
        <div className="ChatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH XXXXX ON 10/10/10</p>
           
                {messages.map(message => (

                    message.name ? (
                        <div className="ChatScreen__message" >
                            <Avatar className="chatScreen__image"
                                alt={message.name}
                                src={message.profilePic}
                                key={message.id}
                            />
                            <p className="ChatScreen__text" >{message.message}</p>
                        </div>
                    ) : (
                        <div className="ChatScreen__message">
                            <p className="ChatScreen__textUser">{message.message}</p>
                        </div>
                    )
                ))}
            
            <form className="ChatScreen__input" >
                <input value={input} 
                    onChange={e => setInput (e.target.value)} 
                    className="ChatScreen__inputField" type="text" placeholder="Type a message..." />
                <button onClick={handleSend}
                className="ChatScreen__inputButton" type="submit">SEND</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
