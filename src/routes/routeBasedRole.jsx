import { PrivatePage } from 'components/PrivatePage';
import { ROLE } from '@constants';

/**@typedef {import("react-router-dom").RouteObject} RouteObject*/

/**
 * @typedef {Omit<RouteObject, 'children'> & {roles?: ROLE[], children?: Route[]} } Route*/

/**
 * @param {Route[]} routes
 * @returns {RouteObject[]}
 */
export default function routeBasedRole(routes) {
	return routes.reduce((prev, { roles, element, children, ...current }) => {
		if (element) {
			if (
				roles != null &&
				Object.values(ROLE).some((value) => roles.includes(value))
			) {
				current.element = <PrivatePage roles={roles}>{element}</PrivatePage>;
			} else current.element = element;
		}

		if (children) current.children = routeBasedRole(children);
		return [...prev, current];
	}, []);
}
