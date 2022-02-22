/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "alice.checkers.checkers";
const baseStoredGame = {
    index: "",
    creator: "",
    game: "",
    turn: "",
    red: "",
    black: "",
};
export const StoredGame = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.game !== "") {
            writer.uint32(26).string(message.game);
        }
        if (message.turn !== "") {
            writer.uint32(34).string(message.turn);
        }
        if (message.red !== "") {
            writer.uint32(42).string(message.red);
        }
        if (message.black !== "") {
            writer.uint32(50).string(message.black);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoredGame };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.game = reader.string();
                    break;
                case 4:
                    message.turn = reader.string();
                    break;
                case 5:
                    message.red = reader.string();
                    break;
                case 6:
                    message.black = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStoredGame };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.game !== undefined && object.game !== null) {
            message.game = String(object.game);
        }
        else {
            message.game = "";
        }
        if (object.turn !== undefined && object.turn !== null) {
            message.turn = String(object.turn);
        }
        else {
            message.turn = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = String(object.red);
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = String(object.black);
        }
        else {
            message.black = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.creator !== undefined && (obj.creator = message.creator);
        message.game !== undefined && (obj.game = message.game);
        message.turn !== undefined && (obj.turn = message.turn);
        message.red !== undefined && (obj.red = message.red);
        message.black !== undefined && (obj.black = message.black);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStoredGame };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.game !== undefined && object.game !== null) {
            message.game = object.game;
        }
        else {
            message.game = "";
        }
        if (object.turn !== undefined && object.turn !== null) {
            message.turn = object.turn;
        }
        else {
            message.turn = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = object.red;
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = object.black;
        }
        else {
            message.black = "";
        }
        return message;
    },
};
