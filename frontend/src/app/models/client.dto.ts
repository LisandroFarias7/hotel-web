export class ClientDto {
    id: string;
    name: string;
    email: string;
    phone: number;
    cardName: string;
    cardNumber: number;
    cardCode: number;
    dateCard: string;


    constructor(id: string,
                name: string,
                email: string,
                phone: number,
                cardName: string,
                cardNumber: number,
                cardCode: number,
                dateCard: string) {
            this.id = id
            this.name = name
            this.email = email
            this.phone = phone
            this.cardName = cardName
            this.cardNumber = cardNumber
            this.cardCode = cardCode
            this.dateCard = dateCard
    }
}