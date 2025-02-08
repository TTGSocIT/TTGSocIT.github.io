import CircularImage from "./CircularImage";

interface Executive {
  role: string;
  name: string;
}

const executives: Executive[] = [
  {
    role: "President",
    name: "Kevin Zhe",
  },
  {
    role: "Vice President",
    name: "Ahmad Farhan Bin Ahmad Faiz",
  },
  {
    role: "Secretary",
    name: "Chalene Kuklin",
  },
  {
    role: "Arc Delegate",
    name: "Cassie Eliot",
  },
  {
    role: "Treasurer",
    name: "Henry Lam",
  },
  {
    role: "Media Executive",
    name: "Alexander Paou",
  },
];

export default function WhoWeAre() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="py-20 px-5 flex flex-col gap-y-1 items-center">
        <h1 className="text-5xl font-bold">Who We Are</h1>
        <h1 className="text-2xl text-subTitleColor">Executive Team</h1>
        <CircularImage
          imagePath="/team.webp"
          altText="Picture of Executive team"
        />

        {executives.map((executive) => (
          <div
            key={executive.name}
            className="text-center"
          >{`${executive.role}: ${executive.name}`}</div>
        ))}
      </div>
    </div>
  );
}
