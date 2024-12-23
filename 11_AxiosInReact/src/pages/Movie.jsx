import React, { useEffect, useState } from 'react';
import './GitHubCard.css';
import { FaBook, FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { getData } from '../services/getServices';



function GithubCard() {
  const [data, setData] = useState(null);

  const getUserData = async () => {
    try {
      const response =  await getData(); 
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="github-card">
      <div className="card-content">
        <img
          className="avatar"
          src={data.avatar_url}
          alt={`Avatar of ${data.name}`}
        />
        <h2 className="name">{data.name}</h2>
        <p className="bio">{data.bio}</p>
        <div className="stats">
          <span>
            <FaBook /> {data.public_repos} Repositories
          </span>
          <span>
            <FaUserFriends /> {data.followers} Followers
          </span>
          <span>
            <FaUserPlus /> {data.following} Following
          </span>
        </div>
        <a
          className="github-link"
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default GithubCard;
