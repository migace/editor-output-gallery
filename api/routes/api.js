"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var models_1 = require("models");
var router = express_1.Router();
router.get('/', function (req, res) {
    models_1.RectangleModel.find({}, function (err, rectangles) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(data);
    });
});
router.post('/create', function (req, res) {
    var rectangle = new models_1.RectangleModel({
        name: req.body.name,
        styles: req.body.styles,
    });
    rectangle.save(function (err, result) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});
