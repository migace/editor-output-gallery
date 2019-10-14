"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var RectangleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    styles: { type: String, required: true }
});
exports.RectangleModel = mongoose_1.default.model('Rectangle', RectangleSchema);
