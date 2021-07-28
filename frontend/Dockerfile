# Dockerfile for React client

# Build React Frontend
FROM node:12.18.1

# Working directory 
WORKDIR /usr/src/

COPY package*.json ./

# Install Dependencies
RUN npm install --silent

# Copy files 
COPY . . 

EXPOSE 3000

CMD ["npm","start"]