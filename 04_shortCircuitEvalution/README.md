# React Conditional Rendering Operators Guide

## Short-Circuit Evaluation (`&&`)

**Definition**: Short-circuit evaluation with `&&` allows you to conditionally render components or values. If the left-hand side is `true`, the right-hand side is evaluated; otherwise, the evaluation stops.

### Example 1: Conditional Welcome Message

```jsx
function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome Back!</h1>}
    </div>
  );
}

export default WelcomeMessage;
```

**Explanation**:
- If `isLoggedIn` is `true`, "Welcome Back!" is displayed.
- If `isLoggedIn` is `false`, nothing is rendered.

### Example 2: Conditional Button Display

```jsx
function AdminPanel({ isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}

export default AdminPanel;
```

**Explanation**:
- If `isAdmin` is `true`, the "Delete User" button is shown.
- If `isAdmin` is `false`, the button is not rendered.

### Example 3: Show Loading Spinner

```jsx
function LoadingIndicator({ isLoading }) {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default LoadingIndicator;
```

**Explanation**:
- If `isLoading` is `true`, a "Loading..." spinner is displayed.
- If `isLoading` is `false`, nothing is shown.

## Logical OR (`||`)

**Definition**: The logical OR (`||`) operator returns the first truthy value it encounters. If the left-hand side is `false` or falsy, it returns the right-hand side.

### Example 1: Default Username

```jsx
function UserProfile({ username }) {
  return (
    <div>
      <h1>Hello, {username || "Guest"}!</h1>
    </div>
  );
}

export default UserProfile;
```

**Explanation**:
- If `username` is falsy (e.g., `null`, `undefined`, `""`, `0`, `false`), "Guest" is displayed.
- If `username` has a truthy value, that value is displayed instead.

### Example 2: Default Avatar Image

```jsx
function Avatar({ imageUrl }) {
  return (
    <img src={imageUrl || "default-avatar.png"} alt="User Avatar" />
  );
}

export default Avatar;
```

**Explanation**:
- If `imageUrl` is falsy (e.g., `null`, `undefined`, `""`), the "default-avatar.png" image is used.
- If `imageUrl` has a truthy value, that value is used as the image source.

### Example 3: Default Email Address

```jsx
function ContactInfo({ email }) {
  return (
    <p>Email: {email || "Not Provided"}</p>
  );
}

export default ContactInfo;
```

**Explanation**:
- If `email` is falsy (e.g., `null`, `undefined`, `""`), "Not Provided" is displayed.
- If `email` has a truthy value, that value is displayed instead.

## Nullish Coalescing (`??`)

**Definition**: Nullish coalescing (`??`) is used to provide a default value only when the left-hand side is `null` or `undefined`. It ignores other falsy values like `""`, `0`, `false`.

### Example 1: Default Username

```jsx
function UserProfile({ username }) {
  return (
    <div>
      <h1>Hello, {username ?? "Guest"}!</h1>
    </div>
  );
}

export default UserProfile;
```

**Explanation**:
- If `username` is `null` or `undefined`, "Guest" is displayed.
- If `username` has a value, that value is displayed instead.

### Example 2: Default Avatar Image

```jsx
function Avatar({ imageUrl }) {
  return (
    <img src={imageUrl ?? "default-avatar.png"} alt="User Avatar" />
  );
}

export default Avatar;
```

**Explanation**:
- If `imageUrl` is `null` or `undefined`, the "default-avatar.png" image is used.
- If `imageUrl` has a value, that value is used as the image source.

### Example 3: Default Bio

```jsx
function UserBio({ bio }) {
  return (
    <p>{bio ?? "No bio available."}</p>
  );
}

export default UserBio;
```

**Explanation**:
- If `bio` is `null` or `undefined`, "No bio available." is displayed.
- If `bio` has a value, that value is displayed instead.