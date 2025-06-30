"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    document.cookie = `authToken=demoToken; path=/;`;
    router.push("/dashboard");
  };
  return (
    <div className="container">
      <h1>Login Page</h1>
      <p>Please click the button below to log in:</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
