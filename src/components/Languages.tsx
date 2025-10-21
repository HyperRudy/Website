import React from 'react';
import { Globe, MessageCircle, BookOpen } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    {
      name: 'English',
      level: 'Fluent',
      flag: '🇺🇸',
   
    },
    {
      name: 'Deutsch',
      level: 'Learning (A2-B1)',
      flag: '🇩🇪',
      
    },
    {
      name: 'Hindi',
      level: 'Native',
      flag: '🇮🇳',
   
    },
    {
      name: 'Marathi',
      level: 'Native',
      flag: '🇮🇳',
      
    }
  ];

  return (
    <section id="languages" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-green-400"></span>Languages
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expanding horizons through language learning and cultural exchange.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{language.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{language.name}</h3>
                  <span className="text-green-400 font-mono">{language.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/50 border border-green-400/30 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-12 h-12 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Deutsch Lernen</h3>
          <p className="text-xl text-gray-300 mb-4 font-mono">
            "Lernen Sie deutsch? Komm! Wir können zusammen deutsch lernen und mit einander plaudern!"
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I'm passionate about learning German and would love to connect with fellow German learners 
            or native speakers. Whether you're interested in language exchange, practice conversations, 
            or just want to chat about German culture and cybersecurity in German - let's connect!
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2 text-green-400">
              <Globe className="w-5 h-5" />
              <span className="font-mono">Sprachaustausch</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <BookOpen className="w-5 h-5" />
              <span className="font-mono">Gemeinsam lernen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;