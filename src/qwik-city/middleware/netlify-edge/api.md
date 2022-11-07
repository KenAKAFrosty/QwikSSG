## API Report File for "@builder.io/qwik-city"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { Render } from '@builder.io/qwik/server';
import type { RenderOptions } from '@builder.io/qwik/server';

// @alpha (undocumented)
export interface EventPluginContext {
    // (undocumented)
    next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
}

// @alpha (undocumented)
export function qwikCity(render: Render, opts?: QwikCityNetlifyOptions): (request: Request, { next }: EventPluginContext) => Promise<Response>;

// Warning: (ae-forgotten-export) The symbol "QwikCityRequestOptions" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export interface QwikCityNetlifyOptions extends QwikCityRequestOptions {
}

// (No @packageDocumentation comment for this package)

```