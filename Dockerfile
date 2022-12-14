from node:16-alpine
WORKDIR /app
# Only copy package* before installing to make better use of cache
COPY package*.json .
RUN npm install
# Copy everything
COPY . .
EXPOSE 3000
CMD ["npm","start"]