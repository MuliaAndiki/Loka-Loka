import AxiosClient from "@/app/utils/axios.client";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formUpdateRoleSchema } from "@/app/types/form";

class OrganizerApi {
  async updateRole(payload: formUpdateRoleSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/organizer/upgrade-role", payload);
    return res.data;
  }
}

export default new OrganizerApi();
