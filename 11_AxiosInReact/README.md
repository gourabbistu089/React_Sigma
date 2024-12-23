# AXIOS 
- Axios is promised based HTTP library that helps you to make http requests in a fluent way.It allow your website or app send or receive data from server , like a fetching information , submitting forms, or updating content without reloading the enitre page.



## Installation

```bash
npm install axios
```

## Usage

```js
import axios from 'axios';

// Promise based request for a simple get request.
axios.get('https://api.github.com/users/mzabriskie')
  .then(response => {
    console.log(response);
  });

// The same request with "Accept: application/json" response type
axios.get('https://api.github.com/users/mzabriskie', {
    headers: { Accept: 'application/json' }
  })
  .then(response => {
    console.log(response);
  });
```

## Documentation

https://github.com/mzabriskie/axios


Why Choose Axios over Fetch API
- Easier syntax and cleaner code
- Automatic JSON transformation 
- Axios is a more modern and flexible alternative to Fetch API.
- Axios has a built-in interceptor system that allows you to easily modify HTTP requests and responses.
- Axios supports cancellation of requests using the AbortController API.
- Axios is built with ES6 Promises and has good support for async/await.

