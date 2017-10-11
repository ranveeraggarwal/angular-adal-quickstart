# Angular 2/4 ADAL Quickstart

An Angular quickstart with ng2-adal (a module based on angular2-adal) plugged in.

If this doesn't work with Angular 2, you can find an example for it on the **Angular2** branch.

## Changelog

### v2.0.0

This repository has been updated to use Angular v4 and ng2-adal v2.0.0. Since there were no tests written for the quickstart example, I have removed them - you can integrate your own testing framework.

## How to Use

1. Rename app/services/secret.service.ts.template to app/services/secret.service.ts and add your  tenant and client ID.
2. Remove secret.service.ts from .gitignore
3. Run `npm install`
4. Run `npm start`

## Getting Token as a String

Use `services/auth.service.ts`. This token needs to be passed as a header for REST service authentication.

## Contributing

I am not actively maintaining this repository (although, I will update it once in a while in case of breaking changes in the library or a major update).  
If you're interested in contributing, do raise an issue/PR and have a look at the CONTRIBUTING.md.  

Here's what you could help me do:
- Webpack integration
- Gulp/Grunt/Bower integration
- Tests/CI
