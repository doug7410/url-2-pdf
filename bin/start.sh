#!/bin/bash

docker run -i --init --cap-add=SYS_ADMIN --rm  -d \
-v .:/app \
-p 8000:8000 \
--name url2pdf \
ghcr.io/puppeteer/puppeteer:latest  \
npm run dev --prefix=/app