export class RoomDto {
    id: string
    title: string
    description: string
    imageUrl: string
    image: string
    price: number

    constructor(id: string, title: string, description: string, imageUrl: string, image: string, price: number) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.image = image
    }
}