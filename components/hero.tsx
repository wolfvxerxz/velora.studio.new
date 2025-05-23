import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="images/1.avif" alt="Profile" width={400} height={400} className="rounded-lg shadow-xl" />
    </div>
  );
};

export default Hero; 