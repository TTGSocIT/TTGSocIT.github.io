import AboutSection from "./components/AboutSection";
import ImageScrollTitle from "./components/ImageScrollTitle";

const aboutHashMap = [
  {
      title: "About UNSW TTGSoc",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      
      // image aspect ratio is 16:9
      photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
      photoAlt: "People playing boardgames at our weekly boardgame events",
  },
  {
      title: "Test2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      
      photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
      photoAlt: "People playing boardgames at our weekly boardgame events",

      timeStr: "TIME HERE",
      locationStr: "LOCATION HERE", 
  },
  {
      title: "Test3",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      
      photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
      photoAlt: "People playing boardgames at our weekly boardgame events",

      timeStr: "TIME HERE",
      locationStr: "LOCATION HERE", 
      updatedLast: ""
  }
]


export default function About() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col mb-10 gap-10">
            <ImageScrollTitle title='About' imgPath="/hero.webp"/>
            {aboutHashMap.length > 0 && <AboutSection aboutListHashmap={aboutHashMap} />}
        </div>
    </div>
  );
}
