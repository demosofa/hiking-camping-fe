import { Menu } from 'antd';
import { memo } from 'react';
import './menunav.css';
import { Link } from 'react-router-dom';

function MenuNav({ mode = 'horizontal' }) {
	return (
		<Menu
			className="navbar"
			mode={mode}
			items={[
				{
					label: 'Shop',
					className: 'nav-item',
					popupClassName: 'group-nav',
					children: [
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
					],
				},
				{
					label: 'Hiking',
					className: 'nav-item',
					popupClassName: 'group-nav',
					children: [
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
					],
				},
				{
					label: 'Trekking',
					className: 'nav-item',
					popupClassName: 'group-nav',
					children: [
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections/all`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections/all`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections/all`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/collections/all`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
					],
				},
				{
					label: 'Camping',
					className: 'nav-item',
					popupClassName: 'group-nav',
					children: [
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
						{
							type: 'group',
							label: (
								<Link className="group-title" to={`/`}>
									free climbing
								</Link>
							),
							children: [
								{
									label: 'Camping',
								},
							],
							style: { flex: 1 },
						},
					],
				},
			]}
		/>
	);
}

export default memo(MenuNav);
