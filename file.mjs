import fetch from "node-fetch";
import fs from "fs";


async function updateBanner() {
    const BOT_TOKEN = "Token";
    const imagePath = "Nova-Radio-Bot.png"; // Path to your image

    try {
        const imageData = fs.readFileSync(imagePath);
        const base64Image = imageData.toString('base64');

        const response = await fetch("https://discord.com/api/v10/users/@me", {
            method: "PATCH",
            headers: {
                Authorization: `Bot ${BOT_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ banner: `data:image/png;base64,${base64Image}` }), 
        });

        const data = await response.json();
        
        if (response.ok) {
            console.log('The banner has been successfully updated.');
            console.log(data);
        } else {
            console.error('Banner update failed.');
            console.error(data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

updateBanner();
