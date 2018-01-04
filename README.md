# webapp-configuration
The intention of this webapp is to illustrate how you can setup configuration of a webapp.
## Setup
* `git clone https://github.com/sitevision/webapp-config-example-app.git`
* `cd webapp-config-example-app`
* `npm install`
* `npm run setup`
## Building
* `npm run zip` compress `/src` into `/dist`
* `npm run deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task
* `npm run force-deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task. This will overwrite the current webapp if it has the same webapp-version defined in manifest.json.
