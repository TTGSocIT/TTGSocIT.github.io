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
    description:
      "TTGSoc offers a wide variety of board games suited to all skill levels. Whether you’re after a quick and casual game of Exploding Kittens or looking for something more complex like Root, we definitely have the board game for you, and enthusiastic players to boot. Come on down to our weekly Friday casual board games session to see what we have on offer, and even make some new friends!",

    // image aspect ratio is 16:9
    photoPath: "/Friday_Boardgames.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",

    // All fields below this comment are optional. If you leave them blank they're skipped and don't render
    timeStr: "Every Friday 4pm - 8pm",
    locationStr: "Webster 250, 251",
    updatedLast: "8th of February 2025",

    // incase you want to add buttons or something below the page to show off stuff. Can probably leave out for now in doing basic styling
    optionalBottomJsx: (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
        Button That Could Go somewhere or something idk
        
      </button>
    ),
  },
  {
    title: "DND campaign",
    description:
      "Dungeons and Dragons is one of the most well known TTRPGs out there, with plenty of people wanting to play but not having the means to do so. We aim to make D&D accessible to newbies (or even players having a hard time finding people to play with) with our society campaign! Don’t know the rules? We have plenty of Dungeon Masters (DMs) and players to teach you! Don’t know how to make a character? We have the resources and people to make this part easy peasy. Your schedule too busy to commit properly? None of them are mandatory, which means that you can play as much as you like, whenever you like! Joined too late? No such thing in THIS campaign! You can join anytime you want, and you’ll still be able to play in a session without too much trouble. ",

    photoPath: "/lost_lands_dnd.webp",
    photoAlt: "People playing a D&D session at our fortnightly campaign events",

    timeStr: "Fortnightly on Sundays 12-4pm",
    locationStr: "Goldstein G02, G03, G07",
    updatedLast: "8th of February 2025",

  },
  {
    title: "TCG weekly events ",
    description:
      "Are you a master duelist, Ppokémon trainer, planeswalker and/or digidestined? If you answered yes \or no to any of these questions, there is a place for you among our TCG players. Participate in weekly tournaments, enjoy discounts and learn to play new card games with a community of welcoming players.",

    photoPath: "YGO_cards.webp",
    photoAlt: "A collection of Trading cards",

    timeStr: "Every Friday 4pm - 8pm",
    locationStr: "Webster 250, 251",
    updatedLast: "8th of February 2025",
  },
];

// --- SPECIAL/IRREGULAR EVENTS ---
// Irregular events like animesoc colabs n stuff
const specialEventsHashmap = [
  {
    title: "AnimeSoc Collab",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",

   // timeStr: "TIME HERE",
    //locationStr: "LOCATION HERE",

    photoPath: "/maid_cafe.webp",
    photoAlt: "A photo of a collabaration with anime socicety ",
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
