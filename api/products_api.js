class ProductsApi {
    constructor() {
        this.elements = [{
            "id": 1,
            "title": "The Very Best of the Doors 2CD",
            "price": 13.07,
            "thumbnail": "https://m.media-amazon.com/images/I/91hrbype4aL._SY355_.jpg"
        },
        {
            "id": 2,
            "title": "Blood Sugar Sex Magik",
            "price": 9.99,
            "thumbnail": "https://m.media-amazon.com/images/I/81hS2wgxbhL._SY355_.jpg"
        },
        {
            "id": 3,
            "title": "Pearl Jam Completely Unplugged Limited Edition",
            "price": 49.77,
            "thumbnail": "https://m.media-amazon.com/images/I/81NDZb-JShL._SY355_.jpg"
        }
    ]
        this.id = 3
    }

    show(id) {
        const elem = this.elements.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    showAll() {
        return [...this.elements]
    }

    save(elem) {
        const newElem = { ...elem, id: ++this.id }
        this.elements.push(newElem)
        return newElem
    }

    update(elem, id) {
        const newElem = { id: Number(id), ...elem }
        const index = this.elements.findIndex(p => p.id == id)
        if (index !== -1) {
            this.elements[index] = newElem
            return newElem
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    delete(id) {
        const index = this.elements.findIndex(elem => elem.id == id)
        if (index !== -1) {
            return this.elements.splice(index, 1)
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    deleteAll() {
        this.elements = []
    }
}

module.exports = ProductsApi
