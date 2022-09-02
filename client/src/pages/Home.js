import React from "react";

function Home() {
  return (
    <main>
      <div className="relative h-70 w-full bg-slate-900 rounded-b-3xl shadow-4xl flex items-center justify-center  mb-12 overflow-hidden">
        <div className="relative z-30 p-16 text-2xl text-white bg-opacity-50 rounded-xl">
          <div className="relative mt-10 px-4 py-12 sm:px-6 sm:py-24 lg:py-25 lg:px-8">
            <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight">
              <span className="block font-italic text-white">Welcome to</span>
              <span className="block text-indigo-200">CCBS</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-2xl">
              Where Education is approached differently.
            </p>
          </div>
        </div>

        <div className="absolute z-10 w-auto min-w-ful min-h-full max-w-none">
          <div className="lottie">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_i32gj28t.json"
              background="transparent"
              speed=".4"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <div className="mt-7 py-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center items-center sm:mt-4">
              
        <div className="flex justify-center items-center">
          
          <a
            href="/register"
            className="justify-center inline-flex items-center px-3 py-2 border border-transparent text-md font-medium rounded-l-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700"
          >
            <span className="text-center text-lg">Sign Up</span>
          </a>
          <a
            href="/login"
            className="justify-center inline-flex items-center px-3 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700"
          >
            <span className="text-center text-lg">Login</span>
          </a>
          
        </div>
        
      </div>
      <p className="mt-40 py-12 max-w-lg mx-auto text-center text-md text-slate-400 sm:max-w-1xl">
        Alright reserved 2022 by SWED INC.
      </p>
    </main>
  );
}

export default Home;
