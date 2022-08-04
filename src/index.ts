function getCode() {
	const allContainers = document.getElementsByClassName(
		"displayCodeContainer"
	);
	Array.from(allContainers).map((container) => {
		const displayElement: Element =
			container.getElementsByClassName("displayChallenge")[0];
		const topValue = getComputedStyle(displayElement).top;
		const leftValue = getComputedStyle(displayElement).left;
		const widthValue = getComputedStyle(displayElement).width;
		const heightValue = getComputedStyle(displayElement).height;
		const topStyle = topValue
			? `Top : ${getComputedStyle(displayElement).top}\n`
			: "";
		const leftStyle = leftValue
			? `Left : ${getComputedStyle(displayElement).left}\n`
			: "";
		const widthStyle = leftValue
			? `Width : ${getComputedStyle(displayElement).width}\n`
			: "";
		const heightStyle = leftValue
			? `Height : ${getComputedStyle(displayElement).height}\n`
			: "";
		container.getElementsByClassName(
			"codeChallenge"
		)[0].innerHTML = `${topStyle}${leftStyle}${widthStyle}${heightStyle}`;
	});
}
getCode();
