import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
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
            <a href="#" className="text-gray-400 hover:text-emperor-gold">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-emperor-gold">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-emperor-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}