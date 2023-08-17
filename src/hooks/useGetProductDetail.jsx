import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/query-key';
import { getProductDetail } from 'services/getProductDetail';

export const useGetProductDetail = (id) => {
	return useQuery({
		queryKey: [QUERY_KEY.PRODUCT_DETAIL],
		queryFn: async () => {
			const { data } = await getProductDetail(id);
			return data;
		},
	});
};
