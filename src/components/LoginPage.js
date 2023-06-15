import React, { useContext, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the request body
      const requestBody = {
        email,
        password,
      };

      // Send the login request to the backend
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Check the response status
      if (response.ok) {
        // Login successful
        const data = await response.json();
        console.log(data); // Handle the success response as needed
      } else {
        // Login failed
        const errorData = await response.json();
        console.log(errorData); // Handle the error response as needed
      }
    } catch (error) {
      console.log(error); // Handle any network or server errors
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-20" onSubmit={handleSubmit}>
      <label className="block mb-4">
        Email:
        <input
          className="form-input mt-1 block w-full border p-1 rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="block mb-4">
        Password:
        <input
          className="form-input mt-1 block w-full border p-1 rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
