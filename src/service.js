import ky from "ky";

const baseApi = ky.extend({ prefixUrl: "apiurl" });

export default function Service(endpoint) {
  this.endpoint = endpoint;

  return {
    save: async object => {
      const { data } = await baseApi
        .post(this.endpoint, { json: object })
        .json();
      return data;
    },
    get: async () => {
      const { data } = await baseApi.get(this.endpoint).json();
      return data;
    },
    update: async object => {
      const { data } = await baseApi
        .patch(this.endpoint, { json: object })
        .json();
      return data;
    },
    delete: async id => {
      const { data } = await baseApi.delete(this.endpoint, {}).json();
      return data;
    }
  };
}
