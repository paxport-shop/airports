import { isly } from "isly"

export type IataCode = string

export namespace IataCode {
	export const type = isly.string(/^[A-Z]{3}$/)
	export const is = type.is
}
