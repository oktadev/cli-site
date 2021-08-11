---
title: okta app delete
nav: delete
layout: manual
subcommand: true
---

Deletes an Okta app

## Usage
```bash
okta apps delete [-fhV] [--batch] [--verbose] <appIds>...
```

## Options
```
      <appIds>...       List of application IDs to be deleted
  -f, --force           Deactivate and delete applications
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
$ okta apps delete 0abcdef1g2HIJk34L5m6
Deactivate and delete application '0abcdef1g2HIJk34L5m6'? [y/N] y
Application '0abcdef1g2HIJk34L5m6' has been deleted
```
