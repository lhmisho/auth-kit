# basic-nextjs
## Prerequisite 
- Install Nodejs if not installed
- Install NPM if not installed

## Environment
- Copy ``.env.sample`` to ``.env``
- Update configurations with jo-hukum admin url in ``.env`` file


## Build
- Run following command to build the application
```sybase
npm run build
```

## Deploy
- Install [pm2](http://pm2.keymetrics.io/). You can also use supervisor if you want. But pm2 would be easier 
- Run following command 
```sybase
pm2 start npm --name "next" -- start
```

- Server will be running on port 3000
- Proxy pass domain / subdomain to http://localhost:3000
