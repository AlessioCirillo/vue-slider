
const app = new Vue({

    el: '#app',

    data:{
        indexImages: 0,
        images: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg'
        ]
    },
    methods:{
        nextPhoto(){
            this.indexImages += 1;

            if (this.indexImages > (this.images.length - 1) ){
                this.indexImages = 0;
            }
        },

        prevPhoto(){
            this.indexImages -= 1;

            if (this.indexImages < 0){
                this.indexImages = this.images.length - 1;
            }
        },

        setImages(index){
            this.indexImages = index;
        }
    }
});