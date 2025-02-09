import ValueItem from "@/app/(home)/components/ValueItem";

const ValueSection = () => {
  return (
    <div className="text-black py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-y-16">
        <div className="font-bold text-4xl text-titleColor text-center">{`Our Society's Values`}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24">
          <ValueItem
            title="Welcoming"
            description={`We aim to provide a friendly and inclusive environment for anyone interested in board games, role-playing games, and all things tabletop. Whether you're a seasoned player or brand new to the hobby, our society is a place where you can feel at home. If you have a niche favourite game or want to learn something new, our members are always happy to teach and share their passion.`}
          />
          <ValueItem
            title="Inclusivity"
            description="Inclusivity is at the heart of our society. No matter your background, identity, or experience level (or even if you're not part of UNSW), you're welcome at our events. We believe gaming is for everyone, and we strive to create a space where all players feel valued and respected. Additionally, we have a clear and fair grievance policy to ensure that every member’s voice is heard and concerns are addressed in a timely manner."
          />
          <ValueItem
            title="Consistency"
            description="We’ve been hosting weekly gaming sessions since the dawn of time (or at least as long as we can remember), and we’re not stopping anytime soon! Whether you’re looking for a regular gaming group or just dropping by occasionally, you can count on us to provide a fun and reliable space to play."
          />
          <ValueItem
            title="Community"
            description="Beyond just games, our society is about building friendships and fostering a welcoming community. We host a variety of events, from casual game nights to TCG tournaments and yearlong RPG campaigns. Our events are a great place to learn new games, have fun, and make lasting friendships. No matter your playstyle, there's a place for you here."
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
