const studentRouter = require('./student');
const userRouter = require('./user')
function route(app) {
    app.use('/student', studentRouter);
    app.use('/api/v1/users', userRouter)
}

module.exports = route;
