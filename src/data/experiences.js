// Centralized experiences data
export const experiences = [
  {
    id: 'future-role',
    company: 'Your Company Next?',
    role: 'Future Technical Artist',
    period: 'Present - ?',
    location: '',
    bullets: ["I'd love to work with you!"],
    color: 'gray'
  },
  {
    id: 'ea-2025',
    company: 'Electronic Arts (EA)',
    role: 'Technical Artist Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Remote / Burnaby, BC',
    bullets: [
      'Developed Houdini plugins and tools using Python to support advanced content creation workflows',
      'Created procedural systems for generating and texturing 3D architectural elements using VEX',
      'Implemented an AI-based solution to automate parameter estimation for procedural tools from visual references'
    ],
    color: 'orange',
    tech: [
      { name: 'Houdini', image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Houdini3D_icon.png' },
      { name: 'Python', image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png' },
      { name: 'Maya', image: 'https://img.icons8.com/color/1600/autodesk-maya.png' }
    ]
  }
];

export default experiences;
