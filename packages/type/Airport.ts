import { CountryCode, TimeZone } from "isoly"
import { isly } from "isly"
import { IataCode } from "./IataCode"
import { IcaoCode } from "./IcaoCode"

export type Airport = {
	iata: IataCode
	icao?: IataCode
	name: string
	location: {
		city: string
		state?: string
		country: CountryCode.Alpha2
	}
	timeZone: TimeZone
}

export namespace Airport {
	export const type = isly.object<Airport>({
		iata: IataCode.type,
		icao: IcaoCode.type.optional(),
		name: isly.string(),
		location: isly.object({
			city: isly.string(),
			state: isly.string().optional(),
			country: isly.fromIs("CountryCode.Alpha2", CountryCode.Alpha2.is),
		}),
		timeZone: isly.fromIs("IANA Timezone", TimeZone.is),
	})
	export const is = type.is
}
