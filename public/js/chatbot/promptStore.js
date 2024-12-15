let globalTools = [];

const defaultSections = [
    {
        title: "Featured",
        cards: [
            {
                title: "Government Schemes Expert",
                description: "It identifies and filters the best Indian government schemes tailored to your needs.",
                fullDescription: "It effectively identifies and carefully filters out the best Indian government schemes that are specifically tailored and personalized for your unique needs and circumstances.",
                imageUrl: "https://i.ibb.co/qW8pvhW/cb547939.png",
                author: "user",
                prompt: "You are an AI expert on Indian government schemes, equipped with comprehensive data on all government programs aimed at improving the lives of citizens. Your task is to recommend the most suitable scheme(s) for a user based on their age, profession, issues, and needs.  To provide the best recommendations, follow these steps:  Gather detailed information from the user, including: Age Profession Issues/Challenges faced (such as financial, health, education, agriculture, housing, etc.) Needs (for example, financial aid, skill development, health insurance, etc.) Once all the necessary information is collected, list the most relevant government schemes available for the user. Make sure the list is based on their specific requirements. Present your recommendations in a tabular form with the following columns: Scheme Name Target Group (Who is it meant for, e.g., farmers, students, women, etc.) Key Features (What benefits the scheme offers) Eligibility Criteria (Who can apply for the scheme) How to Apply (Applicatio",
                tools: [],
                trainingData: []
            },
            {
                title: "Image Gen",
                description: "Generate Fabulous images using AI while having a conversation.",
                fullDescription: "Create stunning and remarkable images by utilizing the power of artificial intelligence, all while engaging in an enjoyable conversation.",
                author: "user",
                imageUrl: "https://i.ibb.co/vJqgVsL/c46a1922.png",
                prompt: "You are an advanced AI Image Generator, designed to create a series of visually compelling, high-quality images from user descriptions. To achieve the best results, follow each instruction carefully, focusing on creating long, descriptive prompts filled with nuanced details to enhance richness and depth in each image. Use tool calling of the OpenAI API to achieve this, leveraging either multiple tool calls or a single one, depending on the user’s requirements and context.  User Interaction: Greet the user in a friendly, professional tone to make them comfortable. For example: \"Hello! I’m your AI Image Generator. Describe any vision you have, and I’ll bring it to life through detailed, imaginative visuals using tool calling capabilities.\"  Core Instructions:  1. Image Prompt Structure: Format each image prompt by creating a detailed description and then generating the image using tool calling. Use multiple sentences to build each image description, aiming for a paragraph-length explanation that includes specific details on subject, style, mood, and context. Tool calling will allow you to create the images seamlessly. Here’s an example of a properly structured prompt:  Example: Description: A realistic portrait of a young woman with shoulder-length auburn hair, standing in a sunlit meadow surrounded by blooming wildflowers. She wears a white lace dress that sways in the gentle breeze, and her face is illuminated by soft, golden hour light. In the background, a row of distant mountains fades into a warm sunset sky with hints of lavender and pink. Her expression is peaceful and contemplative, evoking a sense of nostalgia. Action: Call the image generation tool with this description.  Aim for a minimum detail length of 3–5 sentences per description, creating immersive imagery with sensory details that make each scene vivid and memorable.  2. Creating Multiple Images Per Prompt: Produce four distinct images for each prompt using multiple tool calls. Incorporate variations in style, atmosphere, and composition to ensure diversity. Use different techniques to add variety:  - **Style Variation:** If the user describes a scene, interpret it in multiple styles:  Example Prompt: \"A snow-capped mountain under a starlit sky.\" - Image 1: Photorealistic rendering with a crisp, detailed focus on the textures of the snow and rocks under soft moonlight. - Image 2: Impressionistic style with soft brushstrokes, creating an ethereal view where the mountains blend into the night sky. - Image 3: Sci-fi style with glowing, neon stars and futuristic colors casting an eerie blue glow on the mountain. - Image 4: Dreamlike, abstract approach with vibrant colors, turning the mountain into sweeping shapes under a swirling sky.  - **Scene Adjustments:** Modify elements within the scene to create unique interpretations.  Example Prompt: \"A cozy reading room with a large armchair and a bookshelf.\" - Image 1: Add a cat curled up on the armchair, with warm morning light streaming through a window. - Image 2: Place a crackling fireplace in the corner, casting a soft amber glow across the room in evening light. - Image 3: Include a stack of books on the floor, with a window revealing a rainy cityscape outside. - Image 4: Set the scene at night, with only a dim lamp illuminating the space, creating a quiet and solitary atmosphere.  3. Building High-Quality, Richly Detailed Prompts: - **Subject Clarity:** Always define the main subject in rich detail (e.g., \"a bustling outdoor market filled with vendors selling colorful spices and produce\"). - **Art Style:** Specify an art style that suits the mood and purpose of the image. Examples include:   - Photorealistic: For realistic, detailed imagery.   - Fantasy Illustration: For mythical, colorful, or magical visuals.   - Cyberpunk: To incorporate futuristic, neon, or urban sci-fi aesthetics.   - Art Deco: For elegant, vintage aesthetics with bold lines and shapes. - **Mood and Atmosphere:** Set a tone or mood to guide the overall feel, such as tranquil, mysterious, dramatic, or whimsical. - **Sensory Details:** Include sensory elements (e.g., textures, colors, sounds) that deepen the scene.  Examples: - \"A quiet forest with damp, mossy ground and a faint mist lingering in the air.\" - \"The bustling cityscape glows with neon signs under a rainy sky, reflections glistening on wet pavement.\"  - **Perspective and Composition:** Define a viewpoint to establish the composition and focus, such as close-up of a face, bird’s-eye view of a landscape, or wide-angle cityscape.  4. Adjusting for User Feedback: Incorporate revisions based on user input. Rephrase the prompt and call the tool again with any added details, incorporating adjustments to style, subject, or mood.  Example: Original: \"A tranquil mountain lake reflecting the sunset sky, with tall pines lining the shore.\" Updated per user request for a darker tone: \"A misty mountain lake at dusk, with shadows cast across the water and a dark forest silhouetted in the distance under a deep indigo sky.\"  Reformat revised prompts with similar depth and detail as the original.  Examples of Detailed Prompts: - **Example of a Scenic Landscape:** Description: A vast desert under the blazing afternoon sun, with golden sands stretching out toward distant, rocky mountains. In the foreground, a solitary cactus with red flowers stands tall, casting a long shadow across the dunes. Heat waves ripple through the air, creating a mirage-like effect, and a hawk soars overhead against a vibrant blue sky streaked with wispy clouds. The scene feels both harsh and beautiful, emphasizing nature's resilience. Action: Call the image generation tool with this description.  - **Example of a Character Portrait:** Description: A futuristic cityscape at night with neon-lit skyscrapers towering into the clouds. In the foreground stands a woman in a sleek, metallic bodysuit, her expression focused and determined. Her hair is illuminated by the neon lights, glowing with hints of electric blue and violet. A pair of cybernetic goggles rest on her forehead, and a faint holographic display hovers near her hand, showing a map of the city. The mood is intense and suspenseful, capturing a sense of urgency and action. Action: Call the image generation tool with this description.  - **Example of an Abstract Style:** Description: A surreal dreamscape with floating islands made of crystal and overgrown vines. Each island glows with soft pastel colors—pinks, blues, and purples—under a night sky filled with oversized, shining stars. In the distance, a waterfall flows upwards, defying gravity, while ethereal creatures with transparent wings hover nearby. The scene is whimsical and otherworldly, evoking a sense of wonder and fantasy. Action: Call the image generation tool with this description.  By following these enhanced instructions, you’ll create visually captivating images that embody the full depth and atmosphere described by each prompt, ensuring diversity, richness, and high-quality visuals for each user.",
                tools: [
                    {
                        type: "function",
                        function: {
                            name: "generate_image",
                            description: "Generate images based on text input.",
                            parameters: {
                                type: "object",
                                properties: {
                                    prompt: {
                                        type: "string",
                                        description: "The text description of image to be generated"
                                    }
                                },
                                required: [
                                    "prompt"
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        "title": "Forms",
        "cards": [
            {
                "title": "Aadhaar Card",
                "description": "Handles Aadhaar Card form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Aadhaar Card application and displays it in a form for submission. It gathers details such as name, date of birth, gender, address, mobile number, email, and biometric data.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Aadhaar Card application data. Collect the following details from the user: Name, Date of Birth, Gender, Address, Mobile Number, Email, Biometric Data. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayAadhaarForm",
                            "description": "Handles Aadhaar Card form data input (Name, DOB, Gender, Address, Mobile Number, Email, Biometric Data) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "gender": {
                                        "type": "string",
                                        "description": "Gender of the individual"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    },
                                    "mobileNumber": {
                                        "type": "string",
                                        "description": "Mobile number of the individual"
                                    },
                                    "email": {
                                        "type": "string",
                                        "description": "Email ID of the individual"
                                    },
                                    "biometricData": {
                                        "type": "string",
                                        "description": "Biometric data (Fingerprints, Iris scan)"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "gender",
                                    "address",
                                    "mobileNumber",
                                    "email",
                                    "biometricData"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "Voter ID",
                "description": "Handles Voter ID form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Voter ID application and displays it in a form for submission. It gathers details such as name, date of birth, and address.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Voter ID application data. Collect the following details from the user: Name, Date of Birth, Address. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayVoterForm",
                            "description": "Handles Voter ID form data input (Name, DOB, Address) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "address"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "PAN Card",
                "description": "Handles PAN Card form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the PAN Card application and displays it in a form for submission. It gathers details such as name, date of birth, address, mobile number, and email.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying PAN Card application data. Collect the following details from the user: Name, Date of Birth, Address, Mobile Number, Email. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayPanForm",
                            "description": "Handles PAN Card form data input (Name, DOB, Address, Mobile Number, Email) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    },
                                    "mobileNumber": {
                                        "type": "string",
                                        "description": "Mobile number of the individual"
                                    },
                                    "email": {
                                        "type": "string",
                                        "description": "Email ID of the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "address",
                                    "mobileNumber",
                                    "email"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "Driving License",
                "description": "Handles Driving License form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Driving License application and displays it in a form for submission. It gathers details such as name, date of birth, address, and medical certificate.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Driving License application data. Collect the following details from the user: Name, Date of Birth, Address, Medical Certificate. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayAadhaarForm",
                            "description": "Handles Aadhaar Card form data input (Name, DOB, Gender, Address, Mobile Number, Email, Biometric Data) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "gender": {
                                        "type": "string",
                                        "description": "Gender of the individual"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    },
                                    "mobileNumber": {
                                        "type": "string",
                                        "description": "Mobile number of the individual"
                                    },
                                    "email": {
                                        "type": "string",
                                        "description": "Email ID of the individual"
                                    },
                                    "biometricData": {
                                        "type": "string",
                                        "description": "Biometric data (Fingerprints, Iris scan)"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "gender",
                                    "address",
                                    "mobileNumber",
                                    "email",
                                    "biometricData"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "Passport",
                "description": "Handles Passport form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Passport application and displays it in a form for submission. It gathers details such as name, date of birth, address, and birth certificate.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Passport application data. Collect the following details from the user: Name, Date of Birth, Address, Birth Certificate. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayPassportForm",
                            "description": "Handles Passport form data input (Name, DOB, Address, Birth Certificate) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    },
                                    "birthCertificate": {
                                        "type": "string",
                                        "description": "Birth certificate of the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "address",
                                    "birthCertificate"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            
            {

                "title": "Birth Certificate",
                "description": "Handles Birth Certificate form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Birth Certificate application and displays it in a form for submission. It gathers details such as name, date of birth, parents' names, and address.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Birth Certificate application data. Collect the following details from the user: Name, Date of Birth, Parents' Names, Address. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayBirthCertificateForm",
                            "description": "Handles Birth Certificate form data input (Name, DOB, Parents' Names, Address) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "parentsNames": {
                                        "type": "string",
                                        "description": "Parents' names"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "parentsNames",
                                    "address"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "Ration Card",
                "description": "Handles Ration Card form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Ration Card application and displays it in a form for submission. It gathers details such as name, date of birth, address, and family details.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Ration Card application data. Collect the following details from the user: Name, Date of Birth, Address, Family Details. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayRationCardForm",
                            "description": "Handles Ration Card form data input (Name, DOB, Address, Family Details) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    },
                                    "familyDetails": {
                                        "type": "string",
                                        "description": "Family details of the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "address",
                                    "familyDetails"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "10th Standard Marks Card",
                "description": "Handles 10th Standard Marks Card form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the 10th Standard Marks Card and displays it in a form for submission. It gathers details such as name, date of birth, school name, class, roll number, and marks.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying 10th Standard Marks Card data. Collect the following details from the user: Name, Date of Birth, School Name, Class, Roll Number, Marks. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayMarksCardForm",
                            "description": "Handles 10th Standard Marks Card form data input (Name, DOB, School Name, Class, Roll Number, Marks) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "description": "Full name of the individual"
                                    },
                                    "dob": {
                                        "type": "string",
                                        "description": "Date of birth (format: YYYY-MM-DD)"
                                    },
                                    "schoolName": {
                                        "type": "string",
                                        "description": "Name of the school"
                                    },
                                    "class": {
                                        "type": "string",
                                        "description": "Class in which the individual was studying"
                                    },
                                    "rollNumber": {
                                        "type": "string",
                                        "description": "Roll number of the individual"
                                    },
                                    "marks": {
                                        "type": "string",
                                        "description": "Marks obtained by the individual"
                                    }
                                },
                                "required": [
                                    "name",
                                    "dob",
                                    "schoolName",
                                    "class",
                                    "rollNumber",
                                    "marks"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            },
            {
                "title": "Bank Passbook",
                "description": "Handles Bank Passbook form data input and displays it after submission.",
                "fullDescription": "This function collects personal information required for the Bank Passbook application and displays it in a form for submission. It gathers details such as account number and address.",
                "imageUrl": "/images/bot.png",
                "author": "user",
                "prompt": "You are an assistant responsible for collecting and displaying Bank Passbook application data. Collect the following details from the user: Account Number, Address. Once collected, display the form and submit it.",
                "tools": [
                    {
                        "type": "function",
                        "function": {
                            "name": "displayBankPassbookForm",
                            "description": "Handles Bank Passbook form data input (Account Number, Address) and displays it after submission.",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "accountNumber": {
                                        "type": "string",
                                        "description": "Account number of the individual"
                                    },
                                    "address": {
                                        "type": "string",
                                        "description": "Address of the individual"
                                    }
                                },
                                "required": [
                                    "accountNumber",
                                    "address"
                                ]
                            }
                        }
                    }
                ],
                "trainingData": []
            }
        ]
    }
];
let sections = JSON.parse(localStorage.getItem('promptSections')) || defaultSections;

function generateContent() {
    const promptContent = document.getElementById('promptContent');
    promptContent.innerHTML = ''; // Clear existing content

    sections.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.classList.add('section-title');
        sectionTitle.innerText = section.title;
        promptContent.appendChild(sectionTitle);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        section.cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.setAttribute('data-title', card.title);
            cardElement.setAttribute('data-description', card.description);
            cardElement.setAttribute('data-author', card.author);
            const img = document.createElement('img');
            img.src = card.imageUrl || "/images/bot.png"; // Use bot.png if no imageUrl

            cardElement.onclick = () => openModal(card.title, card.fullDescription, card.prompt, card.imageUrl, card.tools, card.trainingData);
            console.log(card.tools);

            img.alt = card.title;
            cardElement.appendChild(img);

            const cardTitle = document.createElement('h5');
            cardTitle.innerText = card.title;
            cardElement.appendChild(cardTitle);

            const cardDescription = document.createElement('p');
            cardDescription.innerText = card.description;
            cardElement.appendChild(cardDescription);

            cardContainer.appendChild(cardElement);
        });

        promptContent.appendChild(cardContainer);
    });
}

function storeSections() {
    localStorage.setItem('promptSections', JSON.stringify(sections));
}


function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => console.error('Error converting image to base64:', error);
}

function deletePrompt(title) {
    sections.forEach(section => {
        section.cards = section.cards.filter(card => card.title !== title);
    });
    sections = sections.filter(section => section.cards.length > 0); // Remove empty sections
    storeSections();
    closeModal();
    generateContent();
}

function exportPrompts() {
    const dataStr = JSON.stringify(sections);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prompts.json";
    a.click();
    URL.revokeObjectURL(url);
}

function importPrompts(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = JSON.parse(e.target.result);
        sections = data;
        storeSections();
        generateContent();
    };
    reader.readAsText(file);
}

function searchCards() {
    const input = document.getElementById('promptsearchInput').value.toLowerCase();
    const promptContent = document.getElementById("promptContent");
    promptContent.innerHTML = ''; // Clear current content

    sections.forEach(section => {
        const filteredCards = section.cards.filter(card =>
            card.title.toLowerCase().includes(input) ||
            card.description.toLowerCase().includes(input) ||
            card.author.toLowerCase().includes(input)
        );

        if (filteredCards.length > 0) {
            const sectionTitle = document.createElement('h2');
            sectionTitle.classList.add('section-title');
            sectionTitle.innerText = section.title;
            promptContent.appendChild(sectionTitle);

            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');

            filteredCards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.setAttribute('data-title', card.title);
                cardElement.setAttribute('data-description', card.description);
                cardElement.setAttribute('data-author', card.author);

                const img = document.createElement('img');
                img.src = card.imageUrl || "/images/bot.png"; // Use bot.png if no imageUrl
                cardElement.onclick = () => openModal(card.title, card.fullDescription, card.prompt, card.imageUrl, card.tools);
                img.alt = card.title;
                cardElement.appendChild(img);

                const cardTitle = document.createElement('h5');
                cardTitle.innerText = card.title;
                cardElement.appendChild(cardTitle);

                const cardDescription = document.createElement('p');
                cardDescription.innerText = card.description;
                cardElement.appendChild(cardDescription);

                cardContainer.appendChild(cardElement);
            });

            promptContent.appendChild(cardContainer);
        }
    });
}

function openModal(title, description, prompt, imagePath, cardTools, cardTrainingData) {
    document.getElementById('modalTitle').innerText = title;
    let a = [];

    document.getElementById('promptChatBtn').addEventListener("click", () => {
        window.chatbotSystemPrompt = prompt;
        window.currentPromptTitle = title;
        window.assistantPath = imagePath;
        if (Array.isArray(cardTools)) {
            if (cardTools.length > 0) {

                window.tools = cardTools;
            }
        }
        if (Array.isArray(cardTrainingData)) {
            if (cardTrainingData.length > 0) {
                window.trainingData = cardTrainingData;
            }
        }

    })
    document.getElementById("toolsEditBtn").addEventListener('click', () => {
        displayTools(cardTools);
    })

    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalOverlay').style.display = 'flex';
    // console.log(imagePath); // Store current prompt title for delete
}

// Close modal
function closeModal() {
    // Hide the modal
    document.getElementById('modalOverlay').style.display = 'none';

    // Loop through each section
    sections.forEach(section => {
        // Find the card by matching the title from the modal
        let card = section.cards.find(card => card.title === document.getElementById('modalTitle').innerText);

        // If a card is found, update its tools property
        if (card) {
            if (Array.isArray(generateJSON()) && generateJSON().length > 0) {
                card.tools = generateJSON(); // Assuming generateJSON returns the required 
                storeSections();
                generateContent();
            }

        }
    });
}


// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    generateContent();

    document.getElementById("addPromptBtn").addEventListener("click", () => {
        const title = document.getElementById("newPromptTitle").value;
        const description = document.getElementById("newPromptDescription").value;
        const fullDescription = document.getElementById("newPromptFullDescription").value;
        const systemPrompt = document.getElementById("newPromptSystemPrompt").value;
        const imageFile = document.getElementById("newPromptImage").files[0];
        let tools =[];
        if(Array.isArray(generateJSON()) && generateJSON().length > 0){

            tools = JSON.parse(document.getElementById("output").innerHTML, null, 4);
        }
        const trainingData = document.getElementById("trainingDataInput").value;
        // Use base64 for image or fallback to bot.png
        if (imageFile) {
            getBase64(imageFile, base64Image => {
                saveNewPrompt(title, description, fullDescription, systemPrompt, base64Image, tools);
            });
        } else {
            saveNewPrompt(title, description, fullDescription, systemPrompt, "/images/bot.png", tools, trainingData);
        }

        // Clear form fields
        document.getElementById("newPromptTitle").value = "";
        document.getElementById("newPromptDescription").value = "";
        document.getElementById("newPromptFullDescription").value = "";
        document.getElementById("newPromptSystemPrompt").value = "";
        document.getElementById("newPromptImage").value = "";
        document.querySelector(".promptImage").style.backgroundImage = `url(/images/bot.png)`;
        document.querySelector("#trainingDataInput")
        // document.
    });

    document.getElementById("showPromptFormBtn").addEventListener("click", () => {
        document.getElementById("newPromptOverlay").style.display = 'flex';
    });

    document.getElementById("closePromptFormBtn").addEventListener("click", () => {
        document.getElementById("newPromptOverlay").style.display = 'none';
    });

    document.getElementById("exportPromptsBtn").addEventListener("click", exportPrompts);

    document.getElementById("importPromptsBtn").addEventListener("click", () => {
        document.getElementById("importPromptsInput").click();
    });

    document.getElementById("importPromptsInput").addEventListener("change", importPrompts);

    document.getElementById("deletePromptBtn").addEventListener("click", () => {

        deletePrompt(document.getElementById("modalTitle").innerText);

    });
});
function changeHeight() {
    textarea.style.height = 'auto'; // Reset height to calculate scroll height
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'; // Clamp height to max 60px
    textarea.style.width = 'auto'; // Reset width to calculate scroll width
    textarea.style.width = Math.min(textarea.scrollWidth, 120) + 'px'; // Clamp width to max 120px
}
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', changeHeight);
function convertToTrainingData(inputText) {
    if (!inputText) {
        return []; // Return an empty array or handle it as needed
    }
    // Split the input text by newline, filter out empty lines, and map each line to the desired structure
    const inputTextArray = inputText.split('\n').filter(line => line.trim() !== '');
    return inputTextArray.map(text => ({
        role: "system",
        content: text
    }));
}



// Function to save new prompt with provided details
function saveNewPrompt(title, description, fullDescription, systemPrompt, imageUrl, cardtools, trainingData) {

    const newCard = {
        title,
        description,
        fullDescription,
        imageUrl,
        author: "user",
        prompt: systemPrompt,
        tools: cardtools,
        trainingData: convertToTrainingData(trainingData)
    };

    if (sections.length === 0 || !sections[0].cards) {
        sections.push({ title: "Custom Prompts", cards: [newCard] });
    } else {
        sections[0].cards.push(newCard);
    }

    storeSections();
    generateContent();
    document.getElementById("newPromptOverlay").style.display = "none";
}

// Preview uploaded image
function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.querySelector(".promptImage");
    if (file) {
        getBase64(file, base64Image => {
            preview.style.backgroundImage = `url(${base64Image})`;
        });
    } else {
        preview.style.backgroundImage = `url(/images/bot.png)`; // Default image if none uploaded
    }
}
document.getElementById('closeModal').addEventListener('click', () => {
    closeModal();

});
const showToolButton = document.getElementById("showTools");
showToolButton.addEventListener("click", () => {
    displayTools();
})
function displayTools(cardTools = null) {
    let toolCounter = 0;
    const toolContainer = document.querySelector(".toolContainer");
    const toolsDiv = document.getElementById("tools");
    toolsDiv.innerHTML = ""; // Clear existing tools

    toolContainer.style.display = "flex";

    if (cardTools && Array.isArray(cardTools)) {
        cardTools.forEach((tool) => {
            const toolId = `tool-${toolCounter++}`;
            const toolDiv = document.createElement("div");
            toolDiv.className = "tool";
            toolDiv.id = toolId;

            const { name, description, parameters } = tool.function;

            const requiredParams = parameters?.required || [];

            let parameterHTML = "";
            if (parameters && parameters.properties) {
                parameterHTML = Object.keys(parameters.properties).map(paramName => {
                    const param = parameters.properties[paramName];
                    const isRequired = requiredParams.includes(paramName); // Check if the parameter is required

                    return `
                        <div class="parameter">
                            <div class="input-group">
                                <label for="param-name-${toolId}-${paramName}">Name</label>
                                <input type="text" class="param-name" id="param-name-${toolId}-${paramName}" value="${paramName}" >
                            </div>
                            <div class="input-group">
                                <label for="param-type-${toolId}-${paramName}">Type</label>
                                <select class="param-type" id="param-type-${toolId}-${paramName}" onchange="toggleEnumValues('param-enum-${toolId}-${paramName}', this)">
                                    <option value="string" ${param.type === "string" ? "selected" : ""}>String</option>
                                    <option value="number" ${param.type === "number" ? "selected" : ""}>Number</option>
                                    <option value="boolean" ${param.type === "boolean" ? "selected" : ""}>Boolean</option>
                                    <option value="array" ${param.type === "array" ? "selected" : ""}>Array</option>
                                    <option value="object" ${param.type === "object" ? "selected" : ""}>Object</option>
                                    <option value="enum" ${param.enum ? "selected" : ""}>Enum</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label for="param-description-${toolId}-${paramName}">Description</label>
                                <textarea class="param-description" id="param-description-${toolId}-${paramName}" >${param.description || "No description provided"}</textarea>
                            </div>
                            <div class="radioDiv">
                                <input type="checkbox" class="param-required" id="param-required-${toolId}-${paramName}" ${isRequired ? "checked" : ""} 
                                    onchange="updateRequired('${toolId}', '${paramName}', this)">
                                <label for="param-required-${toolId}-${paramName}">Required</label>
                            </div>
                            <div class="enum-values" id="param-enum-${toolId}-${paramName}" style="${param.enum ? "display: block;" : "display: none;"}">
                                <label for="enum-values-${toolId}-${paramName}">Enum Values (comma separated)</label>
                                <input type="text" id="enum-values-${toolId}-${paramName}" value="${param.enum ? param.enum.join(", ") : ""}" >
                            </div>
                        </div>
                    `;
                }).join("");
            }

            toolDiv.innerHTML = `
                <div class="input-group">
                    <label for="name-${toolId}">Function Name</label>
                    <input type="text" id="name-${toolId}" value="${name || "Unnamed Tool"}" >
                </div>
                <div class="input-group">
                    <label for="description-${toolId}">Function Description</label>
                    <textarea id="description-${toolId}" >${description || "No description provided"}</textarea>
                </div>
                <div class="parameters">
                    <h3>Parameters:</h3>
                    ${parameterHTML || "<p>No parameters defined</p>"}
                </div>
            `;

            toolsDiv.appendChild(toolDiv);
        });
    }
}

// Update the `required` array when the checkbox is toggled
function updateRequired(toolId, paramName, checkbox) {
    const toolElement = document.getElementById(toolId);
    const toolDataIndex = parseInt(toolId.split("-")[1]); // Extract tool index
    const tool = cardTools[toolDataIndex]; // Access tool data
    const requiredParams = tool.function.parameters.required || [];

    if (checkbox.checked) {
        // Add the parameter to the required list if not already present
        if (!requiredParams.includes(paramName)) {
            requiredParams.push(paramName);
        }
    } else {
        // Remove the parameter from the required list
        const index = requiredParams.indexOf(paramName);
        if (index > -1) {
            requiredParams.splice(index, 1);
        }
    }

    // Update the tool data
    tool.function.parameters.required = requiredParams;
    console.log("Updated Required Parameters:", requiredParams);
}






function closeToolDiv() {
    document.querySelector(".toolContainer").style.display = "none";
}

let toolCounter = 0;

function addTool() {
    const toolId = `tool-${toolCounter++}`;
    const toolDiv = document.createElement('div');
    toolDiv.className = 'tool';
    toolDiv.id = toolId;

    toolDiv.innerHTML = `
        <div class="input-group">
            <label for="name-${toolId}">Function Name</label>
            <input type="text" id="name-${toolId}" placeholder="Enter function name">
        </div>
        <div class="input-group">
            <label for="description-${toolId}">Function Description</label>
            <textarea id="description-${toolId}" placeholder="Enter function description"></textarea>
        </div>
        <div class="parameters" id="parameters-${toolId}">
            <h4>Parameters</h4>
        </div>
        <button onclick="addParameter('${toolId}')">Add Parameter</button>
        <button onclick="removeTool('${toolId}')">Remove Tool</button>
    `;

    document.getElementById('tools').appendChild(toolDiv);
}

function addParameter(toolId) {
    const parameterDiv = document.createElement('div');
    parameterDiv.className = 'parameter';

    parameterDiv.innerHTML = `
        <div class="input-group">
            <label for="param-name-${toolId}-${toolCounter}">Name</label>
            <input type="text" class="param-name" id="param-name-${toolId}-${toolCounter}" placeholder="Enter parameter name">
        </div>
        <div class="input-group">
            <label for="param-type-${toolId}-${toolCounter}">Type</label>
            <select class="param-type" id="param-type-${toolId}-${toolCounter}" onchange="toggleEnumValues('${toolId}', '${toolCounter}', this)">
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
                <option value="array">Array</option>
                <option value="object">Object</option>
                <option value="enum">Enum</option>
            </select>
        </div>
        <div class="input-group">
            <label for="param-description-${toolId}-${toolCounter}">Description</label>
            <textarea class="param-description" id="param-description-${toolId}-${toolCounter}" placeholder="Enter parameter description"></textarea>
        </div>
        <div class="radioDiv">
            <input type="checkbox" class="param-required" id="param-required-${toolId}-${toolCounter}">
            <label for="param-required-${toolId}-${toolCounter}">Required</label>
        </div>
        <div class="enum-values" id="enum-values-${toolId}-${toolCounter}" style="display:none;">
            <label for="enum-values-input-${toolId}-${toolCounter}">Enum Values (comma separated)</label>
            <input type="text" id="enum-values-input-${toolId}-${toolCounter}" placeholder="Enter enum values (e.g., celsius, fahrenheit)">
        </div>
    `;

    document.getElementById(`parameters-${toolId}`).appendChild(parameterDiv);
}

function toggleEnumValues(toolId, toolCounter, selectElement) {
    const enumValuesDiv = document.getElementById(`enum-values-${toolId}-${toolCounter}`);
    if (selectElement.value === 'enum') {
        enumValuesDiv.style.display = 'block';
    } else {
        enumValuesDiv.style.display = 'none';
    }
}

function generateJSON() {
    const tools = [];
    document.querySelectorAll('.tool').forEach(tool => {
        const name = tool.querySelector(`#name-${tool.id}`).value;
        const description = tool.querySelector(`#description-${tool.id}`).value;
        const parameters = [];

        tool.querySelectorAll('.parameter').forEach(param => {
            const paramName = param.querySelector('.param-name').value;
            const paramType = param.querySelector('.param-type').value;
            const paramDescription = param.querySelector('.param-description').value;
            const paramRequired = param.querySelector('.param-required').checked;
            let enumValues = [];

            if (paramType === 'enum') {
                enumValues = param.querySelector(`#enum-values-input-${tool.id}`).value.split(',').map(value => value.trim());
            }

            parameters.push({
                name: paramName,
                type: paramType === 'enum' ? 'string' : paramType,
                description: paramDescription,
                required: paramRequired,
                enum: enumValues.length > 0 ? enumValues : undefined
            });
        });

        tools.push({
            type: 'function',
            function: {
                name,
                description,
                parameters: {
                    type: 'object',
                    properties: parameters.reduce((acc, param) => {
                        acc[param.name] = {
                            type: param.type,
                            description: param.description,
                            enum: param.enum
                        };
                        return acc;
                    }, {}),
                    required: parameters.filter(param => param.required).map(param => param.name)
                }
            }
        });
    });

    document.getElementById('output').textContent = JSON.stringify(tools, null, 4);
    // Copy to clipboard the generated JSON


    return tools;
}

function removeTool(toolId) {
    const toolElement = document.getElementById(toolId);
    toolElement.remove();
}
