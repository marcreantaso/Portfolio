import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700 mb-4">Email: <a href="mailto:marcreantaso@example.com" className="text-primary-600">marcreantaso@example.com</a></p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-primary-600">LinkedIn</a>
          <a href="#" className="text-primary-600">GitHub</a>
        </div>
      </div>
    </section>
  );
}
