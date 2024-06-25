# Use a lightweight Node.js image as base
FROM node:20.11.0 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire application to the working directory
COPY . .

# Build the production-ready app
RUN npm run build

# Stage 2: Serve the optimized build with a lightweight HTTP server
FROM node:20.11.0-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build ./build

# Install serve to run a simple HTTP server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the server
CMD ["serve", "-s", "build", "-l", "3000"]
