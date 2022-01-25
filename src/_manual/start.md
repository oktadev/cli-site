---
title: okta start
nav: start
layout: manual
---

Creates an [Okta Sample Application](https://github.com/okta-samples/). Available samples are react, angular, vue, react-native, spring-boot, and aspnet-core3.

## Usage
```bash
okta start [-hV] [--batch] [--verbose] [<sampleName>]
```

## Options
```
      [<sampleName>]    Name of sample
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
$ okta start spring-boot
Configuring a new OIDC Application, almost done:
Created OIDC application, client-id: 0abcdef1g2HIJk34L5m6

Change the directory:
    cd spring-boot

Okta configuration written to: src/main/resources/application.properties
Don't EVER commit src/main/resources/application.properties into source control

Run this application with:
    ./mvnw spring-boot:run
```

## Example
```
$ okta start react
Configuring a new OIDC Application, almost done:
Created OIDC application, client-id: 0abcdef1g2HIJk34L5m6
|
Change the directory:
    cd react

Okta configuration written to: .okta.env

Build this example using NPM:

    npm install

And run with:

    npm start
```
