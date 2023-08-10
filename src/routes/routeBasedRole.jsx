import { PrivatePage } from '@components';

/**@typedef {import("react-router-dom").RouteObject} RouteObject*/

/**@typedef {import("../constants/role").ROLE} ROLE*/

/**
 * @typedef {Omit<RouteObject, 'children'> & {roles?: ROLE[], children?: Route[]} } Route
 */

/**
 * @param {Route[]} routes
 * @returns {RouteObject[]}
 */
export default function routeBasedRole(routes) {
	return routes.reduce((prev, { roles, element, children, ...current }) => {
		if (element) {
			if (roles != null) {
				current.element = <PrivatePage roles={roles}>{element}</PrivatePage>;
			} else current.element = element;
		}

		if (children) current.children = routeBasedRole(children);
		return [...prev, current];
	}, []);
}
