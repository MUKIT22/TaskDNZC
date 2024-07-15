FROM mongo:8.0.0-rc11-jammy

RUN mkdir -p /data/db /data/configdb && chown -R mongodb:mongodb /data/db /data/configdb

USER mongodb

EXPOSE 27017

CMD ["mongod"]


