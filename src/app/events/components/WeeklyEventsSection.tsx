const weekly_events = [
    {
        title: "Test",
        description: "DESCRIPTION HERE",
        timeStr: "TIME HERE",
        photoPath: "assets/events_pictures/weekly/temp_event1.webp",
        photoAlt: "A photo of EVENT 1"
    },
    {
        title: "Test2",
        description: "DESCRIPTION HERE",
        timeStr: "TIME HERE",
        photoPath: "assets/events_pictures/weekly/temp_event2.webp",
        photoAlt: "A photo of EVENT 2"
    }
]


export default function WeeklyEventsSection() {
    return (<div className="min-h-screen w-full px-5 relative overflow-hidden flex flex-col items-center justify-center">
            
            <div className="w-full min-h-30  mt-10 bg-cover bg-center bg-fixed bg-opacity-30 py-5 flex flex-col items-center justify-center"  style={{backgroundImage: `url('/hero.webp')`,}}>
                <div className="font-bold text-5xl md:text-7xl text-center">
                    Weekly Events
                </div>
            </div>
            <div className ="mt-5 flex flex-col items-center gap-10">
               { weekly_events.map(({title, description, timeStr, photoPath, photoAlt}, idx) => (
                <div className={`flex ${idx %  2 === 0 ? "flex-row" : "flex-row-reverse"} w-full items-center justify-center gap-5`}>
                    
                    {/* IMAGE  */}
                    <div className="aspect-square rounded-lg overflow-hidden">
                        <img style={{height: "200px"}} src={photoPath} alt={photoAlt} />
                    </div>
                    
                    <div>
                        <h1>{title}</h1>
                        <h2>{timeStr}</h2>
                        <p>{description}</p>
                    </div>
               </div>))}
            </div>
        </div>)
}