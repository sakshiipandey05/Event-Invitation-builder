const card = document.getElementById("card");
const eventType = document.getElementById("eventType");
const fontStyle = document.getElementById("fontStyle");

const cTitle = document.getElementById("cTitle");
const cName = document.getElementById("cName");
const cHost = document.getElementById("cHost");
const cDate = document.getElementById("cDate");
const cTime = document.getElementById("cTime");
const cVenue = document.getElementById("cVenue");

const bgText = document.getElementById("bgText");
const emoji = document.getElementById("emoji");

function updateText() {
    cName.innerText = document.getElementById("eventName").value || "Your Event";
    cHost.innerText = document.getElementById("hostName").value || "Name";
    cDate.innerText = document.getElementById("eventDate").value || "--";
    cTime.innerText = document.getElementById("eventTime").value || "--";
    cVenue.innerText = document.getElementById("venue").value || "Venue";
}

function updateEvent() {
    const type = eventType.value;
    card.className = "card " + type;

    if(type === "birthday"){
        cTitle.innerText = "Birthday Party";
        bgText.innerText = "HAPPY BIRTHDAY";
        emoji.innerText = "🎂🎈";
    }
    if(type === "farewell"){
        cTitle.innerText = "Farewell";
        bgText.innerText = "BEST WISHES";
        emoji.innerText = "🎓🌸";
    }
    if(type === "anniversary"){
        cTitle.innerText = "Anniversary";
        bgText.innerText = "LOVE & TOGETHER";
        emoji.innerText = "💍❤️";
    }
    if(type === "getTogether"){
        cTitle.innerText = "Get Together";
        bgText.innerText = "CHEERS";
        emoji.innerText = "🥳🍹";
    }
    if(type === "meeting"){
        cTitle.innerText = "Professional Meeting";
        bgText.innerText = "MEETING";
        emoji.innerText = "📋💼";
    }
}

function changeFont(){
    card.style.fontFamily = fontStyle.value;
}

function downloadCard() {
    // Clone the card element
    const clone = card.cloneNode(true);

    // Create new window for printing
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print Card</title>');

    // Copy styles from original document
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
    styles.forEach(style => {
        printWindow.document.write(style.outerHTML);
    });

    printWindow.document.write('</head><body style="margin:0; display:flex; justify-content:center; align-items:center;">');

    // Append cloned card
    printWindow.document.body.appendChild(clone);

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}
