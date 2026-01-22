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

    try {
        const shortenedURL = `https://sept.dev/${nanoid(6)}`;
        messageOnFormSubmission = `Here is your shortened URL: ${shortenedURL}`;
        const newURL = await URL.create({
            shortened: shortenedURL,
            redirectTo: originalURL
        })
        console.log("Successfully shortened URL:", newURL);
    }
    catch (err) {
        console.error(err.message);
        messageOnFormSubmission = `Error occurred: ${err.message}`;
        return res.status(400).send(`Error occurred: ${err.message}`);
    }

    const data = await fs.readFile(path.join(__dirname, '..', 'index.html'), 'utf8');
    const finalHTML = data.replace('<p id="shortenedURL"></p>', `<p id="shortenedURL">${messageOnFormSubmission}</p>`)
    res.send(finalHTML);
}

module.exports = {
    displayUI,
    handleShorteningOfURL
};