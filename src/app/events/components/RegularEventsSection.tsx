
/**
 * 'Consistent'
 *  All regular events
 * 
 * 'Special'
 * Special event types (anime collab, etc.)
 * O-Week BG Stuff
 * 
 * 'Personal Booking Things'
 */

import ImageScrollTitle from "./ImageScrollTitle"


/**
 * --- DEFINITION OBJECT ---
 * This object here defines how the page gets laid out.
 * Define each listed component here by filling out the hashmap.
 * Each entry = 1 item
 */
const regular_events_hashmap = [
    {
        title: "Weekly Boardgames",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        timeStr: "Every Friday 6pm - 9pm",
        locationStr: "Your Mom's Bedroom",
        photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
        photoAlt: "People playing boardgames at our weekly boardgame events"
    },
    {
        title: "Test2",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        timeStr: "TIME HERE",
        locationStr: "LOCATION HERE",
        photoPath: "assets/events_pictures/regular/temp_event1.webp",
        photoAlt: "A photo of EVENT 2"
    }
]


export default function RegularEventsSection() {
    /**
     * List of our Regular Events We Host
     */

    return (<div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">

            <ImageScrollTitle title={"Regular Events"} imgPath={"/hero.webp"}/>
            

            <div className ="mt-5 flex flex-col items-center gap-20 px-10 md:px-[15dvw]">
               { regular_events_hashmap.map(({title, description, timeStr, locationStr, photoPath, photoAlt}, idx) => (
                <div className={`flex flex-col ${idx %  2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} w-full justify-center gap-5 md:gap-10 md:min-h-64`}>
                    
                    {/* IMAGE  */}
                    <div className="w-full md:w-1/2 md:h-full aspect-video rounded-lg overflow-hidden">
                        <img src={photoPath} alt={photoAlt} />
                    </div>

                    
                    <div className="w-full md:w-1/2 md:h-full text-center md:text-left">
                        <h1 className="font-bold text-4xl text-primary">{title}</h1>
                        <div className="flex flex-row gap-10 mb-3 justify-center md:justify-start">
                            <h2>{timeStr}</h2>
                            <h2>{locationStr}</h2>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>)
}