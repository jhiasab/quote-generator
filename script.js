const quoteText = document.querySelector(".quote"),
      authorName = document.querySelector(".name"),
      quoteBtn = document.querySelector("button"),
      soundBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy"),
      turnSound = document.getElementById("turn-sound");

let lastIndex = -1;


soundBtn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    const textToCopy = `${quoteText.innerText} - ${authorName.innerText}`;
    navigator.clipboard.writeText(textToCopy)
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});

// Array of quotes
const quotes = [
    { text: "truth didn't mean anything without someone to share it with; you could shout truth into the air forever, and spend your life doing it, if someone didn't come and listen.", author: "Naomi Novik, Uprooted" },
    { text: "We're meant to go. We're not meant to stay forever.", author: "Naomi Novik, Uprooted" },
    { text: "But she hadn't been able to take root. She'd remembered the wrong things, and forgotten too much. She'd remembered how to kill and how to hate, and she'd forgotten how to grow.", author: "Naomi Novik, Uprooted" },
    { text: "and if I can't do any good, I can at least do something", author: "Naomi Novik, Uprooted" },
    { text: "But the world I wanted wasn't the world I lived in, and if I would do nothing until I could repair every terrible thing at once, I would do nothing forever.", author: "Naomi Novik, Spinning Silver" },
    { text: "A robber who steals a knife and cuts himself cannot cry out against the woman who kept it sharp.", author: "Naomi Novik, Spinning Silver" },
    { text: "She was safe for another moment, one more moment, and all of life was only moments, after all.", author: "Naomi Novik, Spinning Silver" },
    { text: "That is all we can do for each other in the world, to keep the wolf away.", author: "Naomi Novik, Spinning Silver" },
    { text: "I love having existential crises at bedtime, it's so restful.", author: "Naomi Novik, A Deadly Education" },
    { text: "Was I starting to feel evil? Yes, now I was worrying I'd be turned to the dark side by too much crochet.", author: "Naomi Novik, A Deadly Education" },
    { text: "My anger's a bad guest, my mother likes to say: comes without warning and stays a long time.", author: "Naomi Novik, A Deadly Education" },
    { text: "Oh, how I'd enjoyed all that sweet crisp righteous anger, my favorite drug: I'd nearly ridden the high straight into murder.", author: "Naomi Novik, A Deadly Education" },
    { text: "“I'm sorry,” I said, feeling stupid in the way I'm sorry always feels stupid when you mean it.", author: "Naomi Novik, The Last Graduate" },
    { text: "Also I hadn't lost an ounce of the passionate desire to beat him over the head with a large stick, and surely that was a sign of true love.", author: "Naomi Novik, The Golden Enclaves" },
    { text: "It was exactly what I wanted, only once I was in it, I didn't want it after all.", author: "Naomi Novik, The Golden Enclaves" },
    { text: "But in a solitary life, there are rare moments when another soul dips near yours, as stars once a year brush the earth. Such a constellation was he to me.", author: "Madeline Miller, Circe" },
    { text: "He showed me his scars, and in return he let me pretend that I had none.", author: "Madeline Miller, Circe" },
    { text: "I thought once that gods are the opposite of death, but I see now they are more dead than anything, for they are unchanging, and can hold nothing in their hands.", author: "Madeline Miller, Circe" },
    { text: "You threw me to the crows, but it turns out I prefer them to you.", author: "Madeline Miller, Circe" },
    { text: "The thought was this: that all my life had been murk and depths, but I was not a part of that dark water. I was a creature within it.", author: "Madeline Miller, Circe" },
    { text: "A golden cage is still a cage.", author: "Madeline Miller, Circe" },
    { text: "I did not come this far to only come this far.", author: "Krystal Sutherland, The Invocations" },
    { text: "Men think she looks like prey. They do not know she is bait.", author: "Krystal Sutherland, The Invocations" },
    { text: "He's a slip of shadow, nothing more. No face, no weapon, nothing to indicate that he might do her harm. Just a man. But she is a girl. And she is alone. And it is night. And that is enough.", author: "Krystal Sutherland, The Invocations" },
    { text: "There is no sense to it. That you can be going about your life, minding your own goddamn business, and suddenly become prey.", author: "Krystal Sutherland, The Invocations" },
];

// Random quote function
function randomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);  // Generate a random index
    } while (randomIndex === lastIndex); // Ensure it's not the same as the last index

    const randomQuote = quotes[randomIndex];
    quoteText.innerText = randomQuote.text;
    authorName.innerText = randomQuote.author;
    lastIndex = randomIndex; // Update the last index

    turnSound.play();
}

quoteBtn.addEventListener("click", randomQuote);
