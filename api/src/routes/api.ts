import { Router } from 'express'

import { RectangleModel } from 'models';

export const router = Router();

router.get('/', (req, res) => {
  RectangleModel.find({}, (err, rectangles) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json(data);
  });
});

router.post('/create', (req, res) => {
  const rectangle = new RectangleModel({
    name: req.body.name,
    styles: req.body.styles,
  });

  rectangle.save((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json(result);
  });
});
