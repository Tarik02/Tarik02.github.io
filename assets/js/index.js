const items = [
	{
		label: 'my github',
		icon: 'fab fa-github',
		href: 'https://github.com/Tarik02',
		color: 'black',
	},
	{
		label: 'my twitter',
		icon: 'fab fa-twitter',
		href: 'https://twitter.com/Tarik02_',
		color: 'aqua',
	},
	{
		label: 'my telegram',
		icon: 'fab fa-telegram',
		href: 'https://t.me/Tarik02',
		color: 'blue',
	},
	{
		label: 'my games',
		icon: 'fab fa-steam',
		href: 'https://steamcommunity.com/id/tarik02',
		color: 'gray',
	},
	{
		label: 'my habr',
		icon: 'fa fa-hashtag',
		href: 'https://habr.com/users/tarik02/',
		color: 'gold',
	},
	{
		label: 'my photos',
		icon: 'fab fa-instagram',
		href: 'https://www.instagram.com/tarik02/',
		color: 'pink',
	},
	{
		label: 'write to me',
		icon: 'fa fa-envelope',
		href: 'mailto:Taras.Fomin@gmail.com',
		color: 'red',
	},
	{
		label: 'phone me',
		icon: 'fa fa-phone',
		href: 'tel:+380987450593',
		color: 'green',
	},
	{
		label: 'linked in',
		icon: 'fab fa-linkedin',
		href: 'https://www.linkedin.com/in/tarik02',
		color: 'yellow',
	},
	{
		label: 'vk',
		icon: 'fab fa-vk',
		href: 'https://vk.com/tarik02_dev',
		color: 'khaki',
	},
];

const $circle = document.querySelector('.circle');

items.forEach((item, i) => {
	const angle = 2 * Math.PI - i * Math.PI * 2 / items.length;
	const x = Math.sin(angle);
	const y = Math.cos(angle);


	const $el = document.createElement('a');
	$circle.appendChild($el);

	$el.href = item.href;
	$el.target = '_blank';

	$el.style.left = `${50 + x * 68}%`;
	$el.style.top = `${50 + y * 68}%`;
	$el.style.setProperty('--hover-background', item.color);


	const $icon = document.createElement('i');
	$el.appendChild($icon);

	$icon.classList.add(...item.icon.split(' '));


	const $hover = document.createElement('div');
	$el.appendChild($hover);

	$hover.classList.add('hover');
	if (angle > Math.PI) {
		// left
		$hover.style.right = 'calc(100% + 10px)';
	} else {
		// right
		$hover.style.left = 'calc(100% + 10px)';
	}

	$hover.innerText = item.label;


	const onTransitionEnd = () => {
		$hover.style.visibility = 'hidden';
		$hover.removeEventListener('transitionend', onTransitionEnd);
	};

	$el.addEventListener('mouseover', () => {
		$hover.style.visibility = 'visible';

		setTimeout(() => {
			$hover.style.opacity = null;
		}, 0);
		$hover.removeEventListener('transitionend', onTransitionEnd);
	});

	$el.addEventListener('mouseout', () => {
		$hover.style.opacity = 0;

		$hover.addEventListener('transitionend', onTransitionEnd);
	});
});
