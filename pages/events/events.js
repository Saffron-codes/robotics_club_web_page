import Events from "./events_helper.js";

const loader = document.querySelector(".loader")
const eventsDiv = document.getElementById("events")
const events = new Events();
events.getAll().then((data) => {
    // console.log(data);
    loader.style.display = "none";
    if (data.length > 0) {
        data.forEach((event) => {
            console.log(event.name);

            const eventDiv = document.createElement("div")
            const eventTitle = document.createElement("h3")
            const eventDate = document.createElement("h5");
            const eventDetails = document.createElement("h4")

            const eventTitleRow = document.createElement("div");
            eventDiv.className = "event";
            eventTitle.className = "event__title";
            eventDetails.className = "event__details";
            eventDate.className = "event__date";
            eventTitleRow.className = "event__title__card";

            eventTitle.innerHTML = event.name;
            eventDate.innerHTML = relativeDays(event.date.toDate());
            eventDetails.innerHTML = event.details;

            eventTitleRow.appendChild(eventTitle)
            eventTitleRow.appendChild(eventDate)

            eventDiv.appendChild(eventTitleRow)
            eventDiv.appendChild(eventDetails)


            eventsDiv.appendChild(eventDiv)
        })
    }else{
        alert("Error retreaving events");
    }
})





function relativeDays(timestamp) {
    const rtf = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
    });
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const daysDifference = Math.round(
        (timestamp - new Date().getTime()) / oneDayInMs,
    );

    return rtf.format(daysDifference, 'day');
}