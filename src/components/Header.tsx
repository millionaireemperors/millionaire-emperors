import { Button } from './Button';

export function Header() {
  return (
    <header className="w-full bg-emperor-black/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="font-heading text-2xl text-emperor-white">
          Millionaire Emperors
        </h1>
        <a href="https://millionaireemperors.gumroad.com/l/digitalempire" target="_blank" rel="noopener noreferrer">
          <Button glowing>Claim Your Digital Empire Now</Button>
        </a>
      </div>
    </header>
  );
}
