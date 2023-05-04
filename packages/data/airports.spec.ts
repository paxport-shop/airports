import { Airport, IataCode } from "@paxportse/airports-type"
import { airports } from "./airports"
import { AirportData } from "./index"

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
		expect(AirportData.getFromIata("MMX")).toEqual({
			iata: "MMX",
			icao: "ESMS",
			location: {
				city: "Malmö",
				country: "SE",
			},
			name: "Malmö Airport",
			timeZone: "Europe/Stockholm",
		})
		expect(AirportData.getFromIata(undefined as any)).toBeUndefined()
		expect(AirportData.getFromIata("mmx")).toBeUndefined()
		expect(AirportData.getFromIata("ESMS")).toBeUndefined()
	})

	it("getFromIcao", () => {
		expect(AirportData.getFromIcao("ESMS")).toEqual({
			iata: "MMX",
			icao: "ESMS",
			location: {
				city: "Malmö",
				country: "SE",
			},
			name: "Malmö Airport",
			timeZone: "Europe/Stockholm",
		})

		expect(AirportData.getFromIcao(undefined as any)).toBeUndefined()
		expect(AirportData.getFromIcao("esms")).toBeUndefined()
		expect(AirportData.getFromIcao("MMX")).toBeUndefined()
	})
})
