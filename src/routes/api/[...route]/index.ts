import { RequestHandler } from "~/qwik-city/runtime/src";

export const onRequest: RequestHandler<any> = async (event) => {
    return event;
}