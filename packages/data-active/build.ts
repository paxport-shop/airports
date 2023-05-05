import * as fs from "fs"
import { airports } from "../data/airports"

if (!fs.existsSync("./generated")) {
	fs.mkdirSync("./generated")
}

fs.writeFileSync(
	"./generated/airports.ts",
	`import { Airport, IataCode } from "@paxportse/airports-type"\n` +
		`export const airports:Record<IataCode,Airport>=${JSON.stringify(
			Object.fromEntries(
				fs
					.readFileSync("active.txt", "utf-8")
					.split("\n")
					.map(iataCode => [iataCode, airports[iataCode]])
			)
		).replace(/"([^"]+)":/g, "$1:")}`
)
