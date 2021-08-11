---
title: okta app create
nav: create
layout: manual
subcommand: true
---

Create an new Okta app

## Usage
```bash
okta apps create [-hV] [--batch] [--verbose] [--app-name=<appName>]
                 [--authorization-server-id=<authorizationServerId>]
                 [--config-file=<configFile>] [--redirect-uri=<redirectUri>]
```

## Options
```
      --app-name=<appName>   Application name to be created, defaults to current directory name
      --authorization-server-id=<authorizationServerId>
                             Okta Authorization Server Id
      --config-file=<configFile>
                             Application config file, will search for:
                              - src/main/resources/application.yml
                              - src/main/resources/application.properties
                              - .okta.env
      --redirect-uri=<redirectUri>
                             OIDC Redirect URI
```

## Shared Options
```
      --batch           Batch mode, will not prompt for user input
  -h, --help            Show this help message and exit.
  -V, --version         Print version information and exit.
      --verbose         Verbose logging
```


