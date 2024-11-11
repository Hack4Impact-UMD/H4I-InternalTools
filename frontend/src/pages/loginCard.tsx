import { useState } from 'react'
import React from 'react'
import './loginCard.css'
import { Link } from 'react-router-dom';

interface LoginCardProps {
  title: string;
  otherTitle: string;
  prompt: string;
}

function loginCard({ title, otherTitle, prompt }: LoginCardProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  // Update the email address input value on change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Update the password input value on change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  // Handle button click
  const handleClick = () => {
    // Placeholder for actual action
    // This should check the validity of the inputs in the textboxes
    // Either throw an error or log the user in
    alert(`${inputValue} logged in!`); 
  };

  return (
    <div className="boxed">
      <p>
        {/*<Link to="/login">I don't know the company domain</Link>*/}
        {/*Placeholder for switching to admin login view*/}
        <a 
          href="https://www.figma.com/design/Nb7ipRTxIbdi6QclO5p6md/Hack4Impact?node-id=120-237&node-type=frame" 
          target="_blank" 
          rel="noopener noreferrer"
          className="switch-link">
          {otherTitle}
        </a>
      </p>
      <div className="centered">
        <h1 className="title">{title}</h1>
        <h3 className="prompt">Enter your login info</h3>
        {/*Textbox to enter email address*/}
        <input
          type="text"
          value={inputValue}
          onChange={handleEmailChange}
          placeholder={`Email address`}
          className="textbox"
        />
        {/*Textbox to enter password*/}
        <input
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder={`Password`}
          className="textbox"
        />
        <button onClick={handleClick} className="button">Continue</button>
        <p>
          {/*<Link to="/login">I don't know the company domain</Link>*/}
          {/*Placeholder for link to page that helps with company domain*/}
          <a 
            href="https://www.figma.com/design/Nb7ipRTxIbdi6QclO5p6md/Hack4Impact?node-id=120-237&node-type=frame" 
            target="_blank" 
            rel="noopener noreferrer"
            className="domain-link">
            I don't know the company domain
          </a>
        </p>
      </div>
    </div>
  );
}

export default loginCard