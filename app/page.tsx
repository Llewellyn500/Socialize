import React from 'react';

export default function Home() {
  const links = [
    { name: 'LAP YouTube Channel', url: 'https://youtube.com', icon: '📹' },
    { name: 'Arclapain YouTube Channel', url: 'https://youtube.com', icon: '📹' },
    { name: 'My Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'Games I’ve Played', url: '#', icon: '🎮' },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-xl p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-accent mb-4"></div>
        <h1 className="text-xl font-semibold">@llewellynpaint</h1>
        <p className="text-sm text-gray-400">Content creator and Software Developer</p>
      </div>

      {/* Links Section */}
      <div className="mt-6 w-full">
        <h2 className="text-center text-lg mb-4">My YouTube Channels</h2>
        {links.map((link, index) => (
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

      {/* Footer Section */}
      <button className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">
        Join @llewellynpaint on Linktree
      </button>
    </div>
  );
}
