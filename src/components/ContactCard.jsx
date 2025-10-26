import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function ContactCard() {
  const items = [
    { label: 'Email', href: 'mailto:hello@example.com', Icon: Mail },
    { label: 'GitHub', href: 'https://github.com/', Icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com/', Icon: Twitter }
  ];

  return (
    <div className="rounded-2xl p-8 bg-neutral-900/80 border border-white/10 shadow-xl flex flex-col items-center">
      <h3 className="text-white text-xl font-semibold mb-6">Contact</h3>
      <div className="flex md:flex-col gap-6 md:gap-8">
        {items.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative group"
            aria-label={label}
          >
            <span className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            <span className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-110">
              <Icon size={32} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
