# URL2PDF

Url2Pdf is a tiny express app that accepts a URL as a query param 
and returns a PDF. Puppeteer is used to open a given URL and covert
to PDF. Since Puppeteer requires Chromium it's important to use
the provided Dockerfile to build and run the app. This eliminates 
the need to install the Chromium binary where ever this app is being 
used.

### Example usage
```node
// call the url2pdf API
const res = await fetch(`http://localhost:8000`, {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({ url: 'https://example.com' }),
});


// here is your PDF!
const pdf = res.buffer()
```

### Local Dev
To develop locally with Docker this repo contains some 
helper scripts
- `./bin/start.sh` - This will start a container and expose it on `localhost:8000`
- `./bin/logs.sh` - See a running log of the Express server
- `./bin/stop.sh` - Stop and remove the container

### Deployment
This app runs in a Docker container and exposes port `8000`. To deploy 
build the container and host where ever you like. 
```shell
docker build -t url2pdf .
```
