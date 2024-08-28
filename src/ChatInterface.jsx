// src/ChatInterface.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaRobot } from 'react-icons/fa';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = { sender: 'ai', text: `Based on symptoms "${input}", the predicted disease is...` };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.sender === 'user' ? <FaUser /> : <FaRobot />}
            <MessageText>{message.text}</MessageText>
          </Message>
        ))}
      </ChatBox>
      <InputContainer>
        <Input
          type="text"
          value={input}
          placeholder="Enter symptoms..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatInterface;

// Styled Components
const ChatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatBox = styled.div`
  height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  ${props => props.sender === 'user' && 'justify-content: flex-end;'}
`;

const MessageText = styled.div`
  max-width: 70%;
  margin: 0 10px;
  padding: 10px;
  background-color: ${props => props.sender === 'user' ? '#007bff' : '#e9ecef'};
  color: ${props => props.sender === 'user' ? '#fff' : '#333'};
  border-radius: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;
