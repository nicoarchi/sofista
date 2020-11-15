import React from 'react'
import "./styles.css"
import Chat from "../../components/Chat";

function ChatListPage() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Hey dudee!!"
                timestamp= "40 seconds ago"
                profilePic="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg"
            />
            <Chat
                name="Cata"
                message="Ola tio!"
                timestamp= "4 minutes ago"
                profilePic="https://www.international.gc.ca/world-monde/assets/images/issues_development-enjeux_developpement/gender_equality-egalite_des_genres/jacqueline_oneill.jpg"
            />
            <Chat
                name="Felipe Melo"
                message="Bla Bla Bla"
                timestamp= "4 minutes ago"
                profilePic=""
            />
        </div>
    )
}

export default ChatListPage