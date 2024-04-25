import React, {useEffect, useState} from 'react';
import './App.css';
import Message from "./Messsage";
import {UserContext} from "./UserContext";

const App: React.FC = () => {

    const [userName, setUserName] = useState<string>('User');
    const [userMessage, setUserMessage] = useState<string>('This is the initial message');

    useEffect(() => {
        const timer = setTimeout(() => {
            // update the state after 5 seconds
            setUserName('Juan');
            setUserMessage('Updated message with Typescript');
        }, 5000)
        return () => clearTimeout(timer);
    }, []);

    return (
        <UserContext.Provider value={{name: userName, message: userMessage}}>
            <h1>Typescript is cool</h1>
            <Message/>
        </UserContext.Provider>
    );
}

export default App;
