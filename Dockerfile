FROM node:18-alpine

WORKDIR /app

# copy only package manifests
COPY package*.json ./

# install dependencies
RUN npm install --omit=dev

# now copy ONLY the src folder
COPY src ./src

# optionally copy public if you have it
# COPY public ./public

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
