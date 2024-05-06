import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { register } from "swiper/element/bundle";
register();

export default function save({ attributes }) {
	console.table(attributes);
	return (
		<section {...useBlockProps.save()}>
			<swiper-container
				slides-per-view="1"
				speed="500"
				loop={attributes.loop}
				effect={attributes.effect}
				navigation={attributes.navigation}
				pagination={attributes.paginaton}
			>
				<InnerBlocks.Content />
			</swiper-container>
		</section>
	);
}
