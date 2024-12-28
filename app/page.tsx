import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaTwitter, FaGithub, FaGamepad } from 'react-icons/fa';

export default function Home() {
  const sections = [
    {
      header: 'My YouTube Channels',
      links: [
        { name: 'LAP YouTube Channel', url: 'https://youtube.com', icon: <FaYoutube /> },
        { name: 'Arclapain YouTube Channel', url: 'https://youtube.com', icon: <FaYoutube /> },
      ],
    },
    {
      header: 'My Socials',
      links: [
        { name: 'My Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
        { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
        { name: 'GitHub', url: 'https://github.com', icon: <FaGithub /> },
      ],
    },
    {
      header: 'Other Links',
      links: [
        { name: 'Games I’ve Played', url: '#', icon: <FaGamepad /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-xl p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-accent mb-4"></div>
        <h1 className="text-xl font-semibold">Llewellyn Paintsil</h1>
        <p className="text-sm text-gray-400">
          Content Creator and Software Developer
        </p>
      </div>

      {/* Links Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-6 w-full">
          <h2 className="text-center text-lg mb-4">{section.header}</h2>
          {section.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-card text-accent py-3 px-4 rounded-lg mb-2 hover:bg-gray-700 transition"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{link.icon}</span>
                <span>{link.name}</span>
              </div>
              <span className="text-gray-400">⋮</span>
            </a>
          ))}
        </div>
      ))}

      {/* Footer Section */}
      <Link href="https://github.com/Llewellyn500/socialize">
        <button className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">
          Edit your version from GitHub
        </button>
      </Link>
    </div>
  );
}
