import AxiosClient from "@/app/utils/axios.client";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formBikinBrandSchema } from "@/app/types/form";

class BrandApi {
  async createBrand(payload: formBikinBrandSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/brand/upgrade-role", payload);
    return res.data;
  }
}

export default new BrandApi();
