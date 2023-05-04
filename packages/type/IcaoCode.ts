import { isly } from "isly"

export type IcaoCode = string

export namespace IcaoCode {
	export const type = isly.string(/^[A-Z]{2}[A-Z0-9]{2}$/)
	export const is = type.is
}
