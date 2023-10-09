const mongoose = require('mongoose');
const app = require('./app');

const { PORT, HOST_NAME, MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'the-veil',
  })
  .then(() => {
    console.log('connected to mongodb 🐶');
  })
  .catch((err) => {
    console.log('error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`the veil is running on http://${HOST_NAME}:${PORT} 🔮`);
});
