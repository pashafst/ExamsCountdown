function addCountdown(fach, termin) {
    let myFach = document.createElement('div');
    myFach.className = "fach";
    myFach.innerHTML = `<h3>${fach}</h3><p id="${fach}"></p>`;

    document.body.append(myFach);
    timedown(termin, fach);
}

function timedown(ti,id){
    // Set the date we're counting down to
    var countDownDate = new Date(ti).getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById(id).innerHTML = (days!=0 ? days + "d " : '') + (hours!= 0 ? hours + "h " : '')
        + (minutes != 0 ? minutes + "m " : '') + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "EXPIRED";
        }
    }, 1000);
    }

const KLAUSUR = 0;
const TERMIN = 1;

let data = [
    ["Künstliche Intelligenz II","February 8, 2022 11:00:00"],
    ["ASIP","March 4, 2022 15:00:00"],
    ["Grundlagen der IT-Sicherheit","March 12, 2022 09:00:00"],
    ["Multi-Agenten Interaktionen und Spiele","April 4, 2022 08:00:00"],
]

function getKlausur(datas) {
    for(let i=0;i<datas.length; i++) {
        let klausur = datas[i][KLAUSUR];
        let termin = datas[i][TERMIN];

        addCountdown(klausur, termin);
    }
}

getKlausur(data);
