/**
 * --- DEFINITION OBJECT ---
 * This object here defines how the page gets laid out.
 * Define each listed component here by filling out the hashmap.
 * Each entry = 1 item
 */

type Props = {
  majorSponsorshipHashmap: SponsorshipMap[];
  minorSponsorshipHashmap: SponsorshipMap[];
  startIdx?: number;
};

type SponsorshipMap = {
  title: string;
  description: string;
  photoPath: string;
  photoAlt: string;
};

export default function SponsorshipSection({ majorSponsorshipHashmap, startIdx }: Props) {
  /**
   * Object that Creates an About Section
   *
   *
   * aboutListHashmap: AboutMap[]
   *  About detials to be rendered
   *
   * startIdx: number (default 0)
   *  Used for formatting.
   *  The index of the list gets used to make the layout alternate to image on l/r, so this allows you to pass in the previous case's length so the alternation continues and doesn't restart.
   */

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      <div className="mt-10 flex flex-col items-center gap-20 px-10 md:px-[15dvw]">
        {majorSponsorshipHashmap.map(
          (
            {
              title,
              description,
              photoPath,
              photoAlt,
            },
            idx
          ) => (
            <div
              key={`event-${idx}`}
              className={`flex flex-col ${
                (idx + (startIdx || 0)) % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } w-full justify-center gap-5 md:gap-10 md:min-h-64`}
            >
              {/* IMAGE  */}
              <div className="w-full md:w-1/2 md:h-full my-auto aspect-video rounded-lg overflow-hidden">
                <img src={photoPath} alt={photoAlt} />
              </div>

              <div className="w-full md:w-1/2 md:h-full text-left">
                <h1 className="font-bold text-4xl text-titleColor text-center md:text-left">
                  {title}
                </h1>
                <p className="mt-3 text-black">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
