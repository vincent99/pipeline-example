FROM node
WORKDIR /run
COPY built.txt index.js /run/
CMD ["/run/index.js"]
