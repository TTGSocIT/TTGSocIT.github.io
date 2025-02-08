type Props = {
  imagePath: string;
  altText: string;
};

const CircularImage = ({ imagePath, altText }: Props) => {
  return (
    <div className="relative w-[20vw] h-[20vw] m-8">
      <div className="absolute inset-0 border-4 border-white rounded-3xl"></div>
      <img
        src={imagePath}
        alt={altText}
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  );
};

export default CircularImage;
