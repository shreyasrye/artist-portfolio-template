import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

// Create a stream object with a 'write' function that `morgan` can use
logger.stream = {
  write: function(message) {
    // Use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message.trim());
  }
};

export default logger;