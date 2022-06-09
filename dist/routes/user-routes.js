"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("src/entity/User");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({ message: 'metodo get' });
});
router.get('/:id', (req, res) => {
    res.json({ message: 'metodo get id: ${req.params.id}' });
});
router.post('/create', function (req, res) {
    const newUser = User_1.User.create(req.body);
    const result = User_1.User.save(newUser);
    res.json(result);
});
router.put('/', function (req, res) {
    res.json({ message: 'metodo put' });
});
router.delete('/', function (req, res) {
    res.json({ message: 'metodo delete' });
});
exports.default = router;
//# sourceMappingURL=user-routes.js.map