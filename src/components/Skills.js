import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'Git', 'SQL'];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span key={i} className="px-3 py-1 border rounded-full text-sm text-gray-700 bg-white">{s}</span>
        ))}
      </div>
    </section>
  );
}
