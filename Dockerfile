ARG TAG=18-alpine
FROM node:$TAG

WORKDIR /app/

CMD ["run build"]

ENTRYPOINT ["npm"]
