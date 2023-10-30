/** @format */
import React, { useState, useEffect } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch user data from GitHub API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className="card">
      <Form setUsername={setUsername} />
      <UserCard userData={userData} />
    </div>
  );
}
