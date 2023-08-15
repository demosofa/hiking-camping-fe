import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/query-key';
import { useParams } from 'react-router-dom';
import { getProduct } from 'services/getProduct';

export const useGetProduct = () => {
	const params = useParams();
	return useQuery({
		queryKey: [QUERY_KEY.LIST_PRODUCT],
		queryFn: async () => {
			const { data } = await getProduct(params?.categoryId);
			return data;
		},
	});
};
