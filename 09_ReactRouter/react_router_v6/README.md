
# Comprehensive Guide on Using React Router in a React Application

## Step 1: Install React Router
First, you need to install React Router in your project. You can do this by running the following command in your terminal:

```bash
npm install react-router-dom
```

## Step 2: Create Multiple Pages
Next, create different pages for your application. For example, you might have Home, About, Contact, and NoPage (for handling 404 errors) pages.

### Example:

**`src/pages/Home.jsx`**

```jsx
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
```

**`src/pages/About.jsx`**

```jsx
import React from 'react';

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    );
}

export default About;
```

**`src/pages/Contact.jsx`**

```jsx
import React from 'react';

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    );
}

export default Contact;
```

**`src/pages/NoPage.jsx`**

```jsx
import React from 'react';

function NoPage() {
    return (
        <div>
            <h1>This page does not exist</h1>
        </div>
    );
}

export default NoPage;
```

## Step 3: Define Routes in `App.jsx`
Now, use React Router to define routes in your main `App.jsx` file.

### Example:

```jsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

## Step 4: Create a Navbar Component
Create a `Navbar.jsx` component to navigate between the different pages.

### Example:

```jsx
import React from 'react';

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
```

### CSS for Navbar:

```css
* {
    margin: 0;
    padding: 0;
}

.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(0, 78, 78);
}

.logo_text {
    color: white;
}

ul {
    display: flex;
    gap: 20px;
    color: white;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: wheat;
}
```

## Step 5: Import Navbar in `App.jsx`
Add the `Navbar.jsx` component to your `App.jsx` file.

```jsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

## Step 6: Use `Link` for Navigation
Update the `Navbar.jsx` to use `Link` from `react-router-dom` for navigation.

```jsx
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
```

## Step 7: Navigate Programmatically with `useNavigate` Hook
Use the `useNavigate` hook to navigate programmatically.

### Example in `Home.jsx`:

```jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </>
  );
};

export default Home;
```

### Example in `About.jsx`:

```jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

export default About;
```

## Step 8: Use `useParams` Hook to Access Route Parameters
Use the `useParams` hook to access dynamic URL parameters.

### Example in `Blog.jsx`:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  return (
    <div>Blog Id: {id}</div>
  );
}

export default Blog;
```

### Add Blog Route in `App.jsx`:

```jsx
<Route path="/blog/:id" element={<Blog />} />
```

## Conclusion
This guide covers the basics of setting up React Router in your application, creating multiple pages, navigating between them, and using dynamic routing with URL parameters. This should help you build more complex routing structures in your React applications.
