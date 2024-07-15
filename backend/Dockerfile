FROM node:lts-slim

RUN groupadd -r nodegroup && useradd -r -g nodegroup nodeuser

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN chown -R nodeuser:nodegroup /app

USER nodeuser

EXPOSE 3000

CMD ["node", "app.js"]
