import { Airport } from "./Airport"
import { IataCode } from "./IataCode"
import { IcaoCode } from "./IcaoCode"

export class AirportData {
	constructor(private airports: Readonly<Record<IataCode, Readonly<Airport>>>) {}
	getFromIata(iata: IataCode): Readonly<Airport> | undefined {
		return this.airports[iata]
	}
	private icaoCache: undefined | Record<IcaoCode, Airport>
	getFromIcao(icao: IcaoCode): Airport | undefined {
		return (this.icaoCache ??= Object.fromEntries(
			Object.values(this.airports)
				.filter(airport => airport.icao)
				.map(airport => [airport.icao, airport])
		))[icao]
	}
}
