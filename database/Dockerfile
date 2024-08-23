# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy the database initialization script to the container
COPY populateDB.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# Command to run MongoDB
CMD ["mongod", "--auth", "--port", "27017"]


