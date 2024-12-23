import React from "react";

// Example 1: Conditional Welcome Message
function WelcomeMessage({ isLoggedIn }) {
  return <div>{isLoggedIn && <h1>Welcome Back!</h1>}</div>;
}


function Avatar({ imageUrl }) {
  const defImg = "monkey.jpg";
  return <img src={imageUrl || "monkey.jpg"} alt="User Avatar" />;
}


function Avatar1({ imageUrl }) {
  const defImg = "monkey.jpg";
  return (
    <img src={imageUrl ?? "default-avatar.png"} alt="User Avatar" />
  );
}


function App() {
  let imgUrl = undefined;
  // imgUrl =  "rasmika.jpg";
 
  return (
    <div>
      <WelcomeMessage isLoggedIn /> {/*      no need to pass {true} */}
      <WelcomeMessage isLoggedIn={false} />
      <Avatar imageUrl={imgUrl} />
      <Avatar1 imageUrl={imgUrl} />
    </div>
  );
}

export default App;
