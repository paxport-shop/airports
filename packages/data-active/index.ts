import { AirportData } from "@paxport/airports-type/dist/AirportData"
import { airports } from "./generated/airports"

export { Airport, IataCode, IcaoCode } from "@paxport/airports-type"

export const airportData = new AirportData(airports)
