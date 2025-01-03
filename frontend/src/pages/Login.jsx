import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-32 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? (
        ''
      ) : (
        <input
          required
          type="text"
          placeholder="Name"
          className="px-3 py-2 border-gray-800 w-full border rounded-md"
        />
      )}
      <input
        required
        type="email"
        placeholder="Email"
        className="px-3 py-2 border-gray-800 w-full border rounded-md"
      />
      <input
        required
        type="password"
        placeholder="Password"
        className="px-3 py-2 border-gray-800 w-full border rounded-md"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>{' '}
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="border rounded bg-black font-light py-2 px-8 mt-4 text-white">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
