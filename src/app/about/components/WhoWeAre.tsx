import CircularImage from "./CircularImage";

interface Executive {
  role: string;
  name: string;
}

const executives: Executive[] = [
  {
    role: "President",
    name: "John Smith",
  },
  {
    role: "Vice President",
    name: "Smith John",
  },
  {
    role: "Board gamer",
    name: "Skelly",
  },
];

export default function WhoWeAre() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="py-20 px-5 flex flex-col gap-y-1 items-center">
        <h1 className="text-5xl text-black font-bold">Who We Are</h1>
        <h1 className="text-2xl text-gray-500">Executive Team</h1>
        <CircularImage
          imagePath="/hero.webp"
          altText="Picture of Executive team"
        />

        {executives.map((executive) => (
          <div>{`${executive.role}: ${executive.name}`}</div>
        ))}
      </div>
    </div>
  );
}
