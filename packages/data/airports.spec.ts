import { Airport, IataCode } from "@paxportse/airports-type"
import { airports } from "./airports"
import { airportData } from "./index"

describe("Airports all", () => {
	it("Check raw data", () => {
		Object.entries(airports).forEach(([iataCode, airport]) => {
			if (!Airport.is(airport))
				console.error(airport, Airport.type.flaw(airport))
			expect(IataCode.is(iataCode)).toBe(true)
			expect(Airport.is(airport)).toBe(true)
			expect(airport.iata).toBe(iataCode)
		})
	})
	it("getFromIata", () => {
		expect(airportData.getFromIata("MMX")).toEqual({
			iata: "MMX",
			icao: "ESMS",
			location: {
				city: "Malmö",
				country: "SE",
			},
			name: "Malmö Airport",
			timeZone: "Europe/Stockholm",
		})
		expect(airportData.getFromIata(undefined as any)).toBeUndefined()
		expect(airportData.getFromIata("mmx")).toBeUndefined()
		expect(airportData.getFromIata("ESMS")).toBeUndefined()
	})

	it("getFromIcao", () => {
		expect(airportData.getFromIcao("ESMS")).toEqual({
			iata: "MMX",
			icao: "ESMS",
			location: {
				city: "Malmö",
				country: "SE",
			},
			name: "Malmö Airport",
			timeZone: "Europe/Stockholm",
		})

		expect(airportData.getFromIcao(undefined as any)).toBeUndefined()
		expect(airportData.getFromIcao("esms")).toBeUndefined()
		expect(airportData.getFromIcao("MMX")).toBeUndefined()
	})
})
