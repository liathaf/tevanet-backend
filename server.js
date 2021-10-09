const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParse = require('cookie-parser');
const session = require('express-session');

const app = express();
const http = require('http').createServer(app);
// const io = require('socket.io')(http);

const dbService = require('./services/db.service');

app.use(cookieParse('keyboard cat'));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 2 , secure: false}
}));

if (process.env.NODE_ENV === 'production') {
    // app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true,
    };
    app.use(cors(corsOptions));
}


const productRoutes = require('./api/product/product.routes');
const contactRoutes = require('./api/contact/contact.routes');
const articleRoutes = require('./api/article/article.routes');
// const authRoutes = require('./api/auth/auth.routes');

app.use('/api/product', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/article', articleRoutes);
// app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3030;

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    
});

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})

