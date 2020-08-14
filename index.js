"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bot = express();
bot.use(cors({ origin: true }));
bot.post('/', async (req, res) => {
    const telegramText = req.body
        && req.body.message
        && req.body.message.chat
        && req.body.message.chat.id
        && req.body.message.from
        && req.body.message.from.first_name;
    if (telegramText) {
        const chat_id = req.body.message.chat.id;
        const first_name = req.body.message.from.first_name;
        return res.status(200).send({
            method: 'sendmessage',
            chat_id,
            text: ` Hello ${first_name}`
        });
    }
    return res.status(200).send({ status: 'and error occured' });
});
exports.router = functions.https.onRequest(bot);
//# sourceMappingURL=index.js.map