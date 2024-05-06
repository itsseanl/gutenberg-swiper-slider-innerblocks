import { SingleSetting } from "./SingleSetting.js";

export const SwiperSettings = ({ pagination, navigation, loop, effect }) => {
	return (
		<>
			<SingleSetting
				name={"pagination"}
				value={pagination.value}
				callback={pagination.callback}
				options={["true", "false"]}
			/>
			<SingleSetting
				name={"navigation"}
				value={navigation.value}
				callback={navigation.callback}
				options={["true", "false"]}
			/>
			<SingleSetting
				name={"loop"}
				value={loop.value}
				callback={loop.callback}
				options={["true", "false"]}
			/>
			<SingleSetting
				name={"effect"}
				value={effect.value}
				callback={effect.callback}
				options={["cards", "fade"]}
			/>
		</>
	);
};
