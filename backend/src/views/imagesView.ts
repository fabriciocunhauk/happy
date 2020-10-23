import Orphanage from '../models/Image';

export default {
    render(image: Orphanage) {
        return {
            id: image.id,
            url: `http://192.168.0.13:3333/uploads/${image.path}`
        };
    },

    renderMany(images: Orphanage[]) {
        return images.map(image => this.render(image));
    }
};