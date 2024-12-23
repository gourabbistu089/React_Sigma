import React from 'react'


// If else 
/*
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}*/

// Ternary Operator
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

// Using logical and operator
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

function App() {
 const isLoggedIn=true;
 const unreadMessages = ["Hi this is Gourab", "Welcome to our batch"];
  return (
    <div>
      {/* <Greeting isLoggedIn={isLoggedIn}/> */}
      <Mailbox unreadMessages={unreadMessages}/>
    </div>
  )
}

export default App


// 2nd Part
// App.js
/*
import React, { useState } from 'react';
import Pages from './components/Pages';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
        <button onClick={() => setCurrentPage('nonexistent')}>Nonexistent</button>
      </nav>

      <Pages page={currentPage} />
    </div>
  );
}

export default App;
*/
