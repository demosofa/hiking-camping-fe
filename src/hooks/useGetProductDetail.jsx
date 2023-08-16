import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/query-key';
import { useParams } from 'react-router-dom';
import { getProductDetail } from 'services/getProductDetail';

export const useGetProductDetail = () => {
	const { id } = useParams();
	return useQuery({
		queryKey: [QUERY_KEY.LIST_PRODUCT],
		queryFn: async () => {
			const { data } = await getProductDetail(id);
			return data;
		},
	});
};
