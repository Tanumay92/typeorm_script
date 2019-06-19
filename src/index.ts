import { app } from './config/express';

app.listen(app.get("port"),() => {
 console.log('App started!');
})

module.exports = app;