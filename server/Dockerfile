# Use the desired Node.js version
FROM node:latest

RUN mkdir -p /usr/app/
# Set the working directory inside the container
WORKDIR /usr/app/

# Copy package.json and package-lock.json to the container
COPY package*.json /usr/app/
COPY tsconfig.json /usr/app/

# Install dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . /usr/app/

# Build your TypeScript code
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start"]
