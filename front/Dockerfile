# Stage 1: Build the Angular application
FROM node:lts
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]