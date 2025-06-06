async function askGPT() {
    const userInput = document.getElementById("question").value;

    const apiKey = "YOUR_OPENAI_API_KEY_HERE"; // Get this from https://platform.openai.com/

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful Dollywood assistant." },
                { role: "user", content: userInput }
            ]
        })
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;
    document.getElementById("response").textContent = answer;
}