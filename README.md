# Okta CLI Website

## Project setup
```
bundle install
npm install
```

### Compiles and serve for development
```
bundle exec jekyll serve
```

### Compiles and minifies for production
```
JEKYLL_ENV=production bundle exec jekyll build
```

Build output will be saved to the `./dist` directory.

## Development

### Google Tag Manager
The gtag code is specified within `_config.yml`

```
google_tag: GTM-KXMLV58
```

Note: GTag code is only rendered in the `production` environment
configuration.

### CLI Manual

#### CLI Manual navigation link text
The link text used for a command within the CLI Manual side navigation
is specified by the `nav` property within the command's frontmatter.

Example:
```
nav: config
```

#### CLI Manual navigation link order
The display order of links for the CLI Manual side navigation are
defined in `_config.yml` within `collections.manual.order`. Navigation
items will appear in the order specified in the list.

```
order:
  - getting_started.md
  - start.md
  - register.md
  - login.md
  - apps.md
  - apps/config.md
  - apps/create.md
  - apps/delete.md
  - help.md
  - generate-completion.md
```

#### CLI Manual navigation sub-commands
To specify that a Manual navigation item is a sub-command (e.g. `config`,
`create`, and `delete` within `okta apps`), specify `subcommand: true`
within the subcommand's frontmatter.

Example:
```
subcommand: true
```
