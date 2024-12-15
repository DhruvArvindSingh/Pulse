const generateButton = document.getElementById("generate");
const prompt = document.getElementById("prompt");
let images = document.getElementsByClassName("image");
const numbutton = document.getElementsByClassName("number");
const backBtn = document.getElementsByClassName("backBtn")[0];
const apiSelector = document.getElementById("api-selector");
const resBtns = document.getElementsByClassName("resolution");
let currentStyle = "";
let total_images = 1;
let imageGenModel = 'flux-dev'; // Default API type
let res = 's';
let genImageSize = "1024x1024"
apiSelector.addEventListener('change', (event) => {
    imageGenModel = event.target.value;
});
for (let index = 0; index < numbutton.length; index++) {
    numbutton[index].addEventListener("click", () => {
        updateImageCount(Number(numbutton[index].innerText));
    });
}
function updateImageCount(imageCount) {
    total_images = imageCount;
    for (let index = 0; index < numbutton.length; index++) {
        numbutton[index].classList.remove("active");
    }
    if (imageCount == 4) {
        numbutton[imageCount - 2].classList.add("active");
    }
    else {

        numbutton[imageCount - 1].classList.add("active");
    }
}
for (let index = 0; index < resBtns.length; index++) {
    resBtns[index].addEventListener("click", () => {
        updateResolution(resBtns[index].value);
    });
}

function updateResolution(resInfo) {
    res = resInfo;
    console.log(res);
    for (let index = 0; index < resBtns.length; index++) {
        resBtns[index].classList.remove("active");
    }
    switch (resInfo) {
        case 's':
            resBtns[0].classList.add("active");
            break;
        case 'p':
            resBtns[1].classList.add("active");
            break;
        case 'l':
            resBtns[2].classList.add("active");
            break;
        default:
            break;
    }
}
async function generateImage(prompt) {
    document.querySelector(".stylesContainer").style.display = "none";
    document.querySelector(".output").classList.remove("hidden");
    backBtn.classList.remove("hidden");
    const container = document.querySelector('.output');
    let array = document.getElementsByClassName("video");

    for (let index = 0; index < array.length; index++) {
        array[index].classList.remove("hidden");
        images[index].style.background = "#eee4fe";
    }

    container.innerHTML = "";
    for (let index = 0; index < total_images; index++) {
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        const video = document.createElement("video");
        video.setAttribute("src", "../../light.mp4");
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.setAttribute("width", "180");
        video.setAttribute("height", "200");
        video.classList.add("video");
        imageDiv.appendChild(video);
        container.append(imageDiv);
    }
    const cards = container.querySelectorAll('.image');

    container.style.gridTemplateColumns = total_images < 2 ?
        "repeat(auto-fit, minmax(200px, 1fr))" :
        "1fr 1fr";

    
    cards.forEach(card => {
        const sizeMap = {
            s: [1024, 1024],
            p: [768, 1024],
            l: [1024, 768],
        };
        const [width, height] = sizeMap[res] || [1024, 1024];
        card.style.width = `${width / (total_images === 1 || total_images === 2 ? 3 : 4.25)}px`;
        card.style.height = `${height / (total_images === 1 || total_images === 2 ? 3 : 4.25)}px`;
    });

    const promises = [];
    for (let count = 0; count < total_images; count++) {
        promises.push(generateSingleImage(prompt, currentStyle, cards[count], count));
    }
    await Promise.all(promises);
}

async function generateSingleImage(prompt, style, imageDiv, count) {
    try {
        const imageUrl = await FluxImageGen(prompt, style);
        imageDiv.querySelector('.video').classList.add("hidden");

        imageDiv.style.background = `url(${imageUrl})`;
        imageDiv.style.backgroundSize = "cover";

        const downloadButton = document.createElement("button");
        downloadButton.innerHTML = "<i class='fa-solid fa-download'></i>";
        downloadButton.classList.add("download-btn");
        downloadButton.addEventListener("click", () => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = `generated_image_${count + 1}.png`;
            link.click();
        });
        imageDiv.appendChild(downloadButton);

        const fullscreenButton = document.createElement("button");
        fullscreenButton.innerHTML = "<i class='fa-solid fa-expand'></i>";
        fullscreenButton.classList.add("download-btn");
        fullscreenButton.addEventListener("click", () => {
            showFullscreenModal(imageUrl);
        });
        imageDiv.appendChild(fullscreenButton);

    } catch (error) {
        console.error(`Error generating image ${count + 1}:`, error);
        imageDiv.innerHTML = "";
        imageContainer.style.background = "rgba(16 18 27 / 40%)"
        const retryButton = document.createElement("button");

        retryButton.innerHTML = "Retry";
        retryButton.classList.add("generate");
        retryButton.classList.add("retry");
        retryButton.addEventListener("click", async () => {
            imageDiv.style.background = "#eee4fe";
            imageDiv.innerHTML = ""; // Clear existing content
            const loader = document.createElement("video");
            loader.setAttribute("src", "../../light.mp4");
            loader.autoplay = true;
            loader.muted = true;
            loader.loop = true;
            loader.setAttribute("width", "180");
            loader.setAttribute("height", "200");
            loader.classList.add("video");
            imageDiv.appendChild(loader);
            await generateSingleImage(prompt, style, imageDiv, count);
        });
        imageDiv.appendChild(retryButton);
    }
}

function showFullscreenModal(imageUrl) {
    const modal = document.getElementById("fullscreenModal");
    const modalImage = document.getElementById("fullscreenImage");
    modalImage.src = imageUrl;
    modal.style.display = "flex";
}

document.querySelector("#closeBtn").addEventListener("click", () => {
    const modal = document.querySelector("#fullscreenModal");
    modal.style.display = "none";

});

async function FluxImageGen(prompt, style) {

    switch (res) {
        case 's':
            genImageSize = "1024x1024"
            break;
        case 'l':
            genImageSize = "1024x768"
            break;
        case 'p':
            genImageSize = "768x1024";
            break;
        default:
            console.error('Invalid value for res:', res);
            break;
    }
    const response = await fetch("https://api.xet.one/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer XET-fu4iW3CxhXnWZC5JCJlO4tKo8jPZ2krF5rwwQ8SB"
        },
        body: JSON.stringify({
            prompt: prompt + style,
            model: imageGenModel,
            size: genImageSize
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;
    return imageUrl;
}

generateButton.addEventListener("click", () => {
    if (prompt.value != "") {
        generateImage(prompt.value);
    } else {
        alert("The prompt should not be empty");
    }
});

const imageGenerationPrompts = [
    {
        style: "Photographic",
        prompt: "Create a highly detailed, realistic photographic image with lifelike colors and textures. Focus on capturing intricate details and natural lighting."
    },
    {
        style: "Anime",
        prompt: "Generate a vibrant and dynamic anime-style image with exaggerated features and bright, bold colors. Emphasize expressive characters and dramatic effects."
    },
    {
        style: "Fantasy Art",
        prompt: "Design a fantastical fantasy art scene with magical creatures, enchanted landscapes, and otherworldly elements. Use rich, imaginative details and a mystical atmosphere."
    },
    {
        style: "Line Art",
        prompt: "Produce a clean, minimalistic line art drawing with clear outlines and simple shading. Focus on geometric shapes and fine details with no color."
    },
    {
        style: "3D Model",
        prompt: "Create a 3D model rendered image with realistic textures and lighting effects. Emphasize depth, shadow, and detail in a three-dimensional space."
    },
    {
        style: "Neopunk",
        prompt: "Generate a futuristic neopunk style image featuring high-tech and gritty urban elements. Use neon colors, cybernetic details, and a dystopian vibe."
    },
    {
        style: "Comic Book",
        prompt: "Create a comic book-style illustration with bold lines, dynamic poses, and vibrant colors. Incorporate speech bubbles and dramatic panel layouts."
    },
    {
        style: "Digital Art",
        prompt: "Design a modern digital art piece with a focus on innovative techniques, digital textures, and high-resolution details. Use a range of colors and abstract forms."
    },
    {
        style: "Cinematic",
        prompt: "Produce a cinematic-style image with a dramatic composition, high contrast, and movie-like lighting effects. Emphasize mood and depth with a film-like quality."
    },
    {
        style: "Low Poly",
        prompt: "Create a low poly 3D model style image with geometric shapes and flat colors. Focus on simplicity and stylized representations with minimal detail."
    },
    {
        style: "Isometric",
        prompt: "Generate an isometric-style image with a 3D effect but viewed from an angled top-down perspective. Use precise angles and a grid layout to enhance the effect."
    },
    {
        style: "Disney Pixar",
        prompt: "Highly detailed, A Disney Pixar animation of "
    }
];

const styles = document.getElementsByClassName("styles");
for (let index = 0; index < styles.length; index++) {
    styles[index].addEventListener("click", () => {
        updateStyle(styles[index].innerText);
    });
}

function findElementByText(text) {
    const elements = document.querySelectorAll('.styles');
    for (let el of elements) {
        if (el.innerText.trim() === text) {
            return el;
        }
    }
    return null;
}

function updateStyle(styleName) {
    const styleObject = imageGenerationPrompts.find(item => item.style === styleName);
    if (styleObject) {
        currentStyle = styleObject.prompt;
    } else {
        currentStyle = "";
    }
    for (let index = 0; index < styles.length; index++) {
        styles[index].classList.remove("active");
    }
    let activeStyle = findElementByText(styleName);
    activeStyle.classList.add("active");
}

backBtn.addEventListener("click", () => {
    backBtn.classList.add("hidden");
    document.querySelector(".stylesContainer").style.display = "grid";
    document.querySelector(".output").classList.add("hidden");
});

