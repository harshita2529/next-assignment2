"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser({
      name: "Harshita Saini",
      email: "harshita.saini@tothenew.com",
      bio: "Passionate developer who loves working with frontend frameworks/library.",
      avatarUrl:
        "https://ui-avatars.com/api/?name=Harshita+Saini&background=0070f3&color=fff&format=png",
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Profile</h1>
      <Image
        src={user.avatarUrl}
        alt={user.name}
        width={100}
        height={100}
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>{user.bio}</p>
    </div>
  );
}
