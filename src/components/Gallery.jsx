import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Preload } from 'react-preload'
import './../css/gallery.css'

// Import images
import depliant from './../assets/images/depliant.webp'
import depliantPage2 from './../assets/images/depliant-page-2.webp'
import microCreche from './../assets/images/micro-crèche-default.webp'
import siesteNord from './../assets/images/sieste_nord_sketch.webp'
import plan3D1 from './../assets/images/plan3D-1.webp'
import plan3D2 from './../assets/images/plan3D-2.webp'
import plan3D3 from './../assets/images/plan3D-3.webp'

const images = [
	{ depliant },
	{ depliantPage2 },
	{ microCreche },
	{ siesteNord },
	{ plan3D1 },
	{ plan3D2 },
	{ plan3D3 },
]

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
		<Preload
			images={images}
			autoResolveDelay={3000}
			mountChlidren={true}>
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
		</Preload>
	)
}
