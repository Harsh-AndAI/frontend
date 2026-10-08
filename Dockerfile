# Stage 1: Build the application
FROM node:20-alpine AS build
 
# Set working directory
WORKDIR /app

# Backend API base URL - baked into the bundle at build time by Vite.
# Without this the frontend falls back to a relative "/api/news" URL and
# ends up calling its own origin instead of the backend.
ARG VITE_BASE_URL=https://anantgrid.backend.prod.andaihub.com
ENV VITE_BASE_URL=$VITE_BASE_URL

# Install dependencies separately for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the application for production
RUN npm run build
 
# Stage 2: Serve the application using a lightweight NGINX server
FROM nginx:1.25-alpine
 
# Set working directory in NGINX
WORKDIR /usr/share/nginx/html
 
# Remove default static files
RUN rm -rf ./*
 
# Copy build output from the first stage
COPY --from=build /app/dist ./
 
# Copy custom NGINX configuration (Optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf
 
# Expose the desired port (9084)
EXPOSE 9084
 
# Start NGINX
CMD ["nginx", "-g", "daemon off;"]