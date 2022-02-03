import * as misc from './misc'
let window: jest.SpyInstance;

export function mockFetch(status: number, data?: { [key: string]: string }) {
    const response = { status, json: () => Promise.resolve(data) };
    window = jest.spyOn(misc, "getGlobalObject");
    window.mockReturnValue({ fetch: () => Promise.resolve(response) });
}