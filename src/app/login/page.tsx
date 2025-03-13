"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  // handle login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    // validate email
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // validate password
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    // send data to the server
    const fd = { email, password };
    console.log(fd);

    // Redirect on successful validation
    router.push("/collections");
  };

  return (
    <div className="h-[40rem] flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 text-center rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Email"
          className="border rounded-lg p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <p className="text-red-500 text-sm text-left mb-2">{emailError}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-red-500 text-sm text-left mb-2">{passwordError}</p>
        )}
        <button className="bg-blue-400 text-white w-full py-2 rounded cursor-pointer hover:bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
