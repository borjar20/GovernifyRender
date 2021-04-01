FROM node:14-alpine

COPY . .
RUN npm install

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

CMD ["node","index.js"]