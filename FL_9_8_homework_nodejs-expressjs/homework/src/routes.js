const express = require("express");
const router = express.Router();
const car = require('./handlers/car');
const deleteMiddleware = require('./middlewares/delete-authorization');

router.use(deleteMiddleware.deleteAuth);

router.route('/car')
    .get((_, resp) => {
        resp.status(200);
        resp.json({
            status: 200,
            message: car.getAll()
        });
    })
    .post((req, resp) => {
        const result = car.new(req.body);

        if (result) {
            resp.status(201);
            resp.json(result);
        } else {
            resp.status(409);
            resp.json({
                status: 409,
                message: 'Car already exists.'
            });
        }
    });

router.route('/car/:car_id')
    .get((req, resp) => {
        const result = car.getById(parseInt(req.params.car_id));
        const status = result ? 200 : 404;
        resp.status(status);
        resp.json(result);
    })
    .put((req, resp) => {
        const result = car.update(parseInt(req.params.car_id), req.body);
        const status = result ? 200 : 404;
        resp.status(status);
        resp.json(result);
    })
    .delete((req, resp) => {
        const result = car.delete(parseInt(req.params.car_id));
        const status = result ? 200 : 404;
        resp.status(status);
        resp.json({
            status: status,
            message: result || 'Car was not found.'
        });
    });
module.exports = router;

