const URL = require('../models/url');
const {nanoid} = require('nanoid');
const path = require('path');
const fs = require('fs/promises');

function displayUI(_req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
}

function createShortID() {
    return `${nanoid(6)}`;
}

async function handleShorteningOfURL(req, res) {
    const originalURL = req.body.originalURL;
    const shortID = createShortID();
    let messageOnFormSubmission = "";

    try {
        const newURL = await URL.create({
            shortened: shortID,
            redirectTo: originalURL
        })
        const baseURL = `${req.protocol}://${req.get("host")}`;
        messageOnFormSubmission = `Here is your shortened URL: ${baseURL}/${newURL.shortened}`;
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

async function handleRedirectionOfURL(req, res) {
    const id = req.params.shortID;
    const url = await URL.findOne({shortened: id});
    if (!url) return res.status(404).send("Page NOT found");
    res.redirect(url.redirectTo);
}

module.exports = {
    displayUI,
    handleShorteningOfURL,
    handleRedirectionOfURL
};