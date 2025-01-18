interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div className="max-w-[270px] w-full mx-auto flex flex-col gap-y-1 text-white">
      <h5 className="font-bold text-lg">{name}</h5>
      <p className="font-semibold">{role}</p>
      <img src={image} alt={name} className="w-full h-auto mt-3" />
    </div>
  );
};

export default TeamCard;
