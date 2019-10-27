import { Router } from 'express'

import { RectangleModel } from 'models';

export const router = Router();

router.get('/', (_req, res) => {
  RectangleModel.find({}, (err, rectangles) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(rectangles);
  });
});

router.get('/:id', (req, res) => {
  RectangleModel.findById(req.params.id, (err, rectangles) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(rectangles);
  });
});

router.post('/', (req, res) => {
  const rectangle = new RectangleModel({
    name: req.body.name,
    styles: req.body.styles,
  });

  rectangle.save((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(result);
  });
});

router.put('/:id', (req, res) => {
  RactangleModel.findOneAndUpdate({ _id: req.param.id }, req.body, (err, rectangle) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json(rectangle);
  });
});
