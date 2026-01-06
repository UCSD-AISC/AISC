import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-20 py-10 text-white flex flex-col md:flex-row justify-between items-center">
      {/* Left side text */}
      <p className="text-sm mb-4 md:mb-0">AISC © 2025</p>

      {/* Social icons */}
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/aiscsandiego/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScHfxpdkvfPfUq4ENalf7CNPQ2gGlAJ147BQsZ_DAZZgVO1Mw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/vector.png" alt="Medium" width={24} height={24} />
        </Link>
        <Link
          href="https://discord.gg/Knsq3Cau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/discord.png"
            alt="Discord"
            width={24}
            height={24}
          />
        </Link>
        <Link href="mailto:contact@aisc.com">
          <Image src="/icons/mail.png" alt="Email" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
