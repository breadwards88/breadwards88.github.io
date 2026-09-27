const traffic = document.getElementById("traffic");
const carColors = ["#6259a5", "#20bca9", "#a1dd4b", "#e9816c", "#b6e6ec", "#a96bb9"];
const carWidth = 90;
const cars = [];

for (let index = 0; index < carColors.length; index++) {
	const car = document.createElement("div");
	car.className = "car";
	car.setAttribute("aria-hidden", "true");
	car.style.setProperty("--car-color", carColors[index]);

	const body = document.createElement("span");
	body.className = "car-body";

	const carWindow = document.createElement("span");
	carWindow.className = "car-window";

	const frontWheel = document.createElement("span");
	frontWheel.className = "wheel wheel-front";

	const backWheel = document.createElement("span");
	backWheel.className = "wheel wheel-back";

	car.append(body, carWindow, frontWheel, backWheel);
	traffic.append(car);

	const upperLane = index < carColors.length / 2;
	const laneIndex = index % (carColors.length / 2);
	const direction = upperLane ? 1 : -1;
	car.style.top = upperLane ? "25%" : "75%";
	car.style.transform = `translateY(-50%) scaleX(${direction})`;

	cars.push({
		element: car,
		x: laneIndex * (window.innerWidth / 3),
		direction,
		speed: 60 + laneIndex * 15
	});
}

let previousTime = 0;

const moveCars = (time) => {
	const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
	previousTime = time;
	for (const car of cars) {
		car.x += car.direction * car.speed * elapsed;
		if (car.direction > 0 && car.x > traffic.clientWidth) {
			car.x = -carWidth;
		} else if (car.direction < 0 && car.x < -carWidth) {
			car.x = traffic.clientWidth;
		}
		car.element.style.left = `${car.x}px`;
	}
	requestAnimationFrame(moveCars);
};
requestAnimationFrame(moveCars);
