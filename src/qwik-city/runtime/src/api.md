## API Report File for "@builder.io/qwik-city"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Component } from '@builder.io/qwik';
import { JSXNode } from '@builder.io/qwik';
import { QwikIntrinsicElements } from '@builder.io/qwik';
import { ResourceReturn } from '@builder.io/qwik';

// @alpha @deprecated (undocumented)
export const Content: Component<    {}>;

// @alpha (undocumented)
export interface ContentHeading {
    // (undocumented)
    id: string;
    // (undocumented)
    level: number;
    // (undocumented)
    text: string;
}

// @alpha (undocumented)
export interface ContentMenu {
    // (undocumented)
    href?: string;
    // (undocumented)
    items?: ContentMenu[];
    // (undocumented)
    text: string;
}

// Warning: (ae-forgotten-export) The symbol "GetEndpointData" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export type DocumentHead<T = unknown> = DocumentHeadValue | ((props: DocumentHeadProps<GetEndpointData<T>>) => DocumentHeadValue);

// @alpha (undocumented)
export interface DocumentHeadProps<T = unknown> extends RouteLocation {
    // (undocumented)
    data: T;
    // (undocumented)
    head: ResolvedDocumentHead;
}

// @alpha (undocumented)
export interface DocumentHeadValue {
    links?: DocumentLink[];
    meta?: DocumentMeta[];
    styles?: DocumentStyle[];
    title?: string;
}

// @alpha (undocumented)
export interface DocumentLink {
    // (undocumented)
    as?: string;
    // (undocumented)
    crossorigin?: string;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    href?: string;
    // (undocumented)
    hreflang?: string;
    // (undocumented)
    id?: string;
    // (undocumented)
    imagesizes?: string;
    // (undocumented)
    imagesrcset?: string;
    // (undocumented)
    integrity?: string;
    // (undocumented)
    key?: string;
    // (undocumented)
    media?: string;
    // (undocumented)
    prefetch?: string;
    // (undocumented)
    referrerpolicy?: string;
    // (undocumented)
    rel?: string;
    // (undocumented)
    sizes?: string;
    // (undocumented)
    title?: string;
    // (undocumented)
    type?: string;
}

// @alpha (undocumented)
export interface DocumentMeta {
    // (undocumented)
    content?: string;
    // (undocumented)
    httpEquiv?: string;
    // (undocumented)
    key?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    property?: string;
}

// @alpha (undocumented)
export interface DocumentStyle {
    // (undocumented)
    key?: string;
    // (undocumented)
    props?: {
        [propName: string]: string;
    };
    // (undocumented)
    style: string;
}

// @alpha @deprecated (undocumented)
export type EndpointHandler<BODY = unknown> = RequestHandler<BODY>;

// Warning: (ae-forgotten-export) The symbol "QwikCityProps" needs to be exported by the entry point index.d.ts
//
// @alpha @deprecated (undocumented)
export const Html: Component<QwikCityProps>;

// @alpha (undocumented)
export const Link: Component<LinkProps>;

// Warning: (ae-forgotten-export) The symbol "AnchorAttributes" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export interface LinkProps extends AnchorAttributes {
    // (undocumented)
    prefetch?: boolean;
}

// @alpha (undocumented)
export const QwikCity: Component<QwikCityProps>;

// @alpha (undocumented)
export interface QwikCityPlan {
    // (undocumented)
    cacheModules?: boolean;
    // Warning: (ae-forgotten-export) The symbol "FallbackRouteData" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    fallbackRoutes?: FallbackRouteData[];
    // Warning: (ae-forgotten-export) The symbol "MenuData" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    menus?: MenuData[];
    // (undocumented)
    routes?: RouteData[];
    // (undocumented)
    trailingSlash?: boolean;
}

// @alpha (undocumented)
export interface RequestContext {
    // (undocumented)
    formData(): Promise<FormData>;
    // (undocumented)
    headers: Headers;
    // (undocumented)
    json(): Promise<any>;
    // (undocumented)
    method: string;
    // (undocumented)
    text(): Promise<string>;
    // (undocumented)
    url: string;
}

// @alpha (undocumented)
export interface RequestEvent {
    // (undocumented)
    abort: () => void;
    // (undocumented)
    next: () => Promise<void>;
    params: RouteParams;
    platform: Record<string, any>;
    // (undocumented)
    request: RequestContext;
    // (undocumented)
    response: ResponseContext;
    // (undocumented)
    url: URL;
}

// Warning: (ae-forgotten-export) The symbol "RequestHandlerResult" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export type RequestHandler<BODY = unknown> = (ev: RequestEvent) => RequestHandlerResult<BODY>;

// @alpha (undocumented)
export type ResolvedDocumentHead = Required<DocumentHeadValue>;

// @alpha (undocumented)
export interface ResponseContext {
    // Warning: (ae-forgotten-export) The symbol "ErrorResponse" needs to be exported by the entry point index.d.ts
    readonly error: (status: number) => ErrorResponse;
    readonly headers: Headers;
    // Warning: (ae-forgotten-export) The symbol "RedirectResponse" needs to be exported by the entry point index.d.ts
    readonly redirect: (url: string, status?: number) => RedirectResponse;
    status: number;
}

// Warning: (ae-forgotten-export) The symbol "ModuleLoader" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export type RouteData = [pattern: RegExp, loaders: ModuleLoader[]] | [pattern: RegExp, loaders: ModuleLoader[], paramNames: string[]] | [
pattern: RegExp,
loaders: ModuleLoader[],
paramNames: string[],
originalPathname: string,
routeBundleNames: string[]
];

// @alpha (undocumented)
export interface RouteLocation {
    // (undocumented)
    readonly href: string;
    // (undocumented)
    readonly params: RouteParams;
    // (undocumented)
    readonly pathname: string;
    // (undocumented)
    readonly query: Record<string, string>;
}

// @alpha (undocumented)
export type RouteParams = Record<string, string>;

// @alpha (undocumented)
export const RouterOutlet: Component<    {}>;

// @alpha (undocumented)
export const ServiceWorkerRegister: () => JSXNode<"script">;

// Warning: (ae-forgotten-export) The symbol "StaticGenerate" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export type StaticGenerateHandler = () => Promise<StaticGenerate> | StaticGenerate;

// Warning: (ae-forgotten-export) The symbol "ContentState" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export const useContent: () => ContentState;

// @alpha (undocumented)
export const useDocumentHead: () => Required<ResolvedDocumentHead>;

// @alpha (undocumented)
export const useEndpoint: <T = unknown>() => ResourceReturn<GetEndpointData<T>>;

// @alpha (undocumented)
export const useLocation: () => RouteLocation;

// Warning: (ae-forgotten-export) The symbol "RouteNavigate" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export const useNavigate: () => RouteNavigate;

// (No @packageDocumentation comment for this package)

```