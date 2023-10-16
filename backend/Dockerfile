FROM registry.mr.idf.cts/rhscl/nodejs-12-rhel7:5.11.20

USER root

WORKDIR /server

COPY ./ /server

RUN npm config set unsafe-perm true && \
    npm config set registry https://artifactory.idf.cts/artifactory/api/npm/npm/ --global && \
    npm config set strict-ssl false --global

EXPOSE 8080

CMD ["npm", "start"]