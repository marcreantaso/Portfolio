import React from 'react';

export default function Hero() {
  return (
    <section className="text-white bg-gradient-to-r from-primary-600 to-primary-500 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Marc 👋</h1>
        <p className="text-lg mb-6">BSCS Student | Web Developer | Tech Enthusiast</p>
        <a href="#projects" className="inline-block bg-white text-primary-700 px-6 py-2 rounded-full font-semibold">View My Work</a>
      </div>
    </section>
  );
}
