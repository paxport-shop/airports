import { AirportData } from "@paxportse/airports-type/dist/AirportData"
import { airports } from "./generated/airports"

export { Airport, IataCode, IcaoCode } from "@paxportse/airports-type"

export const airportData = new AirportData(airports)
