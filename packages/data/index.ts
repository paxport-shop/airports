import { Airport } from "@paxportse/airports-type"
import { IataCode } from "@paxportse/airports-type"
import { IcaoCode } from "@paxportse/airports-type"
import { airports } from "./airports"

export { Airport, IataCode, IcaoCode } from "@paxportse/airports-type"

export namespace AirportData {
	export function getFromIata(iata: IataCode): Airport | undefined {
		return airports[iata]
	}
	let icaoCache: undefined | Record<IcaoCode, Airport>
	export function getFromIcao(icao: IcaoCode): Airport | undefined {
		return (icaoCache ??= Object.fromEntries(
			Object.values(airports)
				.filter(airport => airport.icao)
				.map(airport => [airport.icao, airport])
		))[icao]
	}
}
