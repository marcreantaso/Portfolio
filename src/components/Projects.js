import React from 'react';

const projects = [
  {
    title: 'Task Manager App',
    description: 'A full-stack CRUD application built with React and Laravel. Supports create, read, update, and delete operations.',
    link: '#'
  },
  {
    title: 'Personal Portfolio',
    description: 'This portfolio built with React and Tailwind CSS to showcase skills and projects.',
    link: '#'
  },
  {
    title: 'Mini Chat App',
    description: 'A simple realtime chat prototype using WebSockets (demo).',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.description}</p>
              <a href={p.link} className="text-primary-600 font-medium">View Project →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
