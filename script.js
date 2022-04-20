const clock = document.getElementById("clock");
const button = document.getElementById("party-time");
const image = document.getElementById("cat-image");
const imageText = document.getElementById("image-text");

// SELECT 
const wakeUpSelect = document.getElementById("wake-up")
const lunchSelect = document.getElementById("lunch");
const napSelect = document.getElementById("nap")

// immediate photo change after select
for (const select of document.getElementsByTagName("select")) {
    select.addEventListener("change", () => {
        checkTime();
    });
}

let partyTime = false;
clock.textContent = `${new Date().toLocaleTimeString('en-US')}!`;
checkTime();

let updateTime = setInterval(() => {
    let date = new Date();
    clock.textContent = `${date.toLocaleTimeString('en-US')}!`;
    checkTime();
}, 1000)

button.addEventListener("click", () => {
    partyTime = !partyTime;
    if (partyTime === true) {
        button.innerText = "PARTY OVER!"
    } else {
        button.innerText = "PARTY TIME!"
    }
    button.classList.toggle("button-blue");

    checkTime();
})

function checkTime() {
    let date = new Date;
    const currentTime = date.getHours();

    if (partyTime) {
        image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        image.alt = "cats partying";
        imageText.innerText = `"LET'S PARTY!"`;
    } else if (currentTime == wakeUpSelect.value) {
        image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        image.alt = "cat jumping on you";
        imageText.innerText = `"WAKE UP!"`;
    } else if (currentTime == lunchSelect.value) {
        image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        image.alt = "cat with intimidating face";
        imageText.innerText = `"LET'S HAVE A LUNCH!"`;
    } else if (currentTime == napSelect.value) {
        image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        image.alt = "cat sleeping with computer mouse";
        imageText.innerText = `"SLEEP TIGHT!"`;
    } else if (currentTime < 12) {
        image.src = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        image.alt = "cat with a bow";
        imageText.innerText = `"GOOD MORNING!"`;
    } else if (currentTime < 18) {
        image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        image.alt = "cat wrapped in paper";
        imageText.innerText = `"GOOD AFTERNOON!"`;
    } else {
        image.src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        image.alt = "cat sleeping on bed";
        imageText.innerText = `"GOOD EVENING!"`;
    }
}