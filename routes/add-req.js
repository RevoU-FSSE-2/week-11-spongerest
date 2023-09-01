const { Router } = require('express');
const { createAdd, getAllAdd, updateAddStatus, deleteAdd, getAddHistory } = require('../controller/add');
const { authorizationMiddleware } = require('../middleware/auth.js');

const addReqRouter = Router();

addReqRouter.post('/', authorizationMiddleware({ roles: ['user', 'approver', 'admin'] }), createAdd);
addReqRouter.get('/', authorizationMiddleware({ roles: ['user', 'approver', 'admin'] }), getAllAdd);
addReqRouter.get('/history', authorizationMiddleware({ roles: ['admin'] }), getAddHistory);
addReqRouter.patch('/:id', authorizationMiddleware({ roles: ['approver', 'admin'] }), updateAddStatus);
addReqRouter.delete('/:id', authorizationMiddleware({ roles: ['admin'] }), deleteAdd);

module.exports = addReqRouter;
