---
title: okta help
nav: help
layout: manual
---

Displays help information about the specified command

## Usage
```bash
okta help [-h] [COMMAND...]
```

## Options
When no COMMAND is given, the usage help for the main command is displayed.
If a COMMAND is specified, the help for that command is shown.
```
      [COMMAND...]   The COMMAND to display the usage help message for.
```

## Shared Options
```
  -h, --help            Show this help message and exit.
```

## Example
```
$ okta help
Usage: okta [-hV] [--batch] [--verbose] [COMMAND]
The Okta CLI helps you configure your applications to use Okta.
      --batch           Batch mode, will not prompt for user input
  -h, --help            Show this help message and exit.
  -V, --version         Print version information and exit.
      --verbose         Verbose logging
Commands:
  register             Sign up for a new Okta account
  login                Authorizes the Okta CLI tool
  apps                 Manage Okta apps
  start                Creates an Okta Sample Application
  help                 Displays help information about the specified command
  generate-completion  Generate bash/zsh completion script for okta.
```

