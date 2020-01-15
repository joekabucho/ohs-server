 exports.register = (app) => {
    app.use('/api/user', require('./api/users'));
    app.use('/api/files', require('./api/files'));
    app.use('/api/cart', require('./api/cart'));
    app.use('/api/chat', require('./api/chats'));
};