export class MoneyInventory {

    entries: Array<AccountEntry> = []

    constructor(dukaten: number, silbertaler: number, kreuzer: number, heller: number) {
        this.entries.push(new AccountEntry('Dukaten', dukaten))
        this.entries.push(new AccountEntry('Silbertaler', silbertaler))
        this.entries.push(new AccountEntry('Kreuzer', kreuzer))
        this.entries.push(new AccountEntry('Heller', heller))
    }

    get dukaten(): number {
        return this.entries.find(entry => {
            return entry.unit === 'Dukaten'
        }).amount
    }

    set dukaten(amount: number) {
        this.entries.find(entry => {
            return entry.unit === 'Dukaten'
        }).amount = amount
    }

    get silbertaler(): number {
        return this.entries.find(entry => {
            return entry.unit === 'Silbertaler'
        }).amount
    }

    set silbertaler(amount: number) {
        this.entries.find(entry => {
            return entry.unit === 'Silbertaler'
        }).amount = amount
    }

    get kreuzer(): number {
        return this.entries.find(entry => {
            return entry.unit === 'Kreuzer'
        }).amount
    }

    set kreuzer(amount: number) {
        this.entries.find(entry => {
            return entry.unit === 'Kreuzer'
        }).amount = amount
    }

    get heller(): number {
        return this.entries.find(entry => {
            return entry.unit === 'Heller'
        }).amount
    }

    set heller(amount: number) {
        this.entries.find(entry => {
            return entry.unit === 'Heller'
        }).amount = amount
    }
}

export class AccountEntry {

    constructor(public unit: string, public amount: number) {

    }
}