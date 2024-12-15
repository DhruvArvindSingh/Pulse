import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";


const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
];

let OpenAIHistory = [];
let apiBase = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"
let apiKey = "AIzaSyDSKm-Vt2jPXaRfQqlsMRot0h5_V5NIjbo"
let apiModel = "gemini-2.0-flash-exp"
let supportImages = true
let supportFunctions = true
let imageSize = "1024x768";
let imageHeight = 300 / 15;
let imageWidth = 400 / 15;
const imagePreviewContainer = document.getElementById("image-preview-container");
const uploadedImage = document.getElementById("uploaded-image");
const removeImageBtn = document.getElementById("remove-image-btn");
let uploadedFile = null;
// const imageInput = document.getElementById("image-input");
const imageInput = document.querySelector(".pictureInput")

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        uploadedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            imagePreviewContainer.style.display = "flex";
        };
        reader.readAsDataURL(file);
    }
});

removeImageBtn.addEventListener("click", () => {
    uploadedFile = null;
    uploadedImage.src = "";
    imagePreviewContainer.style.display = "none";
    imageInput.value = "";
});


// Delete chat content and reset the title
function deleteChatDiv() {
    const child = document.querySelector("#chat-box");
    child.innerHTML = '';
    chatTitle.value = '';
}
createOpenChatDiv();
// const tools = [
//     {
//         "type": "function",
//         "function": {
//             "name": "generate_image",
//             "description": "generateimages based on prompt",
//             "parameters": {
//                 "type": "object",
//                 "properties": {
//                     "prompt": {
//                         "type": "string",
//                         "description": "image gen prompt"
//                     }
//                 },
//                 "required": [
//                     "prompt"
//                 ]
//             }
//         }
//     }
// ];

function displayAadhaarForm(name, dob, gender, address, mobileNumber, email, biometricData) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="gender">Gender:</label>
            <input type="text" id="gender" value="${gender}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <div>
            <label for="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" value="${mobileNumber}" />
        </div>
        <div>
            <label for="email">Email ID:</label>
            <input type="email" id="email" value="${email}" />
        </div>
        <div>
            <label for="biometricData">Biometric Data:</label>
            <input type="text" id="biometricData" value="${biometricData}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function displayVoterForm(name, dob, address) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}



function displayPanForm(name, dob, address, mobileNumber, email) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <div>
            <label for="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" value="${mobileNumber}" />
        </div>
        <div>
            <label for="email">Email ID:</label>
            <input type="email" id="email" value="${email}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}



function displayLicenseForm(name, dob, address, medicalCertificate) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <div>
            <label for="medicalCertificate">Medical Certificate:</label>
            <input type="text" id="medicalCertificate" value="${medicalCertificate}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}



function displayPassportForm(name, dob, address, birthCertificate) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <div>
            <label for="birthCertificate">Birth Certificate:</label>
            <input type="text" id="birthCertificate" value="${birthCertificate}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function displayBirthCertForm(name, dob, parentsNames, address) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="parentsNames">Parents' Names:</label>
            <input type="text" id="parentsNames" value="${parentsNames}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function displayRationCardForm(name, dob, address, familyDetails) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <div>
            <label for="familyDetails">Family Details:</label>
            <input type="text" id="familyDetails" value="${familyDetails}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function displayMarksCardForm(name, dob, schoolName, currentClass, rollNumber, marks) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="schoolName">School Name:</label>
            <input type="text" id="schoolName" value="${schoolName}" />
        </div>
        <div>
            <label for="class">Class:</label>
            <input type="text" id="class" value="${currentClass}" />
        </div>
        <div>
            <label for="rollNumber">Roll Number:</label>
            <input type="text" id="rollNumber" value="${rollNumber}" />
        </div>
        <div>
            <label for="marks">Marks:</label>
            <input type="text" id="marks" value="${marks}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}
function displayBankPassbookForm(accountNumber, address) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="accountNumber">Account Number:</label>
            <input type="text" id="accountNumber" value="${accountNumber}" />
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" value="${address}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function displaySchoolLeavingForm(name, dob, schoolName, currentClass, rollNumber, dateOfLeaving) {
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="schoolName">School Name:</label>
            <input type="text" id="schoolName" value="${schoolName}" />
        </div>
        <div>
            <label for="class">Class:</label>
            <input type="text" id="class" value="${currentClass}" />
        </div>
        <div>
            <label for="rollNumber">Roll Number:</label>
            <input type="text" id="rollNumber" value="${rollNumber}" />
        </div>
        <div>
            <label for="dateOfLeaving">Date of Leaving:</label>
            <input type="date" id="dateOfLeaving" value="${dateOfLeaving}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";
    messageDiv.appendChild(contentDiv);
    const chatContainer = document.getElementById('chat-box');
    chatContainer.appendChild(messageDiv);
}

function handleAndDisplayFormData(name, age, dob, aadhar_number) {
    // Create the form div and add fields
    const formDiv = document.createElement('div');
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    formDiv.classList.add('form-container');
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    formDiv.innerHTML = `
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value="${name}" />
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" value="${age}" />
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" value="${dob}" />
        </div>
        <div>
            <label for="aadhar_number">Aadhar Number:</label>
            <input type="text" id="aadhar_number" value="${aadhar_number}" />
        </div>
        <button id="submit-btn">Submit</button>
    `;
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(formDiv);

    contentDiv.className = "assistant-content";

    messageDiv.appendChild(contentDiv);
    // Display the form in the chat container
    const chatContainer = document.getElementById('chat-box'); // Assuming a div with this ID
    chatContainer.appendChild(messageDiv);


}
function createOpenChatDiv() {
    const container = document.querySelector(".openContainer");
    var histories = getAllChatHistories();
    if (!isEmpty(histories)) {
        for (const name in histories) {
            var buttonElement = document.createElement("button");
            buttonElement.innerHTML = '<i class="fa-solid fa-up-right-from-square"></i> ' + name;
            buttonElement.className = name;
            container.appendChild(buttonElement);
            buttonElement.addEventListener("click", () => {
                deleteChatDiv();
                var openHistory = getChatHistoryByName(name);
                OpenAIHistory = [{ role: "system", content: "" }];
                chatTitle.value = name;
                OpenAIHistory = openHistory;
                let index = 0;

                openHistory.forEach(element => {
                    if (element.role === "user") {

                        if (element.content.length === 1) {
                            appendMessage(element.role, element.content[0].text)
                        }
                        else {
                            createImageChatDiv(element.content[1].image_url.url, element.content[0].text)
                        }
                        // else{
                        //     element.content.forEach(content => {
                        //         if(content.type === "text")
                        //         appendMessage(element.role, content.text)
                        //         });
                        //         else{
                        //             createImageChatDiv(content.image_url[0].url, )
                        //         }

                        // }
                    }
                    else if (element.role === "assistant") {
                        appendMessage(element.role, element.content);

                    }

                });
            });
        }
    }
}
function setCommand(role, content) {
    const existingCommandIndex = OpenAIHistory.findIndex(item => item.role === role);
    if (existingCommandIndex !== -1) {
        OpenAIHistory[existingCommandIndex].content = content;
    } else {
        OpenAIHistory.push({ role: role, content: content });
    }
}
function isEmpty(obj) {
    return !Object.keys(obj).length;
}

function closeOpenChatDiv() {
    const openChatDiv = document.querySelector(".openContainer");
    if (openChatDiv) {
        openChatDiv.innerHTML = `
            <button id="newBtn" title="Create a new Chat"><i class="fa-regular fa-edit"></i> New Chat</button>
            <button style="position: absolute; bottom: 110px;" id="import-btn" title="Import all the chats from a file">
                <label for="fileInput"><i class="fa-solid fa-download"></i> Import the Chats
                <input style="display: none;" type="file" accept=".json" id="fileInput"></label>
            </button>
            <button style="position: absolute; bottom: 60px;" id="export-btn" title="Export all the chats to a file">
                <i class="fa-solid fa-upload"></i> Export the Chats
            </button>
            <button style="position: absolute; bottom: 10px;" id="refresh-btn" title="Delete all the chats">
                <i class="fa-solid fa-trash"></i> Delete All Chats
            </button>`;
    }
    const refreshButton = document.getElementById("refresh-btn");

    refreshButton.addEventListener("click", () => {
        if (confirm("Do you want to delete all the chats?")) clearAllChatHistories();
    });
    const exportButton = document.getElementById("export-btn");
    exportButton.addEventListener("click", exportChatHistories);
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        importChatHistories(file);
    });
}
const exportButton = document.getElementById("export-btn");
exportButton.addEventListener("click", exportChatHistories);
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
    storeChatHistory();
});
const clearBtn = document.getElementById("clear-btn");
const refreshButton = document.getElementById("refresh-btn");
const createBtn = document.getElementById("newBtn");
createBtn.addEventListener('click', () => {
    OpenAIHistory = [];
    deleteChatDiv();
});
const chatTitle = document.getElementById("chat-name");
refreshButton.addEventListener("click", () => {
    if (confirm("Do you want to delete all the chats?")) {
        clearAllChatHistories();
        closeOpenChatDiv();
        createOpenChatDiv();
    }
});

function storeChatHistory() {
    const allChatHistories = getAllChatHistories();
    const name = chatTitle.value;
    if (name === "") {
        alert("Enter a chat title first");
        chatTitle.focus();
    } else {
        allChatHistories[name] = OpenAIHistory;
        localStorage.setItem('allChatHistories', JSON.stringify(allChatHistories));
        closeOpenChatDiv();
        createOpenChatDiv();
    }
}

function exportChatHistories() {
    const allChatHistories = getAllChatHistories();
    const json = JSON.stringify(allChatHistories);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_histories.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importChatHistories(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const importedData = JSON.parse(event.target.result);
        localStorage.setItem('allChatHistories', JSON.stringify(importedData));
        closeOpenChatDiv();
        createOpenChatDiv();
    };
    reader.readAsText(file);
}

function getChatHistoryByName(name) {
    const allChatHistories = getAllChatHistories();
    return allChatHistories[name] || [];
}

function getAllChatHistories() {
    const storedChatHistories = localStorage.getItem('allChatHistories');
    return storedChatHistories ? JSON.parse(storedChatHistories) : {};
}

function clearChatHistoryByName(name) {
    const allChatHistories = getAllChatHistories();
    delete allChatHistories[name];
    localStorage.setItem('allChatHistories', JSON.stringify(allChatHistories));
}

function clearAllChatHistories() {
    localStorage.removeItem('allChatHistories');
}




const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");


clearBtn.addEventListener("click", () => {
    if (chatTitle.value) {
        clearChatHistoryByName(chatTitle.value);
        OpenAIHistory = [];
        location.reload();
    }
});

function addCopyButtons() {
    try {
        let codeBlocks = document.querySelectorAll("pre");
        codeBlocks.forEach((block) => {
            let code = block.lastChild;
            let language = code.classList.toString().split("-")[1];
            if (!language) {
                language = "unknown"
            }
            let copyButton = document.createElement("button");
            copyButton.textContent = "Copy";
            copyButton.className = "generate";
            copyButton.onclick = function () {
                navigator.clipboard.writeText(block.textContent);
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = "Copy"; // Reset the button text after a delay
                }, 2000);
            };
            const topBar = document.createElement("div");
            topBar.className = "topBar";
            const p = document.createElement("p");
            p.textContent = `${language}`;
            topBar.appendChild(p);
            topBar.appendChild(copyButton);
            block.parentNode.insertBefore(topBar, block);
        });
    }
    catch (e) {
        console.log("No code blocks found");
    }

}
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]); // Extract only the Base64 part
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

function appendMessage(role, text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    if (role === "user") {
        image.className = "user-image";
        image.setAttribute("src", "user.png");
        messageDiv.appendChild(image);
    } else {
        image.className = "assistant-image";
        image.setAttribute("src", window.assistantPath);
        messageDiv.appendChild(image);

    }
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = marked.parse(text);
    if (role === "user") {
        contentDiv.className = "user-content";
    } else {
        contentDiv.className = "assistant-content";
    }
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function compressImage(blobUrl, quality = 0.6) {
    return new Promise((resolve, reject) => {
        // Convert Blob URL to Blob
        fetch(blobUrl)
            .then(response => response.blob())
            .then(blob => {
                // Use the globally available Compressor class
                new Compressor(blob, {
                    quality: quality, // Adjust compression quality (e.g., 0.6 = 60%)
                    success(compressedBlob) {
                        // Convert compressed Blob to Blob URL
                        const compressedBlobUrl = URL.createObjectURL(compressedBlob);
                        resolve(compressedBlobUrl);
                    },
                    error(err) {
                        reject(err);
                    }
                });
            })
            .catch(err => reject(err));
    });
}


let chatModel = "openai";
let accumulatedCalls = [];
async function sendMessage() {
    sendBtn.disabled = true;
    let userMessage = userInput.value.trim();
    const caption = userMessage || (uploadedFile ? "Describe This Image" : null);
    if (!userMessage && !uploadedFile) return;
    let imageUrl = null;


    let url = apiBase;
    const messageContent = [
        {
            type: "text",
            text: caption,
        },
    ];

    if (uploadedFile) {
        // Compress the image and wait for the result
        const compressedImageUrl = await compressImage(URL.createObjectURL(uploadedFile));

        // Convert the uploaded file to Base64
        const base64Image = await toBase64(uploadedFile);

        // Push the message content with the Base64 image
        messageContent.push({
            type: "image_url",
            image_url: {
                url: `data:image/${uploadedFile.type.split("/")[1]};base64,${base64Image}`,
            },
        });

        // Create the chat div with the compressed image URL
        createImageChatDiv(compressedImageUrl, caption);
    }

    else if (userMessage !== "") {
        appendMessage("user", userMessage);
    }
    createLoadAnimation();
    OpenAIHistory.push({
        role: "user",
        content: messageContent,
    })
    let payload = {
        model: apiModel,
        messages: window.trainingData?.length ? window.trainingData.concat(OpenAIHistory) : OpenAIHistory,
        stream: true,
        ...(Array.isArray(window.tools) && window.tools.length > 0 && { tools: window.tools })
    };

    if (window.chatbotSystemPrompt) {
        setCommand("system", window.chatbotSystemPrompt);
    }

    try {
        if (window.chatbotSystemPrompt) {
            setCommand("system", window.chatbotSystemPrompt);

        }
        // Initialize an object to store accumulated function calls
        let currentIndex = 0; // Index for tracking function calls

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let responsetext = '';
            let functionName = '';
            let tool_id = '';
            let functionArguments = "";
            let isCollectingFunctionArgs = true;
            let areToolsCalled = false;
            const assistantContent = document.getElementsByClassName("assistant-content");

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    if (areToolsCalled) {
                        removeLoadAnimation();
                    }
                    console.log("Stream ended");
                    isCollectingFunctionArgs = false;
                    break;
                }

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split("\n");

                for (let line of lines) {
                    if (line.trim().startsWith("data: ")) {
                        const jsonData = line.replace("data: ", "").trim();

                        if (jsonData === "[DONE]") {
                            continue;
                        }

                        try {
                            const data = JSON.parse(jsonData);

                            if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                                responsetext += data.choices[0].delta.content;
                                if (assistantContent.length > 0) {
                                    assistantContent[assistantContent.length - 1].innerHTML = marked.parse(responsetext);
                                } else {
                                    console.error("No assistant content elements found.");
                                }
                            }

                            const delta = data.choices[0].delta;

                            const toolCall = delta.tool_calls ? delta.tool_calls[0] : null;
                            if (toolCall) {
                                areToolsCalled = true;
                                isCollectingFunctionArgs = true;
                                if (toolCall.id) {
                                    tool_id = toolCall.id;
                                    functionArguments = '';
                                    accumulatedCalls.push({
                                        function_id: tool_id,
                                        function_name: functionName,
                                        function_args: functionArguments
                                    });
                                }


                                if (toolCall.function.name) {
                                    functionName = toolCall.function.name;
                                    console.log("Function name:", functionName);
                                    const existingCallIndex = accumulatedCalls.findIndex(call => call.function_id === tool_id);
                                    if (existingCallIndex !== -1) {
                                        accumulatedCalls[existingCallIndex] = {
                                            function_id: tool_id,
                                            function_name: functionName,
                                            function_args: functionArguments,
                                        };
                                    }

                                }
                                if (toolCall.function.arguments) {
                                    functionArguments += toolCall.function.arguments;
                                    const existingCallIndex = accumulatedCalls.findIndex(call => call.function_id === tool_id);
                                    if (existingCallIndex !== -1) {
                                        accumulatedCalls[existingCallIndex] = {
                                            function_id: tool_id,
                                            function_name: functionName,
                                            function_args: functionArguments,
                                        };
                                    }

                                }
                            }
                        } catch (e) {

                            // console.error("Error parsing JSON:", e);
                        }
                    }
                }
            }

            if (!isCollectingFunctionArgs && areToolsCalled) {
                console.log(accumulatedCalls);

                await processAccumulatedCalls(accumulatedCalls);

                // Reset for the next function call
                functionArguments = "";
                functionName = "";
                isCollectingFunctionArgs = false;
            }
            addCopyButtons();

            if (responsetext) {
                OpenAIHistory.push({ role: "assistant", content: responsetext });

            }
            if (containsFormattedText(responsetext)) {
                generateAndDisplayImages(responsetext, currentStyle);
            }
            
            console.log(OpenAIHistory);
            
        } catch (error) {
            console.error("Fetch failed:", error);
        }
        
        
        sendBtn.disabled = false;
        userInput.value = "";
        imageInput.value = "";
        await buildSuggestions();
    }
    catch {
        //pass
    }
}
async function buildSuggestions() {
    let url = "https://std-openaiproxy.web.val.run/v1/chat/completions";
    let payload = {
        model: "gpt-4o",
        messages: OpenAIHistory.concat({role:"user", content:"You are an advanced assistant designed to anticipate the most probable user responses and provide suggestions based on the ongoing conversation. Your task is to generate one to three highly relevant and contextually appropriate suggestions for the user to select from. The suggestions should aim to guide the user in a seamless and intuitive interaction.The remember should be short and concise not exceeding 50 characters(4-5 words only). You are provided with a existing chat between user and an AI assistant, you are not that assistant you to behave like a user. how user would response of the AI. Act like the you have to answer the message present to you."}),
        stream: true,
        tools: [
            {
                "type": "function",
                "function": {
                    "name": "createSuggestions",
                    "description": "Generate suggestions for the user that represent the most likely responses for their next message.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "first": {
                                "type": "string",
                                "description": "The First or most probable Suggestion."
                            },
                            "second": {
                                "type": "string",
                                "description": "The Second Suggestion."
                            },
                            "third": {
                                "type": "string",
                                "description": "The third suggestion."
                            }
                        },
                        "required": [
                            "first"
                        ]
                    }
                }
            }
        ]
    };
    let currentIndex = 0; // Index for tracking function calls

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer vtwn_2Ca97BQraumTC37dTGXUhJLL8vmY`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let responsetext = '';
        let functionName = '';
        let tool_id = '';
        let functionArguments = "";
        let isCollectingFunctionArgs = true;
        let areToolsCalled = false;

        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                isCollectingFunctionArgs = false;
                break;
            }

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (let line of lines) {
                if (line.trim().startsWith("data: ")) {
                    const jsonData = line.replace("data: ", "").trim();

                    if (jsonData === "[DONE]") {
                        continue;
                    }

                    try {
                        const data = JSON.parse(jsonData);

                        if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                            responsetext += data.choices[0].delta.content;

                        }

                        const delta = data.choices[0].delta;

                        const toolCall = delta.tool_calls ? delta.tool_calls[0] : null;
                        if (toolCall) {
                            areToolsCalled = true;
                            isCollectingFunctionArgs = true;
                            if (toolCall.id) {
                                tool_id = toolCall.id;
                                functionArguments = '';
                                accumulatedCalls.push({
                                    function_id: tool_id,
                                    function_name: functionName,
                                    function_args: functionArguments
                                });
                            }


                            if (toolCall.function.name) {
                                functionName = toolCall.function.name;
                                console.log("Function name:", functionName);
                                const existingCallIndex = accumulatedCalls.findIndex(call => call.function_id === tool_id);
                                if (existingCallIndex !== -1) {
                                    accumulatedCalls[existingCallIndex] = {
                                        function_id: tool_id,
                                        function_name: functionName,
                                        function_args: functionArguments,
                                    };
                                }

                            }
                            if (toolCall.function.arguments) {
                                functionArguments += toolCall.function.arguments;
                                const existingCallIndex = accumulatedCalls.findIndex(call => call.function_id === tool_id);
                                if (existingCallIndex !== -1) {
                                    accumulatedCalls[existingCallIndex] = {
                                        function_id: tool_id,
                                        function_name: functionName,
                                        function_args: functionArguments,
                                    };
                                }

                            }
                        }
                    } catch (e) {

                        // console.error("Error parsing JSON:", e);
                    }
                }
            }
        }

        if (!isCollectingFunctionArgs && areToolsCalled) {
            console.log(accumulatedCalls);

            await processAccumulatedCalls(accumulatedCalls);


            functionArguments = "";
            functionName = "";
            isCollectingFunctionArgs = false;
        }




    } catch (error) {
        console.error("Fetch failed:", error);
    }

}
async function processAccumulatedCalls(Calls) {
    try {
        // Create an array of promises for each function call
        const promises = Calls.map(async (call) => {
            const functionName = call.function_name;
            let args;

            try {
                // Parse the function arguments from the JSON string
                args = JSON.parse(call.function_args);
            } catch (parseError) {
                console.error(`Failed to parse arguments for ${functionName}:`, call.function_args, parseError);
                return; // Skip this call if arguments are invalid
            }

            try {
                // Process each function based on its name
                switch (functionName) {
                    case 'get_current_weather': {
                        const location = args.location;
                        const weatherInfo = await getWeather(location);
                        console.log(weatherInfo);
                        assistantContent[assistantContent.length - 1].innerHTML += weatherInfo;
                        break;
                    }
                    case 'generate_image': {
                        const prompt = args.prompt;
                        const imageUrl = await GenerateImage(prompt, currentStyle);
                        createAssistantImageDiv(imageUrl, "Here is your Image");
                        break;
                    }
                    case 'createSuggestions': {
                        const { first, second, third } = args;

                        // Check if suggestions are provided
                        if (first || second || third) {
                            createSuggestions(
                                first || "",
                                second || "",
                                third || ""
                            );
                        } else {
                            console.log("No suggestions provided.");
                        }
                        break;
                    }
                    case 'displayAadhaarForm': {
                        const { name, dob, gender, address, mobileNumber, email, biometricData } = args;
                        console.log("Handled Aadhaar Data");
                        displayAadhaarForm(name, dob, gender, address, mobileNumber, email, biometricData);
                        break;
                    }
                    case 'displayVoterForm': {
                        const { name, dob, address } = args;
                        console.log("Handled Voter ID Data");
                        displayVoterForm(name, dob, address);
                        break;
                    }
                    case 'displayPanForm': {
                        const { name, dob, address, mobileNumber, email } = args;
                        console.log("Handled PAN Card Data");
                        displayPanForm(name, dob, address, mobileNumber, email);
                        break;
                    }
                    case 'displayLicenseForm': {
                        const { name, dob, address, medicalCertificate } = args;
                        console.log("Handled Driving License Data");
                        displayLicenseForm(name, dob, address, medicalCertificate);
                        break;
                    }
                    case 'displayPassportForm': {
                        const { name, dob, address, birthCertificate } = args;
                        console.log("Handled Passport Data");
                        displayPassportForm(name, dob, address, birthCertificate);
                        break;
                    }
                    case 'displayBirthCertForm': {
                        const { name, dob, parentsNames, address } = args;
                        console.log("Handled Birth Certificate Data");
                        displayBirthCertForm(name, dob, parentsNames, address);
                        break;
                    }
                    case 'displayRationCardForm': {
                        const { name, dob, address, familyDetails } = args;
                        console.log("Handled Ration Card Data");
                        displayRationCardForm(name, dob, address, familyDetails);
                        break;
                    }
                    case 'displayMarksCardForm': {
                        const { name, dob, schoolName, currentClass, rollNumber, marks } = args;
                        console.log("Handled 10th Standard Marks Card Data");
                        displayMarksCardForm(name, dob, schoolName, currentClass, rollNumber, marks);
                        break;
                    }
                    case 'displayBankPassbookForm': {
                        const { accountNumber, address } = args;
                        console.log("Handled Bank Passbook Data");
                        displayBankPassbookForm(accountNumber, address);
                        break;
                    }
                    case 'displaySchoolLeavingCertForm': {
                        const { name, dob, schoolName, currentClass, rollNumber, dateOfLeaving } = args;
                        console.log("Handled School Leaving Certificate Data");
                        displaySchoolLeavingForm(name, dob, schoolName, currentClass, rollNumber, dateOfLeaving);
                        break;
                    }
                    default: {
                        console.warn(`Unknown function: ${functionName}`);
                        break;
                    }
                }
            } catch (executionError) {
                console.error(`Error executing function "${functionName}" with args ${JSON.stringify(args)}:`, executionError);

                // Handle specific function errors
                if (functionName === 'generate_image') {
                    createFailedImagePlaceholder(args.prompt, currentStyle);
                } else if (functionName === 'get_current_weather') {
                    assistantContent[assistantContent.length - 1].innerHTML += "Error fetching weather data. Please try again.";
                }
                // Add additional error handlers if needed
            }
        });

        // Await all promises simultaneously and handle results
        const results = await Promise.allSettled(promises);

        results.forEach((result, index) => {
            if (result.status === "rejected") {
                console.error(`Call ${index} failed:`, result.reason);
            }
        });

        // Clear the accumulated calls after processing
        accumulatedCalls.length = 0;
    } catch (error) {
        console.error("Error processing accumulated calls:", error);
    }
}




async function getWeather(location) {
    // Simulate weather API call
    return `The current weather in ${location} is 22°C with clear skies.`;
}



async function interactWithGptMini(prompt) {
    // Simulate interaction with GPT Mini
    return `GPT Mini response to: ${prompt}`;
}


sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

const startBtn = document.getElementsByClassName('speech-btn')[0];

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US'; // Language
    recognition.interimResults = true;


    startBtn.addEventListener('click', function () {
        if (recognition && recognition.readyState !== 'listening') {
            recognition.start();
            startBtn.innerHTML = '<i class="fa-solid fa-ear-listen"></i>'
        }
    });
    recognition.onstart = function () {
        console.log('Speech recognition started');
        startBtn.classList.add("speech-btn-active");
    };

    recognition.onend = function () {
        console.log('Speech recognition ended');
        startBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        startBtn.classList.remove("speech-btn-active");
    };
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
    };
} else {
    console.error('Speech recognition not supported in this browser');
    startBtn.disabled = true;
}
function removeLoadAnimation() {
    try {
        // Find all elements with the class 'typewriter'
        const typewriterElements = document.querySelectorAll('.typewriter');

        // Check if any such elements exist and remove them
        if (typewriterElements.length > 0) {
            typewriterElements.forEach(element => {
                element.closest('.load-container')?.remove();
            });
        } else {
            console.log('No load animation found.');
        }
    } catch (error) {
        console.error('Error removing load animation:', error);
    }
}


let isLoading = false
function createLoadAnimation() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "load-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    contentDiv.className = "assistant-content";
    var loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = `
    <div class="typewriter">
    <div class="slide"><i></i></div>
    <div class="paper"></div>
    <div class="keyboard"></div>
    </div>`
    contentDiv.appendChild(loaderDiv);
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function createImageLoadAnimation() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "load-container";
    messageDiv.classList.add("imageLoad");
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.className = "assistant-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    contentDiv.className = "assistant-content";
    // const vid = document.createElement("video");
    // vid.setAttribute("src", "../../light.mp4");
    // vid.autoplay = true;
    // vid.muted = true;
    // vid.loop = true;
    // contentDiv.style.background = "#eee4fe";
    // vid.style.height = "200px";
    // vid.style.width = "200px";
    contentDiv.innerHTML = `
<div class="loadContainer">
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
  <path pathLength="360" d="M 56.3752 2 H 7.6248 C 7.2797 2 6.9999 2.268 6.9999 2.5985 V 61.4015 C 6.9999 61.7321 7.2797 62 7.6248 62 H 56.3752 C 56.7203 62 57.0001 61.7321 57.0001 61.4015 V 2.5985 C 57.0001 2.268 56.7203 2 56.3752 2 Z"></path>
  <path pathLength="360" d="M 55.7503 60.803 H 8.2497 V 3.1971 H 55.7503 V 60.803 Z"></path>
  <path pathLength="360" d="M 29.7638 47.6092 C 29.4971 47.3997 29.1031 47.4368 28.8844 47.6925 C 28.6656 47.9481 28.7046 48.3253 28.9715 48.5348 L 32.8768 51.6023 C 32.9931 51.6936 33.1333 51.738 33.2727 51.738 C 33.4533 51.738 33.6328 51.6634 33.7562 51.519 C 33.975 51.2634 33.936 50.8862 33.6692 50.6767 L 29.7638 47.6092 Z"></path>
  <path pathLength="360" d="M 42.3557 34.9046 C 38.4615 34.7664 36.9617 37.6749 36.7179 39.2213 L 35.8587 44.2341 C 35.8029 44.5604 36.0335 44.8681 36.374 44.9218 C 36.4084 44.9272 36.4424 44.9299 36.476 44.9299 C 36.7766 44.9299 37.0415 44.7214 37.0918 44.4281 L 37.9523 39.4076 C 37.9744 39.2673 38.544 35.9737 42.311 36.1007 C 42.6526 36.1124 42.9454 35.8544 42.9577 35.524 C 42.9702 35.1937 42.7006 34.9164 42.3557 34.9046 Z"></path>
  <path pathLength="360" d="M 13.1528 55.5663 C 13.1528 55.8968 13.4326 56.1648 13.7777 56.1648 H 50.2223 C 50.5674 56.1648 50.8472 55.8968 50.8472 55.5663 V 8.4339 C 50.8472 8.1034 50.5674 7.8354 50.2223 7.8354 H 13.7777 C 13.4326 7.8354 13.1528 8.1034 13.1528 8.4339 V 55.5663 Z"></path>
  <path pathLength="360" d="M 25.3121 26.5567 C 24.9717 27.4941 25.0042 28.8167 25.0634 29.5927 C 23.6244 29.8484 20.3838 31.0913 18.9478 37.0352 C 18.5089 37.5603 17.8746 38.1205 17.2053 38.7114 C 16.2598 39.546 15.2351 40.4515 14.4027 41.5332 V 20.5393 H 23.7222 C 23.7178 22.6817 24.1666 25.4398 25.3121 26.5567 Z"></path>
  <path pathLength="360" d="M 49.5975 43.4819 C 48.3838 39.1715 46.3138 33.6788 43.4709 29.7736 C 42.6161 28.5995 40.7095 27.0268 39.6852 26.1818 L 39.6352 26.1405 C 39.4176 24.783 39.1158 22.5803 38.8461 20.5394 H 49.5976 V 43.4819 Z"></path>
  <path pathLength="360" d="M 29.8161 45.151 C 29.0569 44.7516 28.3216 44.4344 27.6455 44.185 C 27.6488 44.0431 27.6397 43.8917 27.6478 43.7715 C 27.9248 39.7036 30.4491 36.2472 35.1502 33.4979 C 38.7221 31.4091 42.2682 30.5427 42.3036 30.5341 C 42.3563 30.5213 42.416 30.5119 42.4781 30.5037 C 42.6695 30.7681 42.8577 31.0407 43.0425 31.3217 C 42.1523 31.4917 39.6591 32.0721 37.0495 33.6188 C 34.2273 35.2912 30.7775 38.4334 29.9445 44.0105 C 29.9025 44.2924 29.8211 45.0524 29.8161 45.151 Z"></path>
  <path pathLength="360" d="M 32.2021 33.6346 C 29.1519 33.8959 26.6218 32.5634 25.6481 31.4461 C 25.9518 30.3095 28.4436 28.4847 30.2282 27.4911 C 30.436 27.3755 30.5563 27.1556 30.5372 26.9261 L 30.4311 25.6487 C 30.5264 25.6565 30.622 25.6621 30.7181 25.6642 L 30.8857 25.6672 C 32.0645 25.6912 33.2094 25.302 34.1059 24.5658 L 34.112 24.5607 L 34.4024 32.5344 C 33.8302 32.8724 33.2863 33.2227 32.7728 33.5852 C 32.5227 33.6032 32.3068 33.6258 32.2021 33.6346 Z"></path>
  <path pathLength="360" d="M 27.8056 17.9207 C 27.8041 17.9207 27.8025 17.9207 27.8012 17.9207 L 27.0155 17.9259 L 26.8123 15.4718 C 26.8174 15.4609 26.8238 15.4501 26.8282 15.4389 C 27.2218 15.0856 28.158 14.3463 29.1923 14.252 C 31.0985 14.0778 33.442 14.3386 33.8213 16.5565 L 34.0564 23.0299 L 33.2927 23.6566 C 32.6306 24.2004 31.7888 24.4889 30.9118 24.4703 L 30.7437 24.4673 C 29.7977 24.4473 28.8841 24.0555 28.2376 23.3933 C 27.9671 23.1152 27.748 22.7967 27.5871 22.4474 C 27.426 22.0961 27.3292 21.7272 27.2989 21.3494 L 27.1145 19.1223 L 27.8097 19.1178 C 28.1548 19.1154 28.4327 18.8457 28.4303 18.5152 C 28.4278 18.186 28.1487 17.9207 27.8056 17.9207 Z"></path>
  <path pathLength="360" d="M 38.4358 26.5433 C 38.4589 26.6829 38.5326 26.8101 38.6443 26.9026 L 38.8697 27.0889 C 39.5266 27.6307 40.6931 28.5938 41.5811 29.4829 C 40.6409 29.7428 38.2545 30.4762 35.6283 31.8516 L 35.3161 23.281 C 35.316 23.2777 35.3158 23.2743 35.3157 23.271 L 35.0692 16.4785 C 35.0682 16.455 35.0659 16.4316 35.0621 16.4082 C 34.6703 13.9692 32.4875 12.7498 29.0741 13.0603 C 28.5659 13.1067 28.0885 13.255 27.6614 13.4468 C 28.321 12.6324 29.4568 11.8605 31.3984 11.8605 C 32.892 11.8605 34.2086 12.4323 35.3118 13.5599 C 36.3478 14.6187 36.9981 15.9821 37.1923 17.5023 C 37.5097 19.987 38.0932 24.4655 38.4358 26.5433 Z"></path>
  <path pathLength="360" d="M 25.6994 17.1716 L 26.053 21.4425 C 26.094 21.9536 26.225 22.4539 26.4434 22.93 C 26.6613 23.403 26.9574 23.8335 27.3242 24.2106 C 27.833 24.7317 28.4641 25.128 29.1549 25.3746 L 29.2609 26.6526 C 28.8063 26.9219 27.959 27.4459 27.0978 28.0926 C 26.7982 28.3177 26.5261 28.5365 26.2766 28.7503 C 26.2677 27.9385 26.3477 27.0941 26.6128 26.699 C 26.7087 26.5561 26.7368 26.3807 26.6898 26.2168 C 26.6428 26.0528 26.5253 25.9159 26.3667 25.8398 C 25.2812 25.3198 24.639 20.7943 25.134 18.7283 C 25.2757 18.1366 25.4822 17.6126 25.6994 17.1716 Z"></path>
  <path pathLength="360" d="M 14.4025 54.9677 V 43.9616 C 15.1297 42.1745 16.6798 40.8031 18.052 39.5917 C 18.5756 39.1296 19.0771 38.6852 19.5054 38.243 C 20.1455 38.2763 21.8243 38.4721 22.2856 39.611 C 22.526 40.696 22.9861 41.6387 23.6573 42.3985 C 23.7809 42.5383 23.9573 42.6104 24.1347 42.6104 C 24.2773 42.6104 24.4206 42.5639 24.5381 42.4688 C 24.8014 42.2553 24.8343 41.8776 24.6115 41.6252 C 22.2978 39.0062 23.8504 34.5445 23.8663 34.4997 C 23.9782 34.1872 23.8046 33.8471 23.4785 33.7397 C 23.1507 33.6321 22.7964 33.7986 22.6843 34.1111 C 22.6657 34.1631 22.2262 35.4024 22.1149 37.0253 C 22.0992 37.2529 22.0927 37.476 22.0916 37.6958 C 21.4663 37.3478 20.7678 37.1827 20.215 37.1057 C 21.266 32.9598 23.2109 31.5061 24.4867 30.9973 C 24.4164 31.2001 24.3769 31.3974 24.3692 31.5894 C 24.3639 31.7208 24.404 31.8501 24.4831 31.9575 C 25.0708 32.7551 26.1363 33.5207 27.4065 34.0584 C 28.2686 34.4232 29.5576 34.8194 31.1457 34.861 C 28.2499 37.3877 26.6257 40.39 26.4009 43.6936 C 26.3992 43.7195 26.3962 43.7461 26.3928 43.7729 C 25.1023 43.399 24.2167 43.2969 24.1252 43.2873 C 23.9888 43.2728 23.8487 43.3023 23.7304 43.3716 C 23.0495 43.7702 22.591 44.3922 22.4046 45.1703 C 22.2331 45.8868 22.3106 46.6885 22.6019 47.3807 C 22.0046 47.6438 21.3269 47.7784 20.7914 47.848 C 19.4939 45.6912 20.8219 44.6351 20.989 44.5146 C 21.2655 44.3207 21.3274 43.9492 21.1268 43.6822 C 20.9253 43.4139 20.5346 43.3533 20.2546 43.5462 C 19.4539 44.0983 18.406 45.6195 19.3656 47.7888 C 18.685 47.5329 17.6255 46.8145 17.8055 44.832 C 17.8836 43.9718 18.1884 43.3352 18.7117 42.9403 C 19.5815 42.2834 20.8198 42.451 20.8366 42.4537 C 21.1748 42.503 21.4952 42.2819 21.5494 41.9563 C 21.6037 41.6297 21.3713 41.3231 21.0306 41.2712 C 20.9582 41.2599 19.2558 41.0142 17.9494 41.9917 C 17.1375 42.5992 16.6703 43.5199 16.5605 44.7282 C 16.1991 48.7092 19.7376 49.1126 19.7732 49.116 C 19.7951 49.1182 22.2326 49.1079 23.7782 48.1211 C 23.8053 48.1039 24.4158 47.7528 24.4158 47.7528 C 24.5214 47.8841 24.6624 48.0532 24.8294 48.2438 L 22.3598 49.4874 C 22.1544 49.5908 22.0257 49.7949 22.0257 50.0171 V 51.8127 C 22.0257 52.1432 22.3054 52.4112 22.6505 52.4112 S 23.2754 52.1432 23.2754 51.8127 V 50.3786 L 25.6987 49.1582 C 26.021 49.4709 26.3894 49.7985 26.7963 50.1188 L 24.6627 50.7144 C 24.4768 50.7663 24.3269 50.8977 24.2559 51.0702 L 23.3968 53.1651 C 23.2704 53.4729 23.4286 53.8202 23.7498 53.9409 C 23.8248 53.9694 23.9023 53.9825 23.9782 53.9825 C 24.2277 53.9825 24.4632 53.8384 24.5599 53.6028 L 25.307 51.7814 L 28.0879 51.0053 C 28.5412 51.2713 29.0239 51.51 29.5341 51.6979 C 29.6079 51.7252 29.6836 51.738 29.7582 51.738 C 30.0092 51.738 30.246 51.592 30.3415 51.3542 C 30.4653 51.0457 30.3048 50.6994 29.9825 50.5808 C 27.1642 49.5423 25.2952 46.9394 25.2771 46.9138 C 25.1245 46.6979 24.8439 46.6013 24.5831 46.6746 L 23.7537 46.9082 C 23.5672 46.4465 23.5125 45.8992 23.623 45.4377 C 23.7168 45.046 23.9138 44.7341 24.21 44.508 C 25.267 44.6734 29.863 45.5842 33.2732 49.2905 C 33.3967 49.4247 33.569 49.4932 33.7423 49.4932 C 33.889 49.4932 34.0364 49.444 34.1551 49.3437 C 34.414 49.1251 34.439 48.747 34.2108 48.4989 C 33.9947 48.2641 33.7738 48.0421 33.5507 47.8278 L 38.211 47.0175 C 38.3595 47.0014 40.1672 46.8356 41.295 48.2161 C 41.4182 48.3671 41.6019 48.4458 41.7875 48.4458 C 41.9222 48.4458 42.0578 48.4043 42.1721 48.3186 C 42.4439 48.1148 42.4919 47.7386 42.2791 47.4784 C 40.6703 45.5094 38.1379 45.8184 38.0305 45.8327 C 38.0218 45.8339 38.0132 45.8353 38.0043 45.8368 L 32.3855 46.8136 C 31.945 46.4667 31.4998 46.1528 31.0557 45.8697 C 31.0618 45.5534 31.0651 45.1775 31.0836 44.9842 C 31.1138 44.6713 31.1524 44.3635 31.1997 44.0606 C 31.8329 40.0032 34.0061 36.8432 37.6695 34.6587 C 40.6334 32.8915 43.5195 32.4536 43.5682 32.4464 C 43.604 32.4413 43.663 32.4341 43.7302 32.4251 C 47.2229 38.3378 49.3982 46.7588 49.5976 49.5158 V 54.9673 H 14.4025 Z"></path>
  <path pathLength="360" d="M 49.5975 9.0325 V 19.3422 H 38.689 C 38.5937 18.6105 38.5061 17.9301 38.4329 17.3569 C 38.2063 15.5828 37.4422 13.9868 36.2237 12.7413 C 34.8748 11.3624 33.2514 10.6633 31.3984 10.6633 C 27.3688 10.6633 25.8233 13.5309 25.556 15.0901 C 25.1526 15.5932 24.3175 16.7856 23.916 18.46 C 23.8568 18.7069 23.8106 19.0066 23.7778 19.3421 H 14.4025 V 9.0323 H 49.5975 Z"></path>
  <path pathLength="360" d="M 30.2223 21.2875 C 30.5674 21.2875 30.8471 21.0195 30.8471 20.6889 V 18.92 L 31.9916 18.9675 C 32.3376 18.9833 32.628 18.7259 32.643 18.3956 C 32.658 18.0654 32.3907 17.786 32.0459 17.7717 L 30.2495 17.6969 C 30.077 17.6889 29.9133 17.7497 29.7902 17.8624 C 29.6671 17.9753 29.5976 18.1315 29.5976 18.2948 V 20.6889 C 29.5974 21.0195 29.8772 21.2875 30.2223 21.2875 Z"></path>

</svg>

<a href="#" class="btn-shine">Illustrating...</a>

</div>
`;
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function createImageChatDiv(source, userMessage) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.className = "user-image";
    image.setAttribute("src", "user.png");
    messageDiv.appendChild(image);
    contentDiv.className = "user-content";
    const sentImage = document.createElement("img");
    sentImage.className = "sent-image";
    sentImage.src = source;
    contentDiv.appendChild(sentImage);
    if (userMessage != "") {
        const para = document.createElement("p");
        para.textContent = userMessage;
        para.className = "para-text";
        contentDiv.appendChild(para);
    }
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function deleteImageLoadAnimation() {
    const messageDiv = document.querySelector(".imageLoad");
    removeLoadAnimation();
    if (messageDiv) {
        messageDiv.remove();
    }
    else {
        console.log("No Loading Found");
    }
}



async function GenerateImage(prompt, style) {
    if (!isLoading) {
        isLoading = true
        createImageLoadAnimation();
    }
    const response = await fetch("https://api.xet.one/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer XET-fu4iW3CxhXnWZC5JCJlO4tKo8jPZ2krF5rwwQ8SB"
        },
        body: JSON.stringify({
            prompt: prompt + style,
            model: "flux-dev",
            size: imageSize
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;
    deleteImageLoadAnimation();
    isLoading = false
    return imageUrl;
}
function createAssistantImageDiv(source, userMessage) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");

    image.className = "user-image";
    image.setAttribute("src", window.assistantPath);
    messageDiv.appendChild(image);
    let imageUrl = source;
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("genImage");
    imageDiv.style.background = `url(${imageUrl})`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.height = `${imageHeight}vw`;
    imageDiv.style.width = `${imageWidth}vw`;
    // Add download button
    const downloadButton = document.createElement("button");
    downloadButton.innerHTML = "<i class='fa-solid fa-download'></i>";
    downloadButton.classList.add("download-btn");
    downloadButton.addEventListener("click", () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `generated_image.png`;
        link.click();
    });

    imageDiv.appendChild(downloadButton);

    // Fullscreen Toggle Button for Modal
    const fullscreenButton = document.createElement("button");
    fullscreenButton.innerHTML = "<i class='fa-solid fa-expand'></i>";
    fullscreenButton.classList.add("download-btn");

    // Add functionality to show image in the modal
    fullscreenButton.addEventListener("click", () => {
        showFullscreenModal(imageUrl); // Pass the correct image URL
    });

    imageDiv.appendChild(fullscreenButton);
    contentDiv.append(imageDiv);
    contentDiv.className = "user-content";

    if (userMessage != "") {
        const para = document.createElement("p");
        para.textContent = userMessage;
        para.className = "para-text";
        contentDiv.appendChild(para);
    }
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    return messageDiv; // Add this line to return the created messageDiv
}

function getText(text) {
    const matches = text.match(/\$(.*?)\$/g);
    return matches ? matches.map(match => match.slice(1, -1).trim()) : [];
}

function containsFormattedText(text) {
    return /\$.*?\$/.test(text);
}
async function generateAndDisplayImages(responsetext, currentStyle) {
    const prompts = getText(responsetext);
    const imagePromises = prompts.map(prompt => GenerateImage(prompt, currentStyle));
    const results = await Promise.allSettled(imagePromises);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            createAssistantImageDiv(result.value, "Here is your Image");
        } else {
            createFailedImagePlaceholder(prompts[index], currentStyle);
        }
    });
}

function createFailedImagePlaceholder(prompt, style) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");

    image.className = "user-image";
    image.setAttribute("src", "bot.png");
    messageDiv.appendChild(image);

    contentDiv.className = "user-content";

    const errorText = document.createElement("p");
    errorText.textContent = "Image generation failed. Try again:";
    errorText.className = "error-text";
    contentDiv.appendChild(errorText);

    const retryButton = document.createElement("button");
    retryButton.className = "generate";
    retryButton.textContent = "Retry";
    retryButton.addEventListener("click", async () => {
        retryButton.disabled = true; // Disable the button to prevent multiple clicks
        try {
            const imageUrl = await GenerateImage(prompt, style);
            const newImageDiv = createAssistantImageDiv(imageUrl, "Here is your Image");
            messageDiv.replaceWith(newImageDiv);
        } catch (error) {
            console.error("Retry failed:", error);
            errorText.textContent = "Image generation failed again. May be try again later."
            retryButton.disabled = false; // Re-enable retry if it fails again
        }
    });

    contentDiv.appendChild(retryButton);
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

const settingsBtn = document.getElementById("settingsButton")
const settingsOverlay = document.getElementById("settingsOverlay");
settingsBtn.addEventListener("click", () => {
    settingsOverlay.style.display = "flex";
})

const baseUrl = document.getElementById("baseUrl");
const apiKeyInput = document.getElementById("apiKey");
const systemMessage = document.getElementById("systemprompt");
const settingsSaveButton = document.getElementById("saveSettingsBtn")
const apiModelSelector = document.getElementById("apiModelSelector");
const sizeSelctor = document.getElementById("size-Selector");
sizeSelctor.addEventListener('change', (event) => {
    imageSize = event.target.value;
    switch (imageSize) {
        case "1024x1024":
            imageHeight = 300 / 15;
            imageWidth = 300 / 15;
            break;
        case "768x1024":
            imageHeight = 400 / 15;
            imageWidth = 300 / 15;
            break;
        case "1024x768":
            imageHeight = 300 / 15;
            imageWidth = 400 / 15;
            break;
        default:
            break;
    }
});
apiModelSelector.addEventListener('change', (event) => {
    chatModel = event.target.value;
    SetCredentials();
});
SetCredentials();
function SetCredentials() {
    if (chatModel == "gpt-4o") {
        apiBase = "https://std-openaiproxy.web.val.run/v1/chat/completions"
        apiKey = "vtwn_2Ca97BQraumTC37dTGXUhJLL8vmY"
        apiModel = "gpt-4o";
        supportImages = true;
        supportFunctions = true
    }
    else if (chatModel == "grok") {
        apiBase = "https://api.x.ai/v1/chat/completions"
        apiKey = "xai-pQlBc2J8VbLbXlxmwMz0tjDf5GSyFpKPqbwtaUvYjvffrPB4PfPIxRER5O98rs0QO5tDHfazMH94t8ZP"
        apiModel = "grok-beta";
        supportImages = false;
        supportFunctions = false;
    } else if (chatModel == "shuttle") {
        apiBase = "https://api.shuttleai.com/v1/chat/completions"
        apiKey = "shuttle-2fb54eb2e673794889ab"
        apiModel = "shuttle-3";
        supportImages = true;
        supportFunctions = true;
    }
    else if (chatModel == "flash") {
        apiBase = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"
        apiKey = 'AIzaSyDSKm-Vt2jPXaRfQqlsMRot0h5_V5NIjbo'
        apiModel = "gemini-2.0-flash-exp"
        supportImages = true
        supportFunctions = true
    }
    else if (chatModel == "pro") {
        apiBase = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"
        apiKey = 'AIzaSyDSKm-Vt2jPXaRfQqlsMRot0h5_V5NIjbo'
        apiModel = "gemini-1.5-pro"
        supportImages = true
        supportFunctions = true
    }
    baseUrl.value = apiBase
    apiKeyInput.value = apiKey
    if (supportImages == false) {
        imageInput.disabled = true
    }
    else {
        imageInput.disabled = false
    }
}

settingsSaveButton.addEventListener("click", () => {
    apiBase = baseUrl.value;
    apiKey = apiKeyInput.value;
    settingsOverlay.style.display = "none";
})

const chatbtn = document.getElementById("promptChatBtn");
chatbtn.addEventListener("click", () => {
    textContainer.classList.remove("hidden");
    imageContainer.classList.add("hidden");
    chatSidebar.classList.remove("hidden");
    imageSidebar.classList.add("hidden");
    promptContainer.classList.add("hidden");
    textGenerationBtn.click();
    closeModal();
});
let imageSystem = `You are a talented image prompt enhancer When presented with a basic idea or description of an image, your task is to transform and elevate it into a vivid engaging prompt. Add creative elements such as:

Detailed Setting: Describe the environment, time of day, and ambiance (e.g., a sun-drenched meadow at dawn, or a shadowy forest under a full moon).

Color: Specify dominant colors and contrasts to evoke moods (e.g., warm oranges and deep reds for sunset, or cool blues and grays for a winter).

**Textures and Materials: Incorporate details about surfaces and to bring depth (e.g., a shimmering lake surface rough bark on ancient trees).

Emotional Tone: Convey the atmosphere feeling of the scene (e.g., serene, chaotic, mysterious).

Dynamic Elements: Introduce action or movement if applicable (e.g., leaves rustling the wind, animals in motion).

Creative Characters: Add imaginative subjects or figures, including their expressions actions, to enrich the scene (e.g., a creature dancing, or a thoughtful person gazing the distance).

Your enhanced prompt should paint a picture that inspires vivid imagery. If the original idea is short, be as creative as possible, and ensure the description captures a well-rounded visual narrative. RESPONSE FORMAT: response must solely contain the enhanced prompt, with additional commentary or instructions. Remember this structure!`
const enhancebtn = document.getElementById("optimise");
enhancebtn.addEventListener("click", enhancePrompt);

async function enhancePrompt() {
    const API_KEY = "AIzaSyDSKm-Vt2jPXaRfQqlsMRot0h5_V5NIjbo";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: imageSystem
    });
    const magicWand = document.querySelector("#modify");
    magicWand.classList.add("magic");
    if (prompt.value != null) {
        const chat = model.startChat({ enhancehistory: [{ "role": "user", "parts": prompt.value }], generationConfig: { maxOutputTokens: 100000 } });
        let userMessage = prompt.value;
        try {

            const result = await chat.sendMessageStream(userMessage);
            let text = '';
            for await (const chunk of result.stream) {
                const chunkText = await chunk.text();
                console.log(chunkText);
                text += chunkText;
                changeHeight();
                prompt.value = text;
            }

        } catch (error) {
            console.log(error);
        }
        finally {
            magicWand.classList.remove("magic");
        }
    }
    else {
        alert("Prompt cannot be empty");
    }
};


document.getElementById("sidebarCollapse").addEventListener("click", function () {
    const chatSidebar = document.querySelector(".chatSidebar");
    const imageSidebar = document.querySelector(".imageSidebar")
    if (chatSidebar.classList.contains("activeBar") && !chatSidebar.classList.contains("hidden")) {
        chatSidebar.classList.remove("activeBar");
        document.querySelector(".wrapper").classList.remove("activeBar");
    } else {
        if (!chatSidebar.classList.contains("hidden")) {
            chatSidebar.classList.add("activeBar");
            document.querySelector(".wrapper").classList.add("activeBar");
        }
    }
    if (imageSidebar.classList.contains("activeBar") && !imageSidebar.classList.contains("hidden")
    ) {
        imageSidebar.classList.remove("activeBar");
        document.querySelector(".wrapper").classList.remove("activeBar");
    }
    else {
        if (!imageSidebar.classList.contains("hidden")) {
            imageSidebar.classList.add("activeBar");
            document.querySelector(".wrapper").classList.add("activeBar");
        }
    }
});

function createSuggestions(suggestion01, suggestion02, suggestion03) {
    const chatContainer = document.querySelector(".chat-container");
    const existingSuggestionDiv = document.querySelector(".suggestion");

    // Collect only the valid suggestions
    const suggestions = [suggestion01, suggestion02, suggestion03].filter(Boolean);

    // Check if there are any suggestions to display
    if (suggestions.length > 0) {
        const newSuggestionsHTML = suggestions
            .map(suggestion => `
                <button class="suggestion-button generate">
                    <span>${suggestion}</span>
                </button>
            `)
            .join("");

        if (existingSuggestionDiv) {
            // If suggestions already exist, update their content
            existingSuggestionDiv.innerHTML = newSuggestionsHTML;
        } else {
            // If suggestions do not exist, create a new suggestion container
            const suggestionDiv = document.createElement("div");
            suggestionDiv.className = "suggestion";
            suggestionDiv.innerHTML = newSuggestionsHTML;

            const userFunction = document.querySelector(".user-input-container");
            chatContainer.after(suggestionDiv, userFunction);

            
        }

        // Add click event listeners to suggestion buttons
        const suggestionButtons = document.querySelectorAll(".suggestion-button");
        suggestionButtons.forEach(button => {
            button.addEventListener("click", () => {
                const suggestion = button.textContent.trim();
                const userInput = document.querySelector(".user-input");
                const sendBtn = document.querySelector("#send-btn");
                userInput.value = suggestion;
                sendBtn.click();
            });
        });
    } else {
        // If no suggestions, remove existing suggestion container if it exists
        if (existingSuggestionDiv) {
            existingSuggestionDiv.remove();
        }
        console.log("No suggestions to display.");
    }
}