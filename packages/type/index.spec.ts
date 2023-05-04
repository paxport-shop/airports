import "jest"
import { Airport } from "./Airport"
import { IataCode } from "./IataCode"
import { IcaoCode } from "./IcaoCode"
// import {Airport from "./index"

describe("Airport-type", () => {
	it("IataCode", () => {
		expect(IataCode.is("MMX")).toBe(true)
		expect(IataCode.is("ARN")).toBe(true)
		expect(IataCode.is("LHR")).toBe(true)

		expect(IataCode.is(undefined)).toBe(false)
		expect(IataCode.is("arn")).toBe(false)
		expect(IataCode.is("OEZL")).toBe(false)
	})
	it("IcaoCode", () => {
		expect(IcaoCode.is("OEZL")).toBe(true)
		expect(IcaoCode.is("VE89")).toBe(true)

		expect(IcaoCode.is(undefined)).toBe(false)
		expect(IcaoCode.is("arn")).toBe(false)
		expect(IcaoCode.is("MMX")).toBe(false)
		expect(IcaoCode.is("ARN")).toBe(false)
		expect(IcaoCode.is("VE89A")).toBe(false)
	})
	it("Airport", () => {
		const mmx = {
			iata: "MMX",
			icao: "ESMS",
			name: "Malmö Airport",
			location: { city: "Malmö", country: "SE" },
			timeZone: "Europe/Stockholm",
		}

		expect(Airport.is(mmx)).toBe(true)

		expect(Airport.is({ ...mmx, timeZone: "+01:00" })).toBe(false)

		expect(Airport.is(undefined)).toBeFalsy() // TODO, change to .toBe(false) after isly PR#12
	})
})
