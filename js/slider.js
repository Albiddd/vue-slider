// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue({
	el: '#app',
	data:{
		slides,
		currentSlide: 0,
		interval: null,
	},
	methods:{
		nextSlide(){
			this.currentSlide++
			if (this.currentSlide > this.slides.length-1){
				this.currentSlide = 0
			}
		},
		prevSlide(){
			this.currentSlide--
			if (this.currentSlide < 0){
				this.currentSlide = this.slides.length-1
			}
		},
		startAutoplay(){
			this.interval = setInterval(this.nextSlide, 3000)
		},
		stopAutoplay(){
			clearInterval(this.interval)
		}
	}
})