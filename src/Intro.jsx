import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import { useUserId } from './context/userId';

const Intro = () => {
  const [name, setName] = useState('');
  const [disable, setDisable] = useState(false);
  const history = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const createUser = async (name) => {
    try {
      const response = await fetch(
        'https://mock-it-two.vercel.app/createUser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: name,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      return response.json();
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  };

  const { setSelectedUserId } = useUserId();
  const redirectToPage = async (path) => {
    setDisable(true);
    if (path === 'jobs' && name === '') {
      toast.error('Enter your name');
      setDisable(false);
    } else if (name.trim() !== '' && path === 'jobs') {
      try {
        const newUser = await toast.promise(createUser(name), {
          loading: 'Creating user...',
          success: 'User created successfully!',
          error: 'Failed to create user',
        });
        if (newUser) {
          setDisable(false);

          setSelectedUserId(newUser);
        }
        history(`/${path}?name=${encodeURIComponent(name)}`);
      } catch (error) {
        console.error(error);
        setDisable(false);
      }
    } else if (path === 'pdf') {
      history(`/${path}`);
      setDisable(false);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="intro">
          <img src="./logo.jpeg" alt="logo" className="logo" />
          Welcome to MockGenie
        </h1>
        <p className="intro-para">
          Welcome to MockGenie, where interview preparation meets innovation.
          Elevate your readiness for the job market with our cutting-edge AI
          interview chatbot. Designed to simulate real-world interview
          scenarios, MockGenie offers a dynamic experience tailored to individual
          job descriptions and user resumes. Embrace the power of technology as
          MockGenie guides you through realistic mock interviews, providing
          valuable insights and feedback to sharpen your skills. Say goodbye to
          conventional mock interviews; MockGenie is your gateway to a new era of
          personalized and challenging interview preparation. Are you ready to
          revolutionize the way you prepare for success? Dive into MockGenie today.
        </p>
        <h2 className="title">Enter Your Name</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <button
          className="button"
          disabled={disable}
          style={{
            backgroundColor: disable ? 'grey' : 'blue',
          }}
          onClick={() => redirectToPage('jobs')}
        >
          Select Job
        </button>
        <button
          className="button"
          disabled={disable}
          style={{
            backgroundColor: disable ? 'grey' : 'blue',
          }}
          onClick={() => redirectToPage('pdf')}
        >
          Go to Admin Page
        </button>
      </div>
    </div>
  );
};

export default Intro;
