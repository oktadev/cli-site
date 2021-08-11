---
title: okta app config
nav: config
layout: manual
subcommand: true
---

Show an Okta app's configuration

## Usage
```bash
okta apps config [-hV] [--batch] [--verbose] --app=<appName>
```

## Options
```
      --app=<appName>   App ID
```

## Shared Options
```
      --batch           Batch mode, will not prompt for user input
  -h, --help            Show this help message and exit.
  -V, --version         Print version information and exit.
      --verbose         Verbose logging
```

## Example
```
$ okta apps config --app=0abcdef1g2HIJk34L5m6
Name:          okta-react-sample
Client Id:     0abcdef1g2HIJk34L5m6
Issuer:        https://dev-12345678.okta.com/oauth2/default
```
