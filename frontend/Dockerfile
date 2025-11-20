# Use stable Debian-based Node (NOT Alpine)
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the project files
COPY . .

# Expose development port (Vite default: 5173)
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev" , "--" , "--host"]
