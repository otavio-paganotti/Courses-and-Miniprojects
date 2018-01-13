document.body.addEventListener('click', function (e) {
	var el = e.target;
	var check = getAncestor(el, 'check') || el;

	if (!el.classList.contains('button') && !check.classList.contains('check')) {
		return;
	}

	var button = getAncestor(el, 'item').querySelector('.button');
	buttonClickHandler(button);
});

var getAncestor = function getAncestor(el, cls) {
	if (el.closest) {
		return el.closest('.' + cls);
	} else {
		while ((el = el.parentElement) && !el.classList.contains(cls)) {}
		return el;
	}
};

var buttonClickHandler = function buttonClickHandler(button) {
	scaleButton(button);
	var contentEl = button.nextElementSibling;
	var svgmenu = contentEl.nextElementSibling;

	contentEl.classList.toggle('slideRight');
	if (contentEl.classList.toggle('slideLeft')) {
		expandMenu(svgmenu);
	} else {
		collapseMenu(svgmenu);
	}
};

var scaleButton = function scaleButton(button) {
	var check = button.previousElementSibling;
	var animates = check.querySelectorAll('animate');

	if (button.classList.contains('expanded')) {
		[button, check].forEach(function (el) {
			el.classList.remove('expanded');
			setTimeout(function () {
				return el.classList.add('collapsed');
			}, 20);
		});

		animates[0].beginElement();
	} else {
		[button, check].forEach(function (el) {
			el.classList.remove('collapsed');
			setTimeout(function () {
				return el.classList.add('expanded');
			}, 20);
		});

		animates[1].beginElement();
	}
};

var expandMenu = function expandMenu(svgmenu) {
	var animates = svgmenu.querySelectorAll('animate');
	var firstDuration = parseInt(animates[1].getAttribute('dur'));
	var secondDuration = parseInt(animates[2].getAttribute('dur'));

	animates[1].beginElement();
	setTimeout(function () {
		return animates[2].beginElement();
	}, firstDuration);
	setTimeout(function () {
		return animates[3].beginElement();
	}, firstDuration + secondDuration);
	animateItems(svgmenu, {
		dur: "0.6s",
		keyPoints: "0; 1",
		keySplines: "0.35 0 1 1",
		from: "0",
		to: "360"
	});
};

var collapseMenu = function collapseMenu(svgmenu) {
	var animates = svgmenu.querySelectorAll('animate');
	var firstDuration = parseInt(animates[2].getAttribute('dur'));
	var secondDuration = parseInt(animates[1].getAttribute('dur'));

	animates[2].beginElement();
	setTimeout(function () {
		return animates[1].beginElement();
	}, firstDuration);
	setTimeout(function () {
		return animates[0].beginElement();
	}, firstDuration + secondDuration);
	animateItems(svgmenu, {
		dur: "0.4s",
		keyPoints: "1; 0",
		keySplines: "0 0 0.65 1",
		from: "360",
		to: "0"
	});
};

var animateItems = function animateItems(svgmenu, cfg) {
	var circles = [].slice.call(svgmenu.querySelectorAll('circle'));

	circles.forEach(function (circle) {
		var animateTransform = circle.querySelector('animateTransform');
		var animateMotion = circle.querySelector('animateMotion');

		animateMotion.setAttribute('dur', cfg.dur);
		animateMotion.setAttribute('keyPoints', cfg.keyPoints);
		animateMotion.setAttribute('keySplines', cfg.keySplines);

		animateTransform.setAttribute('dur', cfg.dur);
		animateTransform.setAttribute('from', cfg.from);
		animateTransform.setAttribute('to', cfg.to);

		animateTransform.beginElement();
		animateMotion.beginElement();
	});
};
setTimeout(function () {
	return document.querySelector('.button').click();
}, 1e3);
setTimeout(function () {
	return document.querySelector('.button').click();
}, 3e3);