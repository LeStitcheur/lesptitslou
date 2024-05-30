import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './../css/gallery.css'

// Import images
import depliant from './../assets/images/depliant.jpg'
import depliantPage2 from './../assets/images/depliant-page-2.jpg'
import microCreche from './../assets/images/micro-crèche-default.jpg'
import siesteNord from './../assets/images/sieste_nord_sketch.jpg'
import plan3D1 from './../assets/images/plan3D-1.jpg'
import plan3D2 from './../assets/images/plan3D-2.jpg'
import plan3D3 from './../assets/images/plan3D-3.jpg'

const datas = [
	{
		id: 1,
		image: depliant,
		alt: 'Flyer recto',
	},
	{
		id: 2,
		image: depliantPage2,
		alt: 'Flyer verso',
	},
	{
		id: 3,
		image: siesteNord,
		alt: 'Dessin représentant la sieste nordique',
	},
	{
		id: 4,
		image: plan3D1,
		alt: 'Plan 3D du batiment',
	},
	{
		id: 5,
		image: plan3D2,
		alt: 'Plan 3D du batiment',
	},
	{
		id: 6,
		image: plan3D3,
		alt: 'Plan 3D du batiment',
	},
	{
		id: 7,
		image: microCreche,
		alt: 'Image micro-crèche',
	},
]

export default function Gallery() {
	return (
		<Carousel
			autoPlay
			interval={4000}
			infiniteLoop
			thumbWidth={120}
			showIndicators={false}
			showStatus={false}
			showArrows={false}
			emulateTouch={true}>
			{datas.map((slide) => (
				<div key={slide.id}>
					<img
						src={slide.image}
						alt={slide.alt}
					/>
				</div>
			))}
		</Carousel>
	)
}
