FROM node:lts-buster

# Set working directory. All paths will be relative to WORKDIR.
ARG buildtime_workdir="/usr/src/app"
ENV APP_WORKDIR=${buildtime_workdir}
ENV FAIREST_HOST="localhost"
WORKDIR ${APP_WORKDIR}

# Install dependencies
COPY yarn.lock package.json ./

# Build the app
RUN yarn set version berry && yarn install

# Copy source files
COPY . .

RUN yarn build

# Run the app
CMD [ "yarn", "start"]