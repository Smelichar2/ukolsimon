import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledForm = styled(motion.form)`
    background-color: #140B29;
    padding: 40px;
    border-radius: 10px;
    width: 800px;
    max-width: 800px;
    margin-top: 200px;
    margin-left: 500px;
    display: flex;
    flex-direction: column;
    height: 400px;
`;

const StyledLabel = styled.label`
    font-size: 18px;
    margin-bottom: 8px;
    color: #fff;
`;

const StyledInput = styled.input`
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 16px;
    font-size: 16px;
    width: calc(100% - 20px);
    border: none;
    border-radius: 5px;
    background-color: #0A0318;
    height: 40px;
    color: ${(props) => (props.value ? '#fff' : '#000')}; /* Dynamically set text color */
`;

const StyledTextArea = styled.textarea`
    padding: 10px;
    background-color: #0A0318;
    margin-left: 10px;
    margin-bottom: 16px;
    font-size: 16px;
    width: calc(100% - 20px);
    height: 200px;
    border: none;
    border-radius: 5px;
    color: ${(props) => (props.value ? '#fff' : '#000')}; /* Dynamically set text color */
`;

const StyledInputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const StyledTitle = styled(motion.p)`
    font-size: 50px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: #5F4BB6;
    color: #fff;
    padding: 10px 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const StyledWhite = styled.span`
    color: #fff;
    font-size: 60px;
`;

const StyledPink = styled(StyledWhite)`
    color: #CF1259;
`;

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendClick = () => {
        console.log('Zpráva byla odeslána na simonskolni@seznam.cz');
    };

    return (
        <div>
            <StyledTitle
                initial={{ scale: 1, opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <StyledPink style={{ fontSize: '60px' }}>&lt;</StyledPink>Contact me<StyledPink style={{ fontSize: '60px' }}>/&gt;</StyledPink>
            </StyledTitle>
            <StyledForm
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <StyledInputGroup>
                    <StyledLabel htmlFor="name">Name and Surname:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </StyledInputGroup>

                <StyledInputGroup>
                    <StyledLabel htmlFor="email">Email address:</StyledLabel>
                    <StyledInput
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </StyledInputGroup>

                <StyledInputGroup>
                    <StyledLabel htmlFor="message">Message:</StyledLabel>
                    <StyledTextArea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </StyledInputGroup>

                <StyledButton onClick={handleSendClick}>Odeslat</StyledButton>
            </StyledForm>
        </div>
    );
};

export default ContactMe;