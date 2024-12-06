import {
  Instagram,
  Youtube,
} from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/millionaire.emperors/' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UC3Sr83uHRAnqCnVCJLQb18Q' },
];

export function Footer() {
  return (
    <footer className="bg-emperor-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400">
            © 2024 Millionaire Emperors. All rights reserved.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="text-gray-400 hover:text-emperor-gold transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="flex gap-8">
            <a href="mailto:millionaireemperors@gmail.com" className="text-gray-400 hover:text-emperor-gold">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
