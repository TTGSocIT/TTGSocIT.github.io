import TeamCard from "@/app/(home)/components/TeamCard";

const TeamSection = () => {
  return (
    <div className="bg-black py-20 px-5 flex flex-col gap-y-14 items-center">
      <h1 className="text-5xl text-white font-bold">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10">
        <TeamCard name="Kevin Zhe" role="President" image="/hero.webp" />
        <TeamCard
          name="Ahmad Farhan Bin Ahmad Faiz"
          role="Vice President"
          image="/hero.webp"
        />
        <TeamCard name="Chalene Kuklin" role="Secretary" image="/hero.webp" />
        <TeamCard name="Henry Lam" role="Treasurer" image="/hero.webp" />
        <TeamCard name="Cassie Eliot" role="Arc Delegate" image="/hero.webp" />
        <TeamCard name="Alexander Paou" role="Media Exec" image="/hero.webp" />
      </div>
    </div>
  );
};

export default TeamSection;
