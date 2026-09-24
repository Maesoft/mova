import { api } from "./api";

export async function getMyRoutineRequest() {
  const response = await api.get(
    "/routines/me"
  );

  return response.data;
}