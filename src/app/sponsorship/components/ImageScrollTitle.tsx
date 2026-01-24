type InputType = {
  title: string;
  imgPath: string;
}


export default function ImageScrollTitle({title, imgPath}: InputType) {
  /**
   * A title card for sections that has a scrolling image background
   */

  return (
      <div className="relative w-full min-h-64 mt-16 bg-cover bg-center bg-fixed flex flex-col items-center justify-center"  style={{backgroundImage: `url('${imgPath}')`,}}> {/* TODO: ADD A DARKEN FILTER TO BG IMAGE */}
          <div className="text-white font-bold text-5xl md:text-7xl text-center z-20">
              {title}
          </div>
          <div className="absolute bg-black/70 w-full h-full"></div>
      </div>
  );
}

