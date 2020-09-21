FROM node:latest
# Copy source code
COPY . /app
# Change working directory
WORKDIR /app
# Install dependencies
RUN npm install
# Expose API port to the outside
EXPOSE 3000
# Launch application
CMD ["npm", "production"]