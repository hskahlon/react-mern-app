#  Dockerfile for Node Express Backend

FROM node:12.18.1

# Create App Directory
WORKDIR /usr/src/

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

CMD ["npm","start"]