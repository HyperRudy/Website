import React, { useState } from 'react';
import { Github, Shield, Key, Bug, Image, RotateCcw,CircuitBoard } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Simple Keylogger',
      description: 'Educational keylogger tool for understanding system monitoring and security vulnerabilities in controlled environments.',
      technologies: ['Python', 'System APIs', 'Security Research'],
      status: 'Production',
      link: '#',
      github: 'https://github.com/HyperRudy/Internship-Tasks/blob/main/Keylogger'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Pixel Manipulator',
      description: 'Steganography tool for hiding and extracting data within image files, demonstrating covert communication techniques.',
      technologies: ['Python', 'PIL/Pillow', 'Steganography', 'Image Processing'],
      status: 'Production',
      link: '#',
      github: 'https://github.com/HyperRudy/Internship-Tasks/blob/main/PixelManipulation'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Password Analyzer',
      description: 'Security analysis tool that evaluates password strength, identifies common patterns, and provides security recommendations.',
      technologies: ['Python', 'Cryptography', 'Security Analysis', 'Pattern Recognition'],
      status: 'Production',
      link: '#',
      github: 'https://github.com/HyperRudy/Internship-Tasks/blob/main/PasswordAnalyser'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Caesar Cipher Generator',
      description: 'Classical cryptography implementation featuring encryption and decryption using the Caesar cipher algorithm with customizable shifts.',
      technologies: ['Python', 'Cryptography', 'Algorithm Implementation'],
      status: 'Production',
      link: '#',
      github: 'https://github.com/HyperRudy/Internship-Tasks/blob/main/CaesarCipher'
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'OSINT Intelligence Framework',
      description: 'Comprehensive OSINT gathering tool for reconnaissance and information collection during penetration tests.',
      technologies: ['Python', 'APIs', 'Web Scraping', 'Data Analysis'],
      status: 'In Development',
      link: '#',
      github: 'https://github.com/HyperRudy/CBsec'
    },
   {
  icon: <CircuitBoard className="w-8 h-8" />,
  title: "Raspberry Pi Network Security Lab",
  description:
    "A self-hosted Raspberry Pi–based network security lab implementing Pi-hole DNS filtering, Suricata IDS connected via Evebox for alert monitoring, Fail2Ban intrusion prevention, and Tailscale VPN for secure remote access.",
  technologies: [
    "Pi-hole",
    "Suricata",
    "Fail2Ban",
    "Samba for NAS",
    "Tailscale"
  ],
  status: "In Development",
  link: "#",
  github: "",
  blogPosts: [
    // Replace these placeholder URLs with your actual blog post links
    "https://medium.com/@rudraksh.shende6/setting-up-fail2ban-on-raspberry-pi-d8f27599b218",
    "https://medium.com/@rudraksh.shende6/tailscale-for-pi-in-presence-of-pihole-a3e27f24c363",
    "https://medium.com/@rudraksh.shende6/setting-up-raspberry-pi-as-a-network-gateway-778e9c38cbf9",
    "https://medium.com/@rudraksh.shende6/setting-up-suricata-on-raspberry-pi-ae791700c258",
    "https://medium.com/@rudraksh.shende6/setting-up-pihole-on-your-raspberry-pi-f2882539af62" 
  ]
}
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-400/20 text-green-400 border-green-400/50';
      case 'Beta': return 'bg-blue-400/20 text-blue-400 border-blue-400/50';
      case 'In Development': return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/50';
      case 'Research': return 'bg-purple-400/20 text-purple-400 border-purple-400/50';
      default: return 'bg-gray-400/20 text-gray-400 border-gray-400/50';
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlogList = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };


  return (
    <section id="projects" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of cybersecurity projects demonstrating 
            practical skills in security research, cryptography, and system analysis. All the projects can be found 
            on my github profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-green-400 group-hover:animate-pulse">
                  {project.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
               
              {project.github && (
                <div className="flex">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                </div>
              )}

              {project.blogPosts && project.blogPosts.length > 0 && (
                <div className="mt-4">
                  <button
                    onClick={() => toggleBlogList(index)}
                    className="px-4 py-2 bg-green-400 text-black rounded-md font-semibold hover:brightness-90 transition"
                  >
                    {openIndex === index ? 'Hide Blog Posts' : 'Open Blog Posts'}
                  </button>

                  {openIndex === index && (
                    <div className="mt-3 flex flex-col gap-2">
                      {project.blogPosts.map((url, i) => (
                        <a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:text-white"
                        >
                          {`Blog Post ${i + 1}`}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
              


            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;