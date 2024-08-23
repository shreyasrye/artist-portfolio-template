import express from 'express';
import logger from 'morgan';
import fetch from 'node-fetch';
import winston from 'winston';

const app = express();

const eventLogger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'eventbus_logger.log' }),
    new winston.transports.Console()
  ]
});

app.use(logger('combined'));
app.use(express.json());

const servicePorts = [3001, 3002, 3003];

app.post('/events', async (req, res) => {
  const event = req.body;

  eventLogger.info(`(${process.pid}) Event Bus (Received Event) ${event.type}`);

  for (const port of servicePorts) {
    try {
      eventLogger.info(
        `(${process.pid}) Event Bus (Sending Event to ${port}) ${event.type}`
      );

      await fetch(`http://localhost:${port}/events`, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      eventLogger.error(`Error sending event to service on port ${port}: ${err}`);
    }
  }

  res.send({ status: 'OK' });
});

app.listen(4000, () => {
  eventLogger.info(`(${process.pid}) Event Bus Listening on 4000`);
});
