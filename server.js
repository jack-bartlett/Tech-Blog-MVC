const path = require('path');
const express = require('express');
const express = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('.ulities/helpers');

const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Dont tell anyone',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({
        db: sequelize,
    })
};

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

