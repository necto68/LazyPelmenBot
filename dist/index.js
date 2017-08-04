'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _nodeEmoji = require('node-emoji');

var _nodeEmoji2 = _interopRequireDefault(_nodeEmoji);

var _constants = require('./constants');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _nodeTelegramBotApi2.default(_constants.botToken, { polling: true });

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var sendMessageWithReply = function sendMessageWithReply(message) {
        bot.sendMessage(chatId, message, {
            reply_to_message_id: msg.message_id
        });
    };

    if (msg.new_chat_members) {
        msg.new_chat_members.forEach(function (member) {
            bot.restrictChatMember(chatId, member.id, {
                can_send_messages: false
            });
        });
    }

    if (msg.left_chat_member || msg.new_chat_members) {
        bot.deleteMessage(chatId, msg.message_id);
    }

    if (!msg.text) return;

    var message = (0, _util.normalizeCode)(msg.text);

    if (_constants.sevenTroublesOneAnswer.includes(message)) {
        bot.sendSticker(chatId, _constants.pelmenStickerId, {
            reply_to_message_id: msg.message_id
        });
    } else if (message === 'логика62') {
        sendMessageWithReply(_constants.lambChatUrl);
    } else if (message === 'салфетка34') {
        bot.sendLocation(chatId, 48.480731, 34.956173);
        bot.sendMessage(chatId, 'Код доезда на левом входе.');
    } else if (message === 'клуб421') {
        sendMessageWithReply('Играет только левый вход.\n6 черных маркеров.\nФормат ответа: слово');
    } else if (message === 'стрела1') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':snake::turtle::snake:'));
    } else if (message === 'кастрюля2') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':strawberry::banana:'));
    } else if (message === 'лес3') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':tomato::eggplant::tomato:'));
    } else if (message === 'комок4') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':blue_car::bullettrain_side::blue_car::blue_car:'));
    } else if (message === 'кирпич5') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':8ball::8ball:'));
    } else if (message === 'корм6') {
        sendMessageWithReply(_nodeEmoji2.default.emojify(':hotdog::hamburger::hotdog:'));
    } else {
        bot.sendSticker(chatId, (0, _util.randomArrayItem)(_constants.defaultStickers), {
            reply_to_message_id: msg.message_id
        });
    }
});
//# sourceMappingURL=index.js.map