// =====================================================
// PERSONAL SETTINGS
// =====================================================

// Change these two values

const FRIEND_NAME = "Nani";

const FAVORITE_NAME = "Mammuu";


// Selected favorite name

let selectedFavorite = "";



// =====================================================
// FIRST LOGIN
// =====================================================

function firstLogin() {

    const entered =
        document
            .getElementById("friendName")
            .value
            .trim();


    if (
        entered.toLowerCase() ===
        FRIEND_NAME.toLowerCase()
    ) {

        document
            .getElementById("loginPage")
            .classList.remove("active");


        document
            .getElementById("secretPage")
            .classList.add("active");

    }

    else {

        document
            .getElementById("loginError")
            .textContent =
            "Hmm... this little website is only for my best friend 💕";

    }

}



// =====================================================
// SELECT FAVORITE NAME
// =====================================================

function selectFavorite(button, name) {

    document
        .querySelectorAll(".name-option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    button.classList.add("selected");


    selectedFavorite = name;


    document
        .getElementById("favoriteNext")
        .disabled = false;

}



// =====================================================
// SECOND LOGIN
// =====================================================

function secondLogin() {

    if (selectedFavorite === "") {

        document
            .getElementById("secretError")
            .textContent =
            "Choose one first 💗";

        return;

    }


    if (
        selectedFavorite.toLowerCase() ===
        FAVORITE_NAME.toLowerCase()
    ) {

        document
            .getElementById("secretPage")
            .classList.remove("active");


        document
            .getElementById("mainPage")
            .classList.add("active");


        showSection("home");

    }

    else {

        document
            .getElementById("secretError")
            .textContent =
            "Hmm... that's not my favourite name 😌 Try again!";

    }

}



// =====================================================
// NAVIGATION
// =====================================================

function showSection(sectionId) {

    document
        .querySelectorAll(".content-section")
        .forEach(section => {

            section.classList.remove(
                "active-section"
            );

        });


    document
        .getElementById(sectionId)
        .classList.add(
            "active-section"
        );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    // Reset quiz when entering quiz for the first time

    if (sectionId === "quiz") {

        resetQuiz();

    }

}



// =====================================================
// LETTERS
// =====================================================

const letters = {


    1: {

        title:
            "Letter One — How It All Began 💕",

        text: `

            <p>
                Dear bestie,
            </p>

            <p>
                Sometimes I think about how our
                friendship started and how it slowly
                became such an important part of
                my life.
            </p>

            <p>
                We just started with a random conversations in chatting 
                for game , that talks slowly turned into daily chat person
            </p>

            <p>
                Thank you for becoming one of the
                people who makes ordinary days
                feel special.
            </p>

            <p>
                Always your best friend ♡
            </p>

        `

    },


    2: {

        title:
            "Letter Two — Things I Don't Say Enough 💗",

        text: `

            <p>
                Hey you,
            </p>

            <p>
                I probably don't say this enough,
                but I genuinely appreciate you.
            </p>

            <p>
                Thank you for listening to my
                nonsense, laughing at my stupid
                jokes and being there through
                all the random moments ,I never that we would become this close
                I craved for this kind of frinedship and i genuinely found
                Even though i make u angry everytime you are being patient, the care u do 
                very much high.
            </p>

            <p>
                You mean more to me than I can
                explain in one little letter.
            </p>

            <p>
                Thank you for being you. ♡
            </p>

        `

    },


    3: {

        title:
            "Letter Three — Our Crazy Memories 😂",

        text: `

            <p>
                To my favorite troublemaker,
            </p>

            <p>
                If someone ever asked me about
                our friendship, I don't think I
                could explain it without laughing.
            </p>

            <p>
                We have so many silly moments,
                inside jokes and completely
                random memories, What i say is I would definetly say about our fights
                we know they are silly even though we took that seriously , i think we cant even count
                them.I always remembers those silly fights.
            </p>

            <p>
                I hope we keep collecting
                ridiculous memories for many,
                many years.
            </p>

            <p>
                More craziness coming soon. 😂💕
            </p>

        `

    },


    4: {

        title:
            "Letter Four — For The Difficult Days 🌙",

        text: `

            <p>
                Hey bestie,
            </p>

            <p>
                If you're reading this on a bad day,
                remember that you don't have to
                have everything figured out.
            </p>

            <p>
                Take a breath.
                Rest.
                Start again tomorrow.
            </p>

            <p>
                And whenever you feel alone,
                remember that i am always there to listen
                no matter the place or situation , if its u i will be there,
                You are trying hard , learning , growing , so be brave and do hardwork , U will 
                achieve all u prayed for.
                I am always proud of u.
            </p>

            <p>
                You've got this. ♡
            </p>

        `

    },


    5: {

        title:
            "Letter Five — One Last Thing 💌",

        text: `

            <p>
                Dear best friend,
            </p>

            <p>
                If I could keep only one thing
                from all our memories, I honestly
                don't think I could choose just one.
            </p>

            <p>
                Every laugh, every conversation
                and every little moment is part
                of our story.
            </p>

            <p>
                Wherever life takes us, I hope
                we never become strangers.
            </p>

            <p>
                I hope we always have a little
                corner of our lives reserved
                for this friendship.
            </p>

            <p>
                Thank you for being one of my
                favorite people in the world.
            </p>

            <p>
                Forever your bestie. 💕
            </p>

        `

    }

};



// =====================================================
// OPEN LETTER
// =====================================================

function openLetter(number) {

    const letter =
        letters[number];


    document
        .getElementById("letterContent")
        .innerHTML =

        `<h2>${letter.title}</h2>
         ${letter.text}`;


    document
        .getElementById("letterModal")
        .classList.add("show");

}



// =====================================================
// CLOSE LETTER
// =====================================================

function closeLetter() {

    document
        .getElementById("letterModal")
        .classList.remove("show");

}



// =====================================================
// CLOSE LETTER BY CLICKING OUTSIDE
// =====================================================

document
    .getElementById("letterModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeLetter();

            }

        }
    );



// =====================================================
// LETTERS → MEMORIES
// =====================================================

function goToMemories() {

    showSection("memories");

}



// =====================================================
// QUIZ VARIABLES
// =====================================================

let score = 0;

let currentQuestion = 1;

const totalQuestions = 6;



// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion(questionNumber) {

    const answer =
        document.querySelector(
            `input[name="q${questionNumber}"]:checked`
        );


    if (!answer) {

        alert(
            "Choose an answer first 💕"
        );

        return;

    }


    // Count answer only once

    if (
        answer.value === "correct" &&
        !answer.dataset.counted
    ) {

        score++;

        answer.dataset.counted = "true";

    }


    document
        .getElementById(
            `question${questionNumber}`
        )
        .classList.remove(
            "active-question"
        );


    currentQuestion =
        questionNumber + 1;


    document
        .getElementById(
            `question${currentQuestion}`
        )
        .classList.add(
            "active-question"
        );

}



// =====================================================
// PREVIOUS QUESTION
// =====================================================

function previousQuestion(questionNumber) {

    document
        .getElementById(
            `question${questionNumber}`
        )
        .classList.remove(
            "active-question"
        );


    currentQuestion =
        questionNumber - 1;


    document
        .getElementById(
            `question${currentQuestion}`
        )
        .classList.add(
            "active-question"
        );

}



// =====================================================
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    const answer =
        document.querySelector(
            'input[name="q6"]:checked'
        );


    if (!answer) {

        alert(
            "Choose an answer first 💕"
        );

        return;

    }


    if (
        answer.value === "correct" &&
        !answer.dataset.counted
    ) {

        score++;

        answer.dataset.counted = "true";

    }


    document
        .getElementById("question6")
        .classList.remove(
            "active-question"
        );


    const result =
        document.getElementById(
            "quizResult"
        );


    if (score === 6) {

        result.innerHTML =

            `
            <div class="score-emoji">
                🥹💕
            </div>

            6 / 6

            <br>

            Perfect Bestie!

            <small>
                You know our friendship by heart.
            </small>
            `;

    }

    else if (score >= 4) {

        result.innerHTML =

            `
            <div class="score-emoji">
                💕
            </div>

            ${score} / 6

            <br>

            Pretty Good, Bestie!

            <small>
                You definitely know me!
            </small>
            `;

    }

    else if (score >= 2) {

        result.innerHTML =

            `
            <div class="score-emoji">
                😂
            </div>

            ${score} / 6

            <br>

            We Need More Memories!

            <small>
                Time to make some new ones!
            </small>
            `;

    }

    else {

        result.innerHTML =

            `
            <div class="score-emoji">
                😭💕
            </div>

            ${score} / 6

            <br>

            Bestie... Really?

            <small>
                Looks like we need another memory day!
            </small>
            `;

    }


    document
        .getElementById("quizNext")
        .classList.remove("hidden");

}



// =====================================================
// RESET QUIZ
// =====================================================

function resetQuiz() {

    score = 0;

    currentQuestion = 1;


    document
        .querySelectorAll(".quiz-step")
        .forEach(question => {

            question.classList.remove(
                "active-question"
            );

        });


    document
        .getElementById("question1")
        .classList.add(
            "active-question"
        );


    document
        .getElementById("quizResult")
        .innerHTML = "";


    document
        .getElementById("quizNext")
        .classList.add("hidden");


    document
        .querySelectorAll(
            '.quiz-step input[type="radio"]'
        )
        .forEach(input => {

            input.checked = false;

            delete input.dataset.counted;

        });

}



// =====================================================
// FLOATING HEARTS
// =====================================================

function createHeart() {

    const container =
        document.querySelector(
            ".hearts-container"
        );


    if (!container) {

        return;

    }


    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const heartTypes = [

        "♥",

        "♡",

        "💕",

        "💗",

        "💖",

        "💓",

        "💞"

    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 22
        ) + "px";


    const duration =
        6 +
        Math.random() * 7;


    heart.style.animationDuration =
        duration + "s";


    container.appendChild(heart);


    setTimeout(
        function() {

            heart.remove();

        },
        duration * 1000
    );

}



// Create hearts continuously

setInterval(
    createHeart,
    450
);



// Create a few immediately

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        createHeart,
        i * 200
    );

}