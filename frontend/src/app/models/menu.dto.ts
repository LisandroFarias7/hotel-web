export class MenuDto {
    id: string
    title: string
    description: string
    imageUrl: string
    image: string

    constructor(id: string, title: string, description: string, imageUrl: string, image: string) {
        this.id = id
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
        this.image = image
    }
}