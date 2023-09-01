# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy application files
ADD . .

# Expose the port
EXPOSE 3000

# Run the application
CMD ["node", "app/server.js"]
