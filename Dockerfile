
FROM node:12.12 as buildContainer
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build:ssr

FROM node:12.12
WORKDIR /app
COPY --from=buildContainer /app/dist ./dist
EXPOSE 80
ENV PORT 80
CMD [ "node", "dist/server.js" ]
