const path = require('path');
const routes = require('./controllers/');

app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
=======
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
>>>>>>> 61cb3c1e1061cde75346d4a87f9ecf51812e29f1

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');