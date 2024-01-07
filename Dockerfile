FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

RUN #npm run build

# Specify the command to run your Vite app
#CMD ["npm", "run", "serve"]

CMD ["npm", "run", "dev"]

# , "|", ">&1"