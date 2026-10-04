document.addEventListener("DOMContentLoaded", function () {

    /* ============================= */
    /* INTRO */
    /* ============================= */

    const startButton =
        document.getElementById("startButton");

    const introScreen =
        document.getElementById("introScreen");

    const mainContent =
        document.getElementById("mainContent");


    startButton.addEventListener("click", function () {

        introScreen.classList.add("hide");

        mainContent.classList.add("visible");

       startButton.addEventListener("click", function () {

    introScreen.classList.add("hide");

    mainContent.classList.add("visible");
    document.body.classList.add("intro-active");

startButton.addEventListener("click", function () {

    introScreen.classList.add("hide");
    mainContent.classList.add("visible");

    document.body.classList.remove("intro-active");

});

});

    });


    /* ============================= */
    /* SNAPCHAT STORY */
    /* ============================= */

    const snapButton =
        document.getElementById("snapButton");

    const hiddenMessages =
        document.querySelectorAll(".hidden-message");

    let messageIndex = 0;


    snapButton.addEventListener("click", function () {

        if (messageIndex < hiddenMessages.length) {

            hiddenMessages[messageIndex]
                .style.display = "block";

            messageIndex++;

            if (messageIndex === hiddenMessages.length) {

                snapButton.textContent =
                    "Okay... now let's continue →";

            }

        } else {

            const nextSection =
                document.querySelectorAll(".story-section")[1];

            if (nextSection) {

                nextSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});
/* ============================= */
/* VIDEO REVEAL */
/* ============================= */

const teniVideo =
    document.getElementById("teniVideo");

const videoPlayButton =
    document.getElementById("videoPlayButton");


if (teniVideo && videoPlayButton) {

    videoPlayButton.addEventListener("click", function () {

        teniVideo.play();

        videoPlayButton.classList.add("hidden");

    });


    teniVideo.addEventListener("ended", function () {

        videoPlayButton.classList.remove("hidden");

    });

}
/* ============================= */
/* FINAL PROPOSAL */
/* ============================= */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const proposalAnswer =
    document.getElementById("proposalAnswer");


if (yesButton && noButton && proposalAnswer) {

    function acceptProposal() {

        proposalAnswer.classList.add("show");

        yesButton.style.display = "none";
        noButton.style.display = "none";

        proposalAnswer.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    yesButton.addEventListener(
        "click",
        acceptProposal
    );


    noButton.addEventListener(
        "click",
        acceptProposal
    );

}