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
    title: "Weekly Board Games",
    description:
      "TTGSoc has a huge selection of board games for players of all skill levels! Whether you're up for a quick and casual round of Exploding Kittens or a deep, strategic battle in Root, we've got something for you, and plenty of enthusiastic players to join in. Drop by our weekly sessions to explore new games, challenge your friends, and meet like-minded people. LOCATION SCHEDULE: Thursday sessions run in Morven Brown G06 (Wk 1-7), AGSM 107 (Wk 8-9), and Quad 1042 (Wk 10). Friday sessions are in the Mathews Building: Rooms 104 & 103 (Wk 1-2, 4-5, 8, 10); Rooms 310, 311, & 303 (Wk 3, 6); and Rooms 311 & 303 (Wk 7, 9).",

    // image aspect ratio is 16:9
    photoPath: "/Friday_Boardgames.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",

    timeStr: "Thursdays & Fridays 4pm - 9pm",
    locationStr: "Various (Check description for weekly rooms)",
    updatedLast: "27th of May 2026",

    // incase you want to add buttons or something below the page to show off stuff. Can probably leave out for now in doing basic styling
   // optionalBottomJsx: (
     // <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
       // Button That Could Go somewhere or something idk
     // </button>
   // ),
  },
  {
    title: "Weekly RPG",
    description:
      "Looking to explore tabletop roleplaying beyond traditional D&D? Join us for our Weekly RPG sessions! We alternate our Sunday slot with the D&D Campaign",

    photoPath: "/lost_lands_dnd.webp", // Reusing the DND campaign image
    photoAlt: "People playing a tabletop RPG session",

    timeStr: "Alternating Sundays 12pm - 6pm",
    locationStr: "Goldstein G02, G03, G04, G05",
    updatedLast: "27th of May 2026",
  },
  {
    title: "DND Campaign",
    description:
      "Dungeons & Dragons is one of the most well-known tabletop RPGs, but finding a group to play with isn’t always easy. That’s where we come in! Our society campaign is designed to make D&D accessible to everyone—whether you’re a complete newbie or an experienced player struggling to find a consistent group. No clue how to play? Our friendly Dungeon Masters (DMs) and experienced players are happy to teach you. Not sure how to create a character? We’ve got the resources and guidance to make it a breeze. Worried about commitment? Sessions are completely drop-in, so you can play whenever your schedule allows. Come roll some dice, tell epic stories, and embark on unforgettable adventures with us! ",

    photoPath: "/lost_lands_dnd.webp",
    photoAlt: "People playing a D&D session at our fortnightly campaign events",

    timeStr: "Alternating Sundays 12pm - 6pm",
    locationStr: "Goldstein G02, G03, G04, G05 ",
    updatedLast: "27th of May 2026",
  },
  {
    title: "TCG Weekly Events ",
    description:
      "Are you a Master Duelist, Pokémon trainer, Planeswalker, or DigiDestined? If you answered yes,  or even no - there’s a place for you in our TCG community! Join us for weekly tournaments, exclusive member discounts, and the chance to learn new card games in a fun and welcoming environment. Whether you're a seasoned pro or just starting out, you'll find plenty of friendly players ready to trade, battle, and share their love for TCGs!",

    photoPath: "tcg2.webp",
    photoAlt: "A collection of Trading cards",

    timeStr: "Fridays 4pm - 9pm",
    locationStr: "Mathews Building (Shared with Friday Board Games)",
    updatedLast: "27th of May 2026",
  },
];

// --- SPECIAL/IRREGULAR EVENTS ---
// Irregular events like animesoc colabs n stuff
const specialEventsHashmap = [
  {
    title: "Collaborations",
    description:
      "Promoting the joy of tabletop games to more people has always been a core value of our society. As such, many of our large-scale events are hosted in collaboration with other UNSW societies. In 2024, some of our most successful events are organised with AnimeUNSW, EduSoc, QuantSoc and more! These events usually add a fun twist to our strategy games, such as cosplay, food, and trivia. Check out photos from some of our past events on our socials!",

    // timeStr: "TIME HERE",
    //locationStr: "LOCATION HERE",

    photoPath: "/maid_cafe.webp",
    photoAlt: "A photo of a collabaration with a anime socicety ",
  },
  {
    title: "TCG Competitions",
    description:
      "Not only is our society a platform for trading card gamers to collect, trade and play, we also run frequent TCG events that are catered to all players. From tournaments, to drafting, and to casual formats, our dedicated team of TCG enthusiasts creates fun and unique events for all to enjoy. Some of our most popular titles include Magic the Gathering, Yu-Gi-Oh, and Vanguard. However, no matter how niche your game of choice may be, you are more than likely to find like-minded individuals in our discord server.",

    // timeStr: "TIME HERE",
    //locationStr: "LOCATION HERE",

    photoPath: "/comp.webp",
    photoAlt: "A photo of yu-gi-oh cards ",
  },
];

// --- OTHER ---
// Other
// const otherHashmap = [
//   {
//     title: "Test2",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",

//     timeStr: "TIME HERE",
//     locationStr: "LOCATION HERE",
//     updatedLast: "",

//     photoPath: "assets/events_pictures/regular/temp_event1.webp",
//     photoAlt: "A photo of EVENT 2",
//   },
// ];

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
          {/* {otherHashmap.length > 0 && (
            <EventsSection
              title="Other"
              titleImgPath={"/hero.webp"}
              eventslistHashmap={otherHashmap}
              startIdx={
                regularEventsHashmap.length + specialEventsHashmap.length
              }
            />
          )} */}
        </div>
      </div>
    </Suspense>
  );
}
