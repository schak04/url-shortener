const URL = require('../models/url');
const {nanoid} = require('nanoid');
const path = require('path');
const fs = require('fs/promises');

function displayUI(_req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
}

async function handleShorteningOfURL(req, res) {
    const originalURL = req.body.originalURL;
    let messageOnFormSubmission = "";
    if (!originalURL) {
        messageOnFormSubmission = "No URL received";
        return res.status(400).send("No URL entered by user! Original URL required!!");
    }
    const shortenedURL = `https://sept.com/${nanoid(6)}`;
    messageOnFormSubmission = `Here is your shortened URL: ${shortenedURL}`;
    
    await URL.create({
        shortened: shortenedURL,
        redirectTo: originalURL
    })

    const data = await fs.readFile(path.join(__dirname, '..', 'index.html'), 'utf8');
    const finalHTML = data.replace('<p id="shortenedURL"></p>', `<p id="shortenedURL">${messageOnFormSubmission}</p>`)
    res.send(finalHTML);
}

module.exports = {
    displayUI,
    handleShorteningOfURL
};