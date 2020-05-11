window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "teal",
        "red",
        "lightskyblue",
        "green",
        "pink",
        "yellow"
    ];
   
    console.log(sounds[0]);

    // Initiating Sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createFireworks(index);
        });
    });


    // Create a function that makes fireworks
    const createFireworks = (index) => {
        const firework = document.createdElement("div");
        visual.appendChild(firework);
        firework.style.backgroundColor = colors[index];
        firework.style.animation = "jump is ease";
    };
});

