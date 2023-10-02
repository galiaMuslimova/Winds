import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { eID } from "constants/eId";
import {
  CreateEntity,
  Entity,
  EntityResponce,
  UpdateEntity,
} from "types/entity";

export const entityApi = createApi({
  reducerPath: "entityApi",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.244.172.108:8081/v1/outlay-rows/entity/",
  }),
  endpoints: (builder) => ({
    create: builder.mutation<string, void>({
      query: () => ({
        url: `/create`,
        method: "POST",
      }),
    }),

    getList: builder.query<Entity[], void>({
      query: () => `/${eID}/row/list`,
    }),

    createEntity: builder.mutation<EntityResponce, CreateEntity>({
      query: (body) => ({
        url: `/${eID}/row/create`,
        method: "POST",
        body,
      }),
    }),

    updateEntity: builder.mutation<
      EntityResponce,
      { rID: string; body: UpdateEntity }
    >({
      query: ({ rID, body }) => ({
        url: `/${eID}/row/${rID}/update`,
        method: "POST",
        body,
      }),
    }),

    deleteEntity: builder.mutation<EntityResponce, string>({
      query: (rID) => ({
        url: `/${eID}/row/${rID}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetListQuery,
  useCreateEntityMutation,
  useCreateMutation,
  useDeleteEntityMutation,
  useUpdateEntityMutation,
} = entityApi;
