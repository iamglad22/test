	# Use official Node.js LTS image
	FROM node:18-alpine
	
	# Set working directory
	WORKDIR /app
	
	# Copy files
	COPY package*.json ./
	RUN npm install
	
	COPY . .
	
	# Expose port
	EXPOSE 80
	
	# Start the app
CMD ["node", "app.js"]