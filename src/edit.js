import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { useState, useEffect, useRef } from "react";
import { Panel, PanelBody, PanelRow } from "@wordpress/components";

import { SwiperSettings } from "./components/SwiperSettings.js";
// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectFade,
	EffectCards,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const allowedBlocks = [["core/image", {}]];

	const swiperElRef = useRef(null);
	// useEffect(() => {
	// 	// listen for Swiper events using addEventListener
	// 	swiperElRef.current.addEventListener("swiperprogress", (e) => {
	// 		const [swiper, progress] = e.detail;
	// 		console.log(progress);
	// 	});

	// 	swiperElRef.current.addEventListener("swiperslidechange", (e) => {
	// 		console.log("slide changed");
	// 	});
	// }, [attributes.sliderSettings]);

	function updateAtts(name, value) {
		setAttributes({ [name]: value });
	}
	console.log(attributes);
	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				<Panel header="My Panel">
					<PanelBody title="Select Featured Posts" initialOpen={true}>
						<PanelRow className="home-banner-panelrow">
							<SwiperSettings
								pagination={{
									value: attributes.pagination,
									callback: updateAtts,
								}}
								navigation={{
									value: attributes.navigation,
									callback: updateAtts,
								}}
								loop={{
									value: attributes.loop,
									callback: updateAtts,
								}}
								effect={{
									value: attributes.effect,
									callback: updateAtts,
								}}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<swiper-container
				slides-per-view="1"
				speed="500"
				loop={attributes.loop}
				effect={attributes.effect}
				navigation={attributes.navigation}
				pagination={attributes.paginaton}
			>
				<InnerBlocks allowedBLocks={allowedBlocks} />
			</swiper-container>
		</section>
	);
}
