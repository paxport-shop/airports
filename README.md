# Library for Airports

```
{
	iata: "MMX",
	icao: "ESMS",
	name: "Malmö Airport",
	location: {
		city: "Malmö",
		country": "SE"
	},
	"timeZone":"Europe/Stockholm"
}
```
## Packages

* Contains typescript-type:
`npm i @paxportse/airports-type`

* Contains typescript-type and ALL airports. (500KB-1MB)
`npm i @paxportse/airports-data`

* Contains typescript-type and active airports. (~70KB)
`npm i @paxportse/airports-data-active`

## Edit data

Raw data for airports is in: `packages/data/airports.ts`

Selected airports in `@paxportse/airports-data-active` is defined by `packages/data-active/active.txt`.
To add airports, just add IATA-code to the txt-file. (And make sure it exist in raw-data.)

## NPM-packages

This repo is using [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

`lerna` is only used to bump the version across all packages in a Github-action. (Version is stored in `lerna.json`)
