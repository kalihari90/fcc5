document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".animate-section");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(entry => {
				const animatedElements = entry.target.querySelectorAll("[data-animation]");
				animatedElements.forEach(element => {
					const hasAnimationPlayed = element.dataset.animationPlayed === "true";
					const animation = element.dataset.animation;
					if (entry.isIntersecting && !hasAnimationPlayed) {
						element.classList.add("animate__animated", animation);
						element.dataset.animationPlayed = "true";
					} else if (!entry.isIntersecting && hasAnimationPlayed) {
						element.classList.remove("animate__animated", animation);
						element.dataset.animationPlayed = "false";
					}
				});
			});
		},
		{ threshold: 0.5 }
	);

	sections.forEach(section => {
		observer.observe(section);
	});
});

