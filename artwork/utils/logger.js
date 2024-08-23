import { createLogger, format, transports } from 'winston';
import morgan from 'morgan';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new transports.Console()
  ]
});

logger.stream = {
  write: function(message) {
    logger.info(message.trim());
  }
};

export default logger;
