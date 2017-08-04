import TelegramBot from 'node-telegram-bot-api';
import emoji from 'node-emoji';
import {
    botToken,
    sevenTroublesOneAnswer,
    pelmenStickerId,
    defaultStickers,
    lambChatUrl,
} from "./constants";
import {
    normalizeCode,
    randomArrayItem,
} from "./util";

const bot = new TelegramBot(botToken, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const sendMessageWithReply = (message) => {
        bot.sendMessage(chatId, message, {
            reply_to_message_id: msg.message_id
        })
    };

    if (msg.new_chat_members) {
        msg.new_chat_members.forEach((member) => {
            bot.restrictChatMember(chatId, member.id, {
                can_send_messages: false
            })
        });
    }

    if (msg.left_chat_member || msg.new_chat_members) {
        bot.deleteMessage(chatId, msg.message_id);
    }

    if (!msg.text) return;

    const message = normalizeCode(msg.text);

    if (sevenTroublesOneAnswer.includes(message)) {
        bot.sendSticker(chatId, pelmenStickerId, {
            reply_to_message_id: msg.message_id
        });
    } else if (message === 'логика62') {
        sendMessageWithReply(lambChatUrl);
    } else if (message === 'салфетка34') {
        bot.sendLocation(chatId, 48.480731, 34.956173);
        bot.sendMessage(chatId, 'Код доезда на левом входе.');
    } else if (message === 'клуб421') {
        sendMessageWithReply('Играет только левый вход.\n6 черных маркеров.\nФормат ответа: слово')
    } else if (message === 'стрела1') {
        sendMessageWithReply(emoji.emojify(':snake::turtle::snake:'));
    } else if (message === 'кастрюля2') {
        sendMessageWithReply(emoji.emojify(':strawberry::banana:'));
    } else if (message === 'лес3') {
        sendMessageWithReply(emoji.emojify(':tomato::eggplant::tomato:'));
    } else if (message === 'комок4') {
        sendMessageWithReply(emoji.emojify(':blue_car::bullettrain_side::blue_car::blue_car:'));
    } else if (message === 'кирпич5') {
        sendMessageWithReply(emoji.emojify(':8ball::8ball:'));
    } else if (message === 'корм6') {
        sendMessageWithReply(emoji.emojify(':hotdog::hamburger::hotdog:'));
    } else {
        bot.sendSticker(chatId, randomArrayItem(defaultStickers), {
            reply_to_message_id: msg.message_id
        });
    }
});