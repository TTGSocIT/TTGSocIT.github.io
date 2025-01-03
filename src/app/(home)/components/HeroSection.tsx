const HeroSection = () => {
  return (
    <div className="min-h-screen w-full px-5 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="text-white flex flex-col items-center gap-y-5">
        <div className="font-bold text-7xl">TCG@UNSW</div>
        <p>For everyone interested in Boardgames & TCG at UNSW</p>

        <div className="flex gap-x-2">
          <button className="button">Join Us</button>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[10vh]">
        <div className="absolute w-full h-[500%] skew-y-[-10deg] bg-[#303F9F]" />
        <div className="absolute w-full h-[500%] skew-y-[-6deg] bg-[#121212]" />
      </div>
    </div>
  );
};

export default HeroSection;
