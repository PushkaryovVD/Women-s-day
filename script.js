document.addEventListener("DOMContentLoaded", () => {
	let flyingPaperSound =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/flyingpaper.mp3",
		takingPaperSound =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/takepaper.mp3",
		rotatingPaper =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/paperRotating.mp3",
		stampMachine =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/stampmachine.mp3",
		carelessWhisper =
			"https://github.com/MrGregor228/Notes-For-Piano/blob/master/paper%20sound/george-michael_careless-whisper.mp3?raw=true";

	let firstSound = new Audio();
	firstSound.volume = [0.2];
	firstSound.src = flyingPaperSound;

	let secondSound = new Audio();
	secondSound.volume = [0.2];
	secondSound.src = takingPaperSound;

	let thirdSound = new Audio();
	thirdSound.volume = [0.2];
	thirdSound.src = rotatingPaper;

	let playMusic = new Audio();
	playMusic.volume = [0.2];
	playMusic.src = carelessWhisper;

	let letterWrapper = document.querySelector(".letter-wrapper"),
		paper = document.querySelector(".paper"),
		letterCover = document.querySelector(".letter-closure"),
		leftSideOfLetter = document.querySelector(".left-side"),
		centerOfLetter = document.querySelector(".center"),
		rightSideOfLetter = document.querySelector(".right-side"),
		submitName = document.querySelector(".submit-name"),
		askNameInput = document.querySelector(".ask-name input[type=text]");

	let letterWrapperClicked = false;

	let name = "";

	letterWrapper.addEventListener("click", () => {
		letterWrapper.classList.add("clicked");
		if (!letterWrapperClicked) {
			firstSound.play();
			letterWrapperClicked = true;
		}
	});

	const text1 =
			"We wish you wonderful days,^500 filled with joyful moments, beautiful words, love, and sincerity.^1000 May your wishes come true more often, and may your loved ones surround you with warmth and tenderness,^400 care, and boundless attention.^600 Wishing you happiness that never ends! And a wonderful Spring holiday to you!",
		text2 =
			"May your days be filled with bright colors, and may the most real and incredible miracles happen in your life. I wish you a warm, sunny, and joyful spring, so that you are always surrounded by kind words, good deeds, and the love of your dear ones. Wishing you prosperity, so that peace, comfort, and happiness always fill your home and heart. Happy Women's day!";

	let options = {
		strings: [text1, text2],
		typeSpeed: 60,
		showCursor: false
	};

	let typed;

	letterCover.addEventListener("click", () => {
		letterCover.classList.toggle("opened");
		secondSound.play();
		if (letterCover.classList.contains("opened")) {
			letterCover.title = "Close";
		} else {
			letterCover.title = "Open";
		}

		leftSideOfLetter.classList.toggle("opened");
		centerOfLetter.classList.toggle("opened");
		rightSideOfLetter.classList.toggle("opened");
	});

	askNameInput.addEventListener("input", () => {
		paper.querySelector(".name").textContent =
			"Dear " + askNameInput.value + "!";
		if (askNameInput.value.length < 2) {
			submitName.style.display = "none";
		} else {
			submitName.style.display = "block";
		}
	});
	askNameInput.oninput = () => {
		let keyboardSound = new Audio();
		keyboardSound.src = stampMachine;
		keyboardSound.volume = [0.5];
		keyboardSound.play();
	};

	submitName.addEventListener("click", () => {
		playMusic.play();
		thirdSound.play();
		letterCover.classList.toggle("opened");
		leftSideOfLetter.classList.toggle("opened");
		centerOfLetter.classList.toggle("opened");
		rightSideOfLetter.classList.toggle("opened");
		letterWrapper.classList.add("submitted");
		paper.classList.toggle("watch");
		setTimeout(() => {
			typed = new Typed("#message", options);
		}, 1500);
		document.body.style.opacity = "0";
		setTimeout(() => {
			document.querySelector(".container").style.backgroundImage =
				"url('https://i.ibb.co/DLt3PP0/flowers-374318-1920.jpg')";
			document.body.style.opacity = "1";
		}, 1000);
	});
});
