import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/query-key';
import { getCategory } from '../services/getCategory';
import { useParams } from 'react-router-dom';

export const useGetCategory = () => {
	const params = useParams();
	return useQuery({
		queryKey: [QUERY_KEY.LIST_QUESTION],
		queryFn: async () => {
			const { data } = await getCategory(params?.categoryId);
			return data;
		},
	});
};
