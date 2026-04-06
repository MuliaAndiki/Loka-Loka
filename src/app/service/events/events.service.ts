import AxiosClient from '@/app/utils/axios.client';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { formCreateEventsSchema } from '@/app/types/form';

class EventsApi {
  async createEvents(id: string, payload: formCreateEventsSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post(`/event/create/${id}`, payload);
    return res.data;
  }
}

export default new EventsApi();
