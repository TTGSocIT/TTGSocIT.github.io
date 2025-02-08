type Props = {
  imagePath: string;
  altText: string;
};

const CircularImage = ({ imagePath, altText }: Props) => {
  return (
    <div className="relative max-w-[400px] w-full h-auto m-8">
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
