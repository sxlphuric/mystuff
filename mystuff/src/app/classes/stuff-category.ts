import { Link } from "./link"

export class StuffCategory {
    title: string
    short: string
    long: string
    links: Link[]
    constructor(title: string, short: string, long: string, links: Link[]) {
        this.title = title
        this.short = short
        this.long = long
        this.links = links
    }
}
