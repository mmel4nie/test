import susieSharpe from "speakerImgs/ChristmasStar.png"

speakerData = [
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    },
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    },
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    }
];

// const outputSpeakers = speakerData.map(speaker => (
//     `<section class="speaker-container">
//         <div class="speaker-content speaker-box">
//             <img class="speaker-img" src="speakerImgs/${speaker.img}.png"/>
//             <div class="speaker-profile">
//                 <p class="speaker-name">${speaker.name}</p>
//                 <p class="speaker-descr">${speaker.description}</p>
//             </div>
//         </div>
//     </section>`
// ));











const formattedSpeakers = speakerData.map(speaker => (
    `<section class="speaker-container">
        <div class="speaker-content speaker-box">
            <img class="speaker-img" src="speakerImgs/${speaker.img}"/>
            <div class="speaker-profile">
                <p class="speaker-name">${speaker.name}</p>
                <div class="speaker-descr">${speaker.description}</div>
            </div>
        </div>
    </section>`
));

const speakersHTML = formattedSpeakers.join('\n');

document.getElementById('speakersContainer').innerHTML = speakersHTML;
















{/* <script>
    const speakerData = [
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    },
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    },
    {
        img: susieSharpe,
        name: "Susie Sharpe",
        description: <p>
            Aramis O. Hamer is a visual artist and muralist in Seattle, WA. 
            Her large-scale, acrylic paintings are inspired by the cosmos, 
            music, nature, divine femininity, and the complexities in Black 
            culture. Aramis has exhibited her colorful creations throughout 
            Washington state. She also painted the “V” in Seattle’s Black 
            Lives Matter mural. This self taught, Neddy Award winning-artist 
            lets her imagination be her guide.
        </p>
    }
];


    const formattedSpeakers = speakerData.map(speaker => (
        `<section class="speaker-container">
            <div class="speaker-content speaker-box">
                <img class="speaker-img" src="speakerImgs/ChristmasStar.png.png"/>
                <div class="speaker-profile">
                    <p class="speaker-name">${speaker.name}</p>
                    <p class="speaker-descr">${speaker.description}</p>
                </div>
            </div>
        </section>`
    ));

    const speakersHTML = formattedSpeakers.join('\n');

    document.getElementById('speakersContainer').innerHTML = speakersHTML;
</script> */}

