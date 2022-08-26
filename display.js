"use strict";

const fetchingData = async () => {
  try {
    //Retreive data from API
    const res = await fetch("http://localhost:3000/data");
    const body = await res.json();

    if (res.ok) {
      const data = body.data;

      const pPunchline = document.getElementById("punchline");

      const displayJoke = () => {
        //Select one of the jokes in the dataset randomly:
        const randomNumber = Math.floor(Math.random() * data.length);

        const jokeInfo = data[randomNumber];

        //Display the joke setup on screen:
        const pSetup = document.getElementById("setup");
        pSetup.textContent = jokeInfo.setup;

        //Check button shows the punchline:
        const checkButton = document.getElementById("check_id");

        checkButton.addEventListener("click", (e) => {
          e.preventDefault();

          pPunchline.textContent = jokeInfo.punchline;
          pPunchline.classList.remove("animation");
          void pPunchline.offsetWidth;
          pPunchline.classList.add("animation");
        });
      };

      displayJoke();

      //Reset button runs the page again:
      const resetButton = document.getElementById("reset_id");

      resetButton.addEventListener("click", (e) => {
        e.preventDefault();
        pPunchline.textContent = "";
        displayJoke();
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

fetchingData();
