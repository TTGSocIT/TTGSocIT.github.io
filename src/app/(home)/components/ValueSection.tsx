import ValueItem from "@/app/(home)/components/ValueItem";

const ValueSection = () => {
  return (
    <div className="text-black py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-y-16">
        <div className="font-bold text-4xl text-titleColor text-center">{`Our Society's Values`}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24">
          <ValueItem
            title="Welcome"
            description={`We aim to give people a welcoming environment to play any sort of
            board game or role playing games. Our society is a place where
            everyone feels at home. If you have any specific niche or are
            completely new to the genre we have people that are willing to teach
            you the games and get you familiar with it.`}
          />
          <ValueItem
            title="Inclusivity"
            description="Inclusiveness is a value that we hold dearly. Regardless of
            background, identity, or experience level or even if you attend the
            uni we want everyone to have a fun time at our events. Furthermore,
            we have a robust grievance policy structure that ensures that if you
            have any complaint that your voice will be heard."
          />
          <ValueItem
            title="Consistency"
            description="We’ve been holding weekly gaming sessions since the dawn of time (or
            whenever the uni permits us), we will continue to do this until UNSW
            collapses. This consistency allows us to build up a community
            over time, campaigns to thrive, and players to focus on having fun
            without worry. Even if you can only come once in a while there will
            be friendly faces ready for you whenever you are free to swing by."
          />
          <ValueItem
            title="Community"
            description="We value community and the forming of them, being a multi faceted
            society, enhancing the community and the comradery is vital for any
            society to survive"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
