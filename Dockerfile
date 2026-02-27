FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first for layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy the rest of the application
COPY . .

# Initialize the database (creates schema + default admin)
RUN node db/init.js

EXPOSE 3000

CMD ["node", "server.js"]
