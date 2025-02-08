/**
 * /events page
 *
 * Lists all the events we host under different sections.
 *
 */

import { Suspense } from "react";
import EventsSection from "./components/EventsSection";

/** ---- EVENTS AS MAPS ---
 * Defines the events as a hashmap to input into the specific EventsSection abstract to fill out the info.
 *
 * Check EventsSection.tsx for specific hashmap type
 *
 * NOTE: What could be good is to add an extra field contianing JSX, in case people want to put custom HTML at the bottom of the description
 *  (ie. like if I wanted to add in a button or something to route somewhere)
 *
 */

// --- REGULAR EVENTS ---
// Our Weekly/Bi-Weekly Events We Run
const regularEventsHashmap = [
    {
        title: "Weekly Boardgames",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        
        // image aspect ratio is 16:9
        photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
        photoAlt: "People playing boardgames at our weekly boardgame events",

        // All fields below this comment are optional. If you leave them blank they're skipped and don't render
        timeStr: "Every Friday 6pm - 9pm",
        locationStr: "Your Mom's Bedroom",
        updatedLast: "3000 years ago",

        // incase you want to add buttons or something below the page to show off stuff. Can probably leave out for now in doing basic styling
        optionalBottomJsx: (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button That Could Go somewhere or something idk
        </button>)
    },
    {
        title: "DND campaign",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        
        photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
        photoAlt: "People playing boardgames at our weekly boardgame events",

        timeStr: "TIME HERE",
        locationStr: "LOCATION HERE", 
    },
    {
        title: "TCG weekly events ",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        
        photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
        photoAlt: "People playing boardgames at our weekly boardgame events",

        timeStr: "TIME HERE",
        locationStr: "LOCATION HERE", 
        updatedLast: ""
    }
]


// --- SPECIAL/IRREGULAR EVENTS --- 
// Irregular events like animesoc colabs n stuff
const specialEventsHashmap = [
  {
    title: "AnimeSoc Collab",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",

    timeStr: "TIME HERE",
    locationStr: "LOCATION HERE",

    photoPath: "assets/events_pictures/regular/temp_event1.webp",
    photoAlt: "A photo of EVENT 2",
  },
];

// --- OTHER ---
// Other
const otherHashmap = [
  {
    title: "Test2",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",

    timeStr: "TIME HERE",
    locationStr: "LOCATION HERE",
    updatedLast: "",

    photoPath: "assets/events_pictures/regular/temp_event1.webp",
    photoAlt: "A photo of EVENT 2",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Events() {
  return (
    <Suspense>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col mb-10 gap-10">
          {regularEventsHashmap.length > 0 && (
            <EventsSection
              title="Regular Events"
              titleImgPath={"/hero.webp"}
              eventslistHashmap={regularEventsHashmap}
            />
          )}
          {specialEventsHashmap.length > 0 && (
            <EventsSection
              title="Special Events"
              titleImgPath={"/hero.webp"}
              eventslistHashmap={specialEventsHashmap}
              startIdx={regularEventsHashmap.length}
            />
          )}
          {otherHashmap.length > 0 && (
            <EventsSection
              title="Other"
              titleImgPath={"/hero.webp"}
              eventslistHashmap={otherHashmap}
              startIdx={
                regularEventsHashmap.length + specialEventsHashmap.length
              }
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
