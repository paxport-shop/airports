import * as isoly from "isoly"
export const a = 42
// export type IATA =
export type Airport = {
	iata: string
	icao?: string
	name: string
	location: {
		city: string
		state?: string
		country: isoly.CountryCode.Alpha2
	}
	currency?: isoly.Currency
	timeZone: string
}

const arlanda = {
	iata: "ARN",
	icao: "ESSA",
	name: "Stockholm Arlanda Airport",
	location: { city: "Stockholm", country: "Sweden" },
	currency: "SEK",
	timeZone: "UTC-1",
}
// Time only input on wiki to "M"
export const airports = {}
