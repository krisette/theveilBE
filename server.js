const app = require('./app');

const { PORT, HOST_NAME } = process.env;

app.listen(PORT, () => {
  console.log(`the veil is running on http://${HOST_NAME}:${PORT} 🔮`);
});
