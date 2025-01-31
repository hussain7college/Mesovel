(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/77259_@trpc_client_dist_2eb94e._.js", {

"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/createChain.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createChain": (()=>createChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
;
/** @internal */ function createChain(opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
        function execute(index = 0, op = opts.op) {
            const next = opts.links[index];
            if (!next) {
                throw new Error('No more links to execute - did you forget to add an ending link?');
            }
            const subscription = next({
                op,
                next (nextOp) {
                    const nextObserver = execute(index + 1, nextOp);
                    return nextObserver;
                }
            });
            return subscription;
        }
        const obs$ = execute();
        return obs$.subscribe(observer);
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TRPCClientError": (()=>TRPCClientError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-client] (ecmascript)");
;
function isTRPCClientError(cause) {
    return cause instanceof TRPCClientError || /**
     * @deprecated
     * Delete in next major
     */ cause instanceof Error && cause.name === 'TRPCClientError';
}
function isTRPCErrorResponse(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(obj) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(obj['error']) && typeof obj['error']['code'] === 'number' && typeof obj['error']['message'] === 'string';
}
function getMessageFromUnknownError(err, fallback) {
    if (typeof err === 'string') {
        return err;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(err) && typeof err['message'] === 'string') {
        return err['message'];
    }
    return fallback;
}
class TRPCClientError extends Error {
    static from(_cause, opts = {}) {
        const cause = _cause;
        if (isTRPCClientError(cause)) {
            if (opts.meta) {
                // Decorate with meta error data
                cause.meta = {
                    ...cause.meta,
                    ...opts.meta
                };
            }
            return cause;
        }
        if (isTRPCErrorResponse(cause)) {
            return new TRPCClientError(cause.error.message, {
                ...opts,
                result: cause
            });
        }
        return new TRPCClientError(getMessageFromUnknownError(cause, 'Unknown error'), {
            ...opts,
            cause: cause
        });
    }
    constructor(message, opts){
        const cause = opts?.cause;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/tc39/proposal-error-cause
        super(message, {
            cause
        });
        this.meta = opts?.meta;
        this.cause = cause;
        this.shape = opts?.result?.error;
        this.data = opts?.result?.error.data;
        this.name = 'TRPCClientError';
        Object.setPrototypeOf(this, TRPCClientError.prototype);
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TRPCUntypedClient": (()=>TRPCUntypedClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$createChain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/createChain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$operators$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/operators.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
;
;
;
class TRPCUntypedClient {
    $request(opts) {
        const chain$ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$createChain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChain"])({
            links: this.links,
            op: {
                ...opts,
                context: opts.context ?? {},
                id: ++this.requestId
            }
        });
        return chain$.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$operators$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["share"])());
    }
    async requestAsPromise(opts) {
        try {
            const req$ = this.$request(opts);
            const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableToPromise"])(req$);
            const data = envelope.result.data;
            return data;
        } catch (err) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(err);
        }
    }
    query(path, input, opts) {
        return this.requestAsPromise({
            type: 'query',
            path,
            input,
            context: opts?.context,
            signal: opts?.signal
        });
    }
    mutation(path, input, opts) {
        return this.requestAsPromise({
            type: 'mutation',
            path,
            input,
            context: opts?.context,
            signal: opts?.signal
        });
    }
    subscription(path, input, opts) {
        const observable$ = this.$request({
            type: 'subscription',
            path,
            input,
            context: opts?.context,
            signal: opts.signal
        });
        return observable$.subscribe({
            next (envelope) {
                switch(envelope.result.type){
                    case 'state':
                        {
                            opts.onConnectionStateChange?.(envelope.result);
                            break;
                        }
                    case 'started':
                        {
                            opts.onStarted?.({
                                context: envelope.context
                            });
                            break;
                        }
                    case 'stopped':
                        {
                            opts.onStopped?.();
                            break;
                        }
                    case 'data':
                    case undefined:
                        {
                            opts.onData?.(envelope.result.data);
                            break;
                        }
                }
            },
            error (err) {
                opts.onError?.(err);
            },
            complete () {
                opts.onComplete?.();
            }
        });
    }
    constructor(opts){
        this.requestId = 0;
        this.runtime = {};
        // Initialize the links
        this.links = opts.links.map((link)=>link(this.runtime));
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createTRPCUntypedClient": (()=>createTRPCUntypedClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs [app-client] (ecmascript)");
;
function createTRPCUntypedClient(opts) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCUntypedClient"](opts);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$createTRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCClient.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clientCallTypeToProcedureType": (()=>clientCallTypeToProcedureType),
    "createTRPCClient": (()=>createTRPCClient),
    "createTRPCClientProxy": (()=>createTRPCClientProxy),
    "getUntypedClient": (()=>getUntypedClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-client] (ecmascript)");
;
;
const clientCallTypeMap = {
    query: 'query',
    mutate: 'mutation',
    subscribe: 'subscription'
};
/** @internal */ const clientCallTypeToProcedureType = (clientCallType)=>{
    return clientCallTypeMap[clientCallType];
};
/**
 * @internal
 */ function createTRPCClientProxy(client) {
    const proxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRecursiveProxy"])(({ path, args })=>{
        const pathCopy = [
            ...path
        ];
        const procedureType = clientCallTypeToProcedureType(pathCopy.pop());
        const fullPath = pathCopy.join('.');
        return client[procedureType](fullPath, ...args);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlatProxy"])((key)=>{
        if (client.hasOwnProperty(key)) {
            return client[key];
        }
        if (key === '__untypedClient') {
            return client;
        }
        return proxy[key];
    });
}
function createTRPCClient(opts) {
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCUntypedClient"](opts);
    const proxy = createTRPCClientProxy(client);
    return proxy;
}
/**
 * Get an untyped client from a proxy client
 * @internal
 */ function getUntypedClient(client) {
    return client.__untypedClient;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/getFetch.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFetch": (()=>getFetch)
});
const isFunction = (fn)=>typeof fn === 'function';
function getFetch(customFetchImpl) {
    if (customFetchImpl) {
        return customFetchImpl;
    }
    if (typeof window !== 'undefined' && isFunction(window.fetch)) {
        return window.fetch;
    }
    if (typeof globalThis !== 'undefined' && isFunction(globalThis.fetch)) {
        return globalThis.fetch;
    }
    throw new Error('No fetch implementation found');
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/contentTypes.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isFormData": (()=>isFormData),
    "isNonJsonSerializable": (()=>isNonJsonSerializable),
    "isOctetType": (()=>isOctetType)
});
function isOctetType(input) {
    return input instanceof Uint8Array || // File extends from Blob but is only available in nodejs from v20
    input instanceof Blob;
}
function isFormData(input) {
    return input instanceof FormData;
}
function isNonJsonSerializable(input) {
    return isOctetType(input) || isFormData(input);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/dataLoader.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-non-null-assertion */ /**
 * A function that should never be called unless we messed something up.
 */ __turbopack_esm__({
    "dataLoader": (()=>dataLoader)
});
const throwFatalError = ()=>{
    throw new Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
};
/**
 * Dataloader that's very inspired by https://github.com/graphql/dataloader
 * Less configuration, no caching, and allows you to cancel requests
 * When cancelling a single fetch the whole batch will be cancelled only when _all_ items are cancelled
 */ function dataLoader(batchLoader) {
    let pendingItems = null;
    let dispatchTimer = null;
    const destroyTimerAndPendingItems = ()=>{
        clearTimeout(dispatchTimer);
        dispatchTimer = null;
        pendingItems = null;
    };
    /**
   * Iterate through the items and split them into groups based on the `batchLoader`'s validate function
   */ function groupItems(items) {
        const groupedItems = [
            []
        ];
        let index = 0;
        while(true){
            const item = items[index];
            if (!item) {
                break;
            }
            const lastGroup = groupedItems[groupedItems.length - 1];
            if (item.aborted) {
                // Item was aborted before it was dispatched
                item.reject?.(new Error('Aborted'));
                index++;
                continue;
            }
            const isValid = batchLoader.validate(lastGroup.concat(item).map((it)=>it.key));
            if (isValid) {
                lastGroup.push(item);
                index++;
                continue;
            }
            if (lastGroup.length === 0) {
                item.reject?.(new Error('Input is too big for a single dispatch'));
                index++;
                continue;
            }
            // Create new group, next iteration will try to add the item to that
            groupedItems.push([]);
        }
        return groupedItems;
    }
    function dispatch() {
        const groupedItems = groupItems(pendingItems);
        destroyTimerAndPendingItems();
        // Create batches for each group of items
        for (const items of groupedItems){
            if (!items.length) {
                continue;
            }
            const batch = {
                items
            };
            for (const item of items){
                item.batch = batch;
            }
            const promise = batchLoader.fetch(batch.items.map((_item)=>_item.key));
            promise.then(async (result)=>{
                await Promise.all(result.map(async (valueOrPromise, index)=>{
                    const item = batch.items[index];
                    try {
                        const value = await Promise.resolve(valueOrPromise);
                        item.resolve?.(value);
                    } catch (cause) {
                        item.reject?.(cause);
                    }
                    item.batch = null;
                    item.reject = null;
                    item.resolve = null;
                }));
                for (const item of batch.items){
                    item.reject?.(new Error('Missing result'));
                    item.batch = null;
                }
            }).catch((cause)=>{
                for (const item of batch.items){
                    item.reject?.(cause);
                    item.batch = null;
                }
            });
        }
    }
    function load(key) {
        const item = {
            aborted: false,
            key,
            batch: null,
            resolve: throwFatalError,
            reject: throwFatalError
        };
        const promise = new Promise((resolve, reject)=>{
            item.reject = reject;
            item.resolve = resolve;
            if (!pendingItems) {
                pendingItems = [];
            }
            pendingItems.push(item);
        });
        if (!dispatchTimer) {
            dispatchTimer = setTimeout(dispatch);
        }
        return promise;
    }
    return {
        load
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/signals.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Like `Promise.all()` but for abort signals
 * - When all signals have been aborted, the merged signal will be aborted
 * - If one signal is `null`, no signal will be aborted
 */ __turbopack_esm__({
    "allAbortSignals": (()=>allAbortSignals),
    "raceAbortSignals": (()=>raceAbortSignals)
});
function allAbortSignals(...signals) {
    const ac = new AbortController();
    const count = signals.length;
    let abortedCount = 0;
    const onAbort = ()=>{
        if (++abortedCount === count) {
            ac.abort();
        }
    };
    for (const signal of signals){
        if (signal?.aborted) {
            onAbort();
        } else {
            signal?.addEventListener('abort', onAbort, {
                once: true
            });
        }
    }
    return ac.signal;
}
/**
 * Like `Promise.race` but for abort signals
 *
 * Basically, a ponyfill for
 * [`AbortSignal.any`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static).
 */ function raceAbortSignals(...signals) {
    const ac = new AbortController();
    for (const signal of signals){
        if (signal?.aborted) {
            ac.abort();
        } else {
            signal?.addEventListener('abort', ()=>ac.abort(), {
                once: true
            });
        }
    }
    return ac.signal;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/transformer.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @internal
 */ /**
 * @internal
 */ __turbopack_esm__({
    "getTransformer": (()=>getTransformer)
});
function getTransformer(transformer) {
    const _transformer = transformer;
    if (!_transformer) {
        return {
            input: {
                serialize: (data)=>data,
                deserialize: (data)=>data
            },
            output: {
                serialize: (data)=>data,
                deserialize: (data)=>data
            }
        };
    }
    if ('input' in _transformer) {
        return _transformer;
    }
    return {
        input: _transformer,
        output: _transformer
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/httpUtils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchHTTPResponse": (()=>fetchHTTPResponse),
    "getBody": (()=>getBody),
    "getInput": (()=>getInput),
    "getUrl": (()=>getUrl),
    "httpRequest": (()=>httpRequest),
    "jsonHttpRequester": (()=>jsonHttpRequester),
    "resolveHTTPLinkOptions": (()=>resolveHTTPLinkOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$getFetch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/getFetch.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/transformer.mjs [app-client] (ecmascript)");
;
;
function resolveHTTPLinkOptions(opts) {
    return {
        url: opts.url.toString(),
        fetch: opts.fetch,
        transformer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformer"])(opts.transformer),
        methodOverride: opts.methodOverride
    };
}
// https://github.com/trpc/trpc/pull/669
function arrayToDict(array) {
    const dict = {};
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        dict[index] = element;
    }
    return dict;
}
const METHOD = {
    query: 'GET',
    mutation: 'POST',
    subscription: 'PATCH'
};
function getInput(opts) {
    return 'input' in opts ? opts.transformer.input.serialize(opts.input) : arrayToDict(opts.inputs.map((_input)=>opts.transformer.input.serialize(_input)));
}
const getUrl = (opts)=>{
    const parts = opts.url.split('?');
    const base = parts[0].replace(/\/$/, ''); // Remove any trailing slashes
    let url = base + '/' + opts.path;
    const queryParts = [];
    if (parts[1]) {
        queryParts.push(parts[1]);
    }
    if ('inputs' in opts) {
        queryParts.push('batch=1');
    }
    if (opts.type === 'query' || opts.type === 'subscription') {
        const input = getInput(opts);
        if (input !== undefined && opts.methodOverride !== 'POST') {
            queryParts.push(`input=${encodeURIComponent(JSON.stringify(input))}`);
        }
    }
    if (queryParts.length) {
        url += '?' + queryParts.join('&');
    }
    return url;
};
const getBody = (opts)=>{
    if (opts.type === 'query' && opts.methodOverride !== 'POST') {
        return undefined;
    }
    const input = getInput(opts);
    return input !== undefined ? JSON.stringify(input) : undefined;
};
const jsonHttpRequester = (opts)=>{
    return httpRequest({
        ...opts,
        contentTypeHeader: 'application/json',
        getUrl,
        getBody
    });
};
/**
 * Polyfill for DOMException with AbortError name
 */ class AbortError extends Error {
    constructor(){
        const name = 'AbortError';
        super(name);
        this.name = name;
        this.message = name;
    }
}
/**
 * Polyfill for `signal.throwIfAborted()`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted
 */ const throwIfAborted = (signal)=>{
    if (!signal?.aborted) {
        return;
    }
    // If available, use the native implementation
    signal.throwIfAborted?.();
    // If we have `DOMException`, use it
    if (typeof DOMException !== 'undefined') {
        throw new DOMException('AbortError', 'AbortError');
    }
    // Otherwise, use our own implementation
    throw new AbortError();
};
async function fetchHTTPResponse(opts) {
    throwIfAborted(opts.signal);
    const url = opts.getUrl(opts);
    const body = opts.getBody(opts);
    const { type } = opts;
    const resolvedHeaders = await (async ()=>{
        const heads = await opts.headers();
        if (Symbol.iterator in heads) {
            return Object.fromEntries(heads);
        }
        return heads;
    })();
    const headers = {
        ...opts.contentTypeHeader ? {
            'content-type': opts.contentTypeHeader
        } : {},
        ...opts.trpcAcceptHeader ? {
            'trpc-accept': opts.trpcAcceptHeader
        } : undefined,
        ...resolvedHeaders
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$getFetch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFetch"])(opts.fetch)(url, {
        method: opts.methodOverride ?? METHOD[type],
        signal: opts.signal,
        body,
        headers
    });
}
async function httpRequest(opts) {
    const meta = {};
    const res = await fetchHTTPResponse(opts);
    meta.response = res;
    const json = await res.json();
    meta.responseJSON = json;
    return {
        json: json,
        meta
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpBatchLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "httpBatchLink": (()=>httpBatchLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/dataLoader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/signals.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/httpUtils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * @see https://trpc.io/docs/client/links/httpBatchLink
 */ function httpBatchLink(opts) {
    const resolvedOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHTTPLinkOptions"])(opts);
    const maxURLLength = opts.maxURLLength ?? Infinity;
    return ()=>{
        const batchLoader = (type)=>{
            return {
                validate (batchOps) {
                    if (maxURLLength === Infinity) {
                        // escape hatch for quick calcs
                        return true;
                    }
                    const path = batchOps.map((op)=>op.path).join(',');
                    const inputs = batchOps.map((op)=>op.input);
                    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])({
                        ...resolvedOpts,
                        type,
                        path,
                        inputs,
                        signal: null
                    });
                    return url.length <= maxURLLength;
                },
                async fetch (batchOps) {
                    const path = batchOps.map((op)=>op.path).join(',');
                    const inputs = batchOps.map((op)=>op.input);
                    const signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allAbortSignals"])(...batchOps.map((op)=>op.signal));
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonHttpRequester"])({
                        ...resolvedOpts,
                        path,
                        inputs,
                        type,
                        headers () {
                            if (!opts.headers) {
                                return {};
                            }
                            if (typeof opts.headers === 'function') {
                                return opts.headers({
                                    opList: batchOps
                                });
                            }
                            return opts.headers;
                        },
                        signal
                    });
                    const resJSON = Array.isArray(res.json) ? res.json : batchOps.map(()=>res.json);
                    const result = resJSON.map((item)=>({
                            meta: res.meta,
                            json: item
                        }));
                    return result;
                }
            };
        };
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLoader"])(batchLoader('query'));
        const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLoader"])(batchLoader('mutation'));
        const loaders = {
            query,
            mutation
        };
        return ({ op })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                /* istanbul ignore if -- @preserve */ if (op.type === 'subscription') {
                    throw new Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
                }
                const loader = loaders[op.type];
                const promise = loader.load(op);
                let _res = undefined;
                promise.then((res)=>{
                    _res = res;
                    const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformResult"])(res.json, resolvedOpts.transformer.output);
                    if (!transformed.ok) {
                        observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(transformed.error, {
                            meta: res.meta
                        }));
                        return;
                    }
                    observer.next({
                        context: res.meta,
                        result: transformed.result
                    });
                    observer.complete();
                }).catch((err)=>{
                    observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(err, {
                        meta: _res?.meta
                    }));
                });
                return ()=>{
                // noop
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpBatchStreamLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_httpBatchStreamLink": (()=>unstable_httpBatchStreamLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/dataLoader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/signals.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/httpUtils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * @see https://trpc.io/docs/client/links/httpBatchStreamLink
 */ function unstable_httpBatchStreamLink(opts) {
    const resolvedOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHTTPLinkOptions"])(opts);
    const maxURLLength = opts.maxURLLength ?? Infinity;
    const maxItems = opts.maxItems ?? Infinity;
    return ()=>{
        const batchLoader = (type)=>{
            return {
                validate (batchOps) {
                    if (maxURLLength === Infinity && maxItems === Infinity) {
                        // escape hatch for quick calcs
                        return true;
                    }
                    if (batchOps.length > maxItems) {
                        return false;
                    }
                    const path = batchOps.map((op)=>op.path).join(',');
                    const inputs = batchOps.map((op)=>op.input);
                    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])({
                        ...resolvedOpts,
                        type,
                        path,
                        inputs,
                        signal: null
                    });
                    return url.length <= maxURLLength;
                },
                async fetch (batchOps) {
                    const path = batchOps.map((op)=>op.path).join(',');
                    const inputs = batchOps.map((op)=>op.input);
                    const batchSignals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allAbortSignals"])(...batchOps.map((op)=>op.signal));
                    const abortController = new AbortController();
                    const responsePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHTTPResponse"])({
                        ...resolvedOpts,
                        signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raceAbortSignals"])(batchSignals, abortController.signal),
                        type,
                        contentTypeHeader: 'application/json',
                        trpcAcceptHeader: 'application/jsonl',
                        getUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"],
                        getBody: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBody"],
                        inputs,
                        path,
                        headers () {
                            if (!opts.headers) {
                                return {};
                            }
                            if (typeof opts.headers === 'function') {
                                return opts.headers({
                                    opList: batchOps
                                });
                            }
                            return opts.headers;
                        }
                    });
                    const res = await responsePromise;
                    const [head] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonlStreamConsumer"])({
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        from: res.body,
                        deserialize: resolvedOpts.transformer.output.deserialize,
                        // onError: console.error,
                        formatError (opts) {
                            const error = opts.error;
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from({
                                error
                            });
                        },
                        abortController
                    });
                    const promises = Object.keys(batchOps).map(async (key)=>{
                        let json = await Promise.resolve(head[key]);
                        if ('result' in json) {
                            /**
                 * Not very pretty, but we need to unwrap nested data as promises
                 * Our stream producer will only resolve top-level async values or async values that are directly nested in another async value
                 */ const result = await Promise.resolve(json.result);
                            json = {
                                result: {
                                    data: await Promise.resolve(result.data)
                                }
                            };
                        }
                        return {
                            json,
                            meta: {
                                response: res
                            }
                        };
                    });
                    return promises;
                }
            };
        };
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLoader"])(batchLoader('query'));
        const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$dataLoader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLoader"])(batchLoader('mutation'));
        const loaders = {
            query,
            mutation
        };
        return ({ op })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                /* istanbul ignore if -- @preserve */ if (op.type === 'subscription') {
                    throw new Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
                }
                const loader = loaders[op.type];
                const promise = loader.load(op);
                let _res = undefined;
                promise.then((res)=>{
                    _res = res;
                    if ('error' in res.json) {
                        observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(res.json, {
                            meta: res.meta
                        }));
                        return;
                    } else if ('result' in res.json) {
                        observer.next({
                            context: res.meta,
                            result: res.json.result
                        });
                        observer.complete();
                        return;
                    }
                    observer.complete();
                }).catch((err)=>{
                    observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(err, {
                        meta: _res?.meta
                    }));
                });
                return ()=>{
                // noop
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "httpLink": (()=>httpLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/httpUtils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$contentTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/contentTypes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-client] (ecmascript)");
;
;
;
;
;
const universalRequester = (opts)=>{
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInput"])(opts);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$contentTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFormData"])(input)) {
        if (opts.type !== 'mutation' && opts.methodOverride !== 'POST') {
            throw new Error('FormData is only supported for mutations');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpRequest"])({
            ...opts,
            // The browser will set this automatically and include the boundary= in it
            contentTypeHeader: undefined,
            getUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"],
            getBody: ()=>input
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$contentTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOctetType"])(input)) {
        if (opts.type !== 'mutation' && opts.methodOverride !== 'POST') {
            throw new Error('Octet type input is only supported for mutations');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpRequest"])({
            ...opts,
            contentTypeHeader: 'application/octet-stream',
            getUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"],
            getBody: ()=>input
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonHttpRequester"])(opts);
};
/**
 * @see https://trpc.io/docs/client/links/httpLink
 */ function httpLink(opts) {
    const resolvedOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHTTPLinkOptions"])(opts);
    return ()=>{
        return ({ op })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                const { path, input, type } = op;
                /* istanbul ignore if -- @preserve */ if (type === 'subscription') {
                    throw new Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
                }
                const request = universalRequester({
                    ...resolvedOpts,
                    type,
                    path,
                    input,
                    signal: op.signal,
                    headers () {
                        if (!opts.headers) {
                            return {};
                        }
                        if (typeof opts.headers === 'function') {
                            return opts.headers({
                                op
                            });
                        }
                        return opts.headers;
                    }
                });
                let meta = undefined;
                request.then((res)=>{
                    meta = res.meta;
                    const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformResult"])(res.json, resolvedOpts.transformer.output);
                    if (!transformed.ok) {
                        observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(transformed.error, {
                            meta
                        }));
                        return;
                    }
                    observer.next({
                        context: res.meta,
                        result: transformed.result
                    });
                    observer.complete();
                }).catch((cause)=>{
                    observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(cause, {
                        meta
                    }));
                });
                return ()=>{
                // noop
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/loggerLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "loggerLink": (()=>loggerLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$operators$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/operators.mjs [app-client] (ecmascript)");
;
/// <reference lib="dom.iterable" />
// `dom.iterable` types are explicitly required for extracting `FormData` values,
// as all implementations of `Symbol.iterable` are separated from the main `dom` types.
// Using triple-slash directive makes sure that it will be available,
// even if end-user `tsconfig.json` omits it in the `lib` array.
function isFormData(value) {
    if (typeof FormData === 'undefined') {
        // FormData is not supported
        return false;
    }
    return value instanceof FormData;
}
const palettes = {
    css: {
        query: [
            '72e3ff',
            '3fb0d8'
        ],
        mutation: [
            'c5a3fc',
            '904dfc'
        ],
        subscription: [
            'ff49e1',
            'd83fbe'
        ]
    },
    ansi: {
        regular: {
            // Cyan background, black and white text respectively
            query: [
                '\x1b[30;46m',
                '\x1b[97;46m'
            ],
            // Magenta background, black and white text respectively
            mutation: [
                '\x1b[30;45m',
                '\x1b[97;45m'
            ],
            // Green background, black and white text respectively
            subscription: [
                '\x1b[30;42m',
                '\x1b[97;42m'
            ]
        },
        bold: {
            query: [
                '\x1b[1;30;46m',
                '\x1b[1;97;46m'
            ],
            mutation: [
                '\x1b[1;30;45m',
                '\x1b[1;97;45m'
            ],
            subscription: [
                '\x1b[1;30;42m',
                '\x1b[1;97;42m'
            ]
        }
    }
};
function constructPartsAndArgs(opts) {
    const { direction, type, withContext, path, id, input } = opts;
    const parts = [];
    const args = [];
    if (opts.colorMode === 'none') {
        parts.push(direction === 'up' ? '>>' : '<<', type, `#${id}`, path);
    } else if (opts.colorMode === 'ansi') {
        const [lightRegular, darkRegular] = palettes.ansi.regular[type];
        const [lightBold, darkBold] = palettes.ansi.bold[type];
        const reset = '\x1b[0m';
        parts.push(direction === 'up' ? lightRegular : darkRegular, direction === 'up' ? '>>' : '<<', type, direction === 'up' ? lightBold : darkBold, `#${id}`, path, reset);
    } else {
        // css color mode
        const [light, dark] = palettes.css[type];
        const css = `
    background-color: #${direction === 'up' ? light : dark};
    color: ${direction === 'up' ? 'black' : 'white'};
    padding: 2px;
  `;
        parts.push('%c', direction === 'up' ? '>>' : '<<', type, `#${id}`, `%c${path}%c`, '%O');
        args.push(css, `${css}; font-weight: bold;`, `${css}; font-weight: normal;`);
    }
    if (direction === 'up') {
        args.push(withContext ? {
            input,
            context: opts.context
        } : {
            input
        });
    } else {
        args.push({
            input,
            result: opts.result,
            elapsedMs: opts.elapsedMs,
            ...withContext && {
                context: opts.context
            }
        });
    }
    return {
        parts,
        args
    };
}
// maybe this should be moved to it's own package
const defaultLogger = ({ c = console, colorMode = 'css', withContext })=>(props)=>{
        const rawInput = props.input;
        const input = isFormData(rawInput) ? Object.fromEntries(rawInput) : rawInput;
        const { parts, args } = constructPartsAndArgs({
            ...props,
            colorMode,
            input,
            withContext
        });
        const fn = props.direction === 'down' && props.result && (props.result instanceof Error || 'error' in props.result.result && props.result.result.error) ? 'error' : 'log';
        c[fn].apply(null, [
            parts.join(' ')
        ].concat(args));
    };
/**
 * @see https://trpc.io/docs/v11/client/links/loggerLink
 */ function loggerLink(opts = {}) {
    const { enabled = ()=>true } = opts;
    const colorMode = opts.colorMode ?? (typeof window === 'undefined' ? 'ansi' : 'css');
    const withContext = opts.withContext ?? colorMode === 'css';
    const { logger = defaultLogger({
        c: opts.console,
        colorMode,
        withContext
    }) } = opts;
    return ()=>{
        return ({ op, next })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                // ->
                enabled({
                    ...op,
                    direction: 'up'
                }) && logger({
                    ...op,
                    direction: 'up'
                });
                const requestStartTime = Date.now();
                function logResult(result) {
                    const elapsedMs = Date.now() - requestStartTime;
                    enabled({
                        ...op,
                        direction: 'down',
                        result
                    }) && logger({
                        ...op,
                        direction: 'down',
                        elapsedMs,
                        result
                    });
                }
                return next(op).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$operators$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tap"])({
                    next (result) {
                        logResult(result);
                    },
                    error (result) {
                        logResult(result);
                    }
                })).subscribe(observer);
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/splitLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "splitLink": (()=>splitLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$createChain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/createChain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
;
;
function asArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function splitLink(opts) {
    return (runtime)=>{
        const yes = asArray(opts.true).map((link)=>link(runtime));
        const no = asArray(opts.false).map((link)=>link(runtime));
        return (props)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                const links = opts.condition(props.op) ? yes : no;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$createChain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChain"])({
                    op: props.op,
                    links
                }).subscribe(observer);
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/urlWithConnectionParams.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Get the result of a value or function that returns a value
 */ __turbopack_esm__({
    "resultOf": (()=>resultOf)
});
const resultOf = (value)=>{
    return typeof value === 'function' ? value() : value;
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/wsLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createWSClient": (()=>createWSClient),
    "wsLink": (()=>wsLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/transformer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/urlWithConnectionParams.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$behaviorSubject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/behaviorSubject.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-client] (ecmascript)");
;
;
;
;
;
const run = (fn)=>fn();
const exponentialBackoff = (attemptIndex)=>attemptIndex === 0 ? 0 : Math.min(1000 * 2 ** attemptIndex, 30000);
const lazyDefaults = {
    enabled: false,
    closeMs: 0
};
/**
 * @see https://trpc.io/docs/v11/client/links/wsLink
 * @deprecated
 * 🙋‍♂️ **Contributors needed** to continue supporting WebSockets!
 * See https://github.com/trpc/trpc/issues/6109
 */ function createWSClient(opts) {
    const { WebSocket: WebSocketImpl = WebSocket, retryDelayMs: retryDelayFn = exponentialBackoff } = opts;
    const lazyOpts = {
        ...lazyDefaults,
        ...opts.lazy
    };
    /* istanbul ignore next -- @preserve */ if (!WebSocketImpl) {
        throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
    }
    /**
   * outgoing messages buffer whilst not open
   */ let outgoing = [];
    const pendingRequests = Object.create(null);
    let connectAttempt = 0;
    let connectTimer = undefined;
    let connectionIndex = 0;
    let lazyDisconnectTimer = undefined;
    let activeConnection = lazyOpts.enabled ? null : createConnection();
    const initState = activeConnection ? {
        type: 'state',
        state: 'connecting',
        error: null
    } : {
        type: 'state',
        state: 'idle',
        error: null
    };
    const connectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$behaviorSubject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["behaviorSubject"])(initState);
    /**
   * tries to send the list of messages
   */ function dispatch() {
        if (!activeConnection) {
            reconnect(null);
            return;
        }
        // using a timeout to batch messages
        setTimeout(()=>{
            if (activeConnection?.state !== 'open') {
                return;
            }
            for (const pending of Object.values(pendingRequests)){
                if (!pending.connection) {
                    pending.connection = activeConnection;
                }
            }
            if (outgoing.length === 1) {
                // single send
                activeConnection.ws.send(JSON.stringify(outgoing.pop()));
            } else {
                // batch send
                activeConnection.ws.send(JSON.stringify(outgoing));
            }
            // clear
            outgoing = [];
            startLazyDisconnectTimer();
        });
    }
    function tryReconnect(cause) {
        if (!!connectTimer) {
            return;
        }
        const timeout = retryDelayFn(connectAttempt++);
        reconnectInMs(timeout, cause);
    }
    function hasPendingRequests(conn) {
        const requests = Object.values(pendingRequests);
        if (!conn) {
            return requests.length > 0;
        }
        return requests.some((req)=>req.connection === conn);
    }
    function reconnect(cause) {
        if (lazyOpts.enabled && !hasPendingRequests()) {
            // Skip reconnecting if there aren't pending requests and we're in lazy mode
            return;
        }
        const oldConnection = activeConnection;
        activeConnection = createConnection();
        oldConnection && closeIfNoPending(oldConnection);
        const currentState = connectionState.get();
        if (currentState.state !== 'connecting') {
            connectionState.next({
                type: 'state',
                state: 'connecting',
                error: cause ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(cause) : null
            });
        }
    }
    function reconnectInMs(ms, cause) {
        if (connectTimer) {
            return;
        }
        connectTimer = setTimeout(()=>{
            reconnect(cause);
        }, ms);
    }
    function closeIfNoPending(conn) {
        // disconnect as soon as there are are no pending requests
        if (!hasPendingRequests(conn)) {
            conn.ws?.close();
        }
    }
    function resumeSubscriptionOnReconnect(req) {
        if (outgoing.some((r)=>r.id === req.op.id)) {
            return;
        }
        request({
            op: req.op,
            callbacks: req.callbacks,
            lastEventId: req.lastEventId
        });
    }
    const startLazyDisconnectTimer = ()=>{
        if (!lazyOpts.enabled) {
            return;
        }
        clearTimeout(lazyDisconnectTimer);
        lazyDisconnectTimer = setTimeout(()=>{
            if (!activeConnection) {
                return;
            }
            if (!hasPendingRequests()) {
                activeConnection.ws?.close();
                activeConnection = null;
                connectionState.next({
                    type: 'state',
                    state: 'idle',
                    error: null
                });
            }
        }, lazyOpts.closeMs);
    };
    function createConnection() {
        let pingTimeout = undefined;
        let pongTimeout = undefined;
        const self = {
            id: ++connectionIndex,
            state: 'connecting'
        };
        clearTimeout(lazyDisconnectTimer);
        function destroy() {
            const noop = ()=>{
            // no-op
            };
            const { ws } = self;
            if (ws) {
                ws.onclose = noop;
                ws.onerror = noop;
                ws.onmessage = noop;
                ws.onopen = noop;
                ws.close();
            }
            self.state = 'closed';
        }
        const onCloseOrError = (cause)=>{
            clearTimeout(pingTimeout);
            clearTimeout(pongTimeout);
            self.state = 'closed';
            if (activeConnection === self) {
                // connection might have been replaced already
                tryReconnect(cause);
            }
            for (const [key, req] of Object.entries(pendingRequests)){
                if (req.connection !== self) {
                    continue;
                }
                // The connection was closed either unexpectedly or because of a reconnect
                if (req.type === 'subscription') {
                    // Subscriptions will resume after we've reconnected
                    resumeSubscriptionOnReconnect(req);
                } else {
                    // Queries and mutations will error if interrupted
                    delete pendingRequests[key];
                    req.callbacks.error?.(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(cause ?? new TRPCWebSocketClosedError()));
                }
            }
        };
        const onError = (evt)=>{
            onCloseOrError(new TRPCWebSocketClosedError({
                cause: evt
            }));
            opts.onError?.(evt);
        };
        function connect(url) {
            if (opts.connectionParams) {
                // append `?connectionParams=1` when connection params are used
                const prefix = url.includes('?') ? '&' : '?';
                url += prefix + 'connectionParams=1';
            }
            const ws = new WebSocketImpl(url);
            self.ws = ws;
            clearTimeout(connectTimer);
            connectTimer = undefined;
            ws.onopen = ()=>{
                async function sendConnectionParams() {
                    if (!opts.connectionParams) {
                        return;
                    }
                    const connectMsg = {
                        method: 'connectionParams',
                        data: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultOf"])(opts.connectionParams)
                    };
                    ws.send(JSON.stringify(connectMsg));
                }
                function handleKeepAlive() {
                    if (!opts.keepAlive?.enabled) {
                        return;
                    }
                    const { pongTimeoutMs = 1000, intervalMs = 5000 } = opts.keepAlive;
                    const schedulePing = ()=>{
                        const schedulePongTimeout = ()=>{
                            pongTimeout = setTimeout(()=>{
                                const wasOpen = self.state === 'open';
                                destroy();
                                if (wasOpen) {
                                    opts.onClose?.();
                                }
                            }, pongTimeoutMs);
                        };
                        pingTimeout = setTimeout(()=>{
                            ws.send('PING');
                            schedulePongTimeout();
                        }, intervalMs);
                    };
                    ws.addEventListener('message', ()=>{
                        clearTimeout(pingTimeout);
                        clearTimeout(pongTimeout);
                        schedulePing();
                    });
                    schedulePing();
                }
                run(async ()=>{
                    /* istanbul ignore next -- @preserve */ if (activeConnection?.ws !== ws) {
                        return;
                    }
                    handleKeepAlive();
                    await sendConnectionParams();
                    connectAttempt = 0;
                    self.state = 'open';
                    // Update connection state
                    connectionState.next({
                        type: 'state',
                        state: 'pending',
                        error: null
                    });
                    opts.onOpen?.();
                    dispatch();
                }).catch((cause)=>{
                    ws.close(3000);
                    onCloseOrError(new TRPCWebSocketClosedError({
                        message: 'Initialization error',
                        cause
                    }));
                });
            };
            ws.onerror = onError;
            const handleIncomingRequest = (req)=>{
                if (self !== activeConnection) {
                    return;
                }
                if (req.method === 'reconnect') {
                    reconnect(new TRPCWebSocketClosedError({
                        message: 'Server requested reconnect'
                    }));
                    // notify subscribers
                    for (const pendingReq of Object.values(pendingRequests)){
                        if (pendingReq.type === 'subscription') {
                            resumeSubscriptionOnReconnect(pendingReq);
                        }
                    }
                }
            };
            const handleIncomingResponse = (data)=>{
                const req = data.id !== null && pendingRequests[data.id];
                if (!req) {
                    // do something?
                    return;
                }
                req.callbacks.next?.(data);
                if (self === activeConnection && req.connection !== activeConnection) {
                    // gracefully replace old connection with a new connection
                    req.connection = self;
                }
                if (req.connection !== self) {
                    // the connection has been replaced
                    return;
                }
                if ('result' in data && data.result.type === 'data' && typeof data.result.id === 'string') {
                    req.lastEventId = data.result.id;
                }
                if ('result' in data && data.result.type === 'stopped' && activeConnection === self) {
                    req.callbacks.complete();
                }
            };
            ws.onmessage = (event)=>{
                const { data } = event;
                if (data === 'PONG') {
                    return;
                }
                if (data === 'PING') {
                    ws.send('PONG');
                    return;
                }
                startLazyDisconnectTimer();
                const msg = JSON.parse(data);
                if ('method' in msg) {
                    handleIncomingRequest(msg);
                } else {
                    handleIncomingResponse(msg);
                }
                if (self !== activeConnection) {
                    // when receiving a message, we close old connection that has no pending requests
                    closeIfNoPending(self);
                }
            };
            ws.onclose = (event)=>{
                const wasOpen = self.state === 'open';
                destroy();
                onCloseOrError(new TRPCWebSocketClosedError({
                    cause: event
                }));
                if (wasOpen) {
                    opts.onClose?.(event);
                }
            };
        }
        Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultOf"])(opts.url)).then(connect).catch(()=>{
            onCloseOrError(new Error('Failed to resolve url'));
        });
        return self;
    }
    function request(opts) {
        const { op, callbacks, lastEventId } = opts;
        const { type, input, path, id } = op;
        const envelope = {
            id,
            method: type,
            params: {
                input,
                path,
                lastEventId
            }
        };
        pendingRequests[id] = {
            connection: null,
            type,
            callbacks,
            op,
            lastEventId
        };
        // enqueue message
        outgoing.push(envelope);
        dispatch();
        return ()=>{
            const callbacks = pendingRequests[id]?.callbacks;
            delete pendingRequests[id];
            outgoing = outgoing.filter((msg)=>msg.id !== id);
            callbacks?.complete?.();
            if (activeConnection?.state === 'open' && op.type === 'subscription') {
                outgoing.push({
                    id,
                    method: 'subscription.stop'
                });
                dispatch();
            }
            startLazyDisconnectTimer();
        };
    }
    return {
        close: ()=>{
            connectAttempt = 0;
            for (const req of Object.values(pendingRequests)){
                if (req.type === 'subscription') {
                    req.callbacks.complete();
                } else if (!req.connection) {
                    // close pending requests that aren't attached to a connection yet
                    req.callbacks.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(new TRPCWebSocketClosedError({
                        message: 'Closed before connection was established'
                    })));
                }
            }
            activeConnection && closeIfNoPending(activeConnection);
            clearTimeout(connectTimer);
            connectTimer = undefined;
            activeConnection = null;
        },
        request,
        get connection () {
            return activeConnection;
        },
        /**
     * Reconnect to the WebSocket server
     */ reconnect,
        connectionState: connectionState
    };
}
class TRPCWebSocketClosedError extends Error {
    constructor(opts){
        super(opts?.message ?? 'WebSocket closed', // @ts-ignore https://github.com/tc39/proposal-error-cause
        {
            cause: opts?.cause
        });
        this.name = 'TRPCWebSocketClosedError';
        Object.setPrototypeOf(this, TRPCWebSocketClosedError.prototype);
    }
}
/**
 * @see https://trpc.io/docs/v11/client/links/wsLink
 * @deprecated
 * 🙋‍♂️ **Contributors needed** to continue supporting WebSockets!
 * See https://github.com/trpc/trpc/issues/6109
 */ function wsLink(opts) {
    const transformer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformer"])(opts.transformer);
    return ()=>{
        const { client } = opts;
        return ({ op })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                const { type, path, id, context } = op;
                const input = transformer.input.serialize(op.input);
                const connState = type === 'subscription' ? client.connectionState.subscribe({
                    next (result) {
                        observer.next({
                            result,
                            context
                        });
                    }
                }) : null;
                const unsubscribeRequest = client.request({
                    op: {
                        type,
                        path,
                        input,
                        id,
                        context,
                        signal: null
                    },
                    callbacks: {
                        error (err) {
                            observer.error(err);
                            unsubscribeRequest();
                        },
                        complete () {
                            observer.complete();
                        },
                        next (event) {
                            const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformResult"])(event, transformer.output);
                            if (!transformed.ok) {
                                observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(transformed.error));
                                return;
                            }
                            observer.next({
                                result: transformed.result
                            });
                            if (op.type !== 'subscription') {
                                // if it isn't a subscription we don't care about next response
                                unsubscribeRequest();
                                observer.complete();
                            }
                        }
                    },
                    lastEventId: undefined
                });
                return ()=>{
                    unsubscribeRequest();
                    connState?.unsubscribe();
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpSubscriptionLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_httpSubscriptionLink": (()=>unstable_httpSubscriptionLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$rpc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/rpc.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/signals.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/transformer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/httpUtils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/urlWithConnectionParams.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$behaviorSubject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/behaviorSubject.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function urlWithConnectionParams(opts) {
    let url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultOf"])(opts.url);
    if (opts.connectionParams) {
        const params = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultOf"])(opts.connectionParams);
        const prefix = url.includes('?') ? '&' : '?';
        url += prefix + 'connectionParams=' + encodeURIComponent(JSON.stringify(params));
    }
    return url;
}
/**
 * tRPC error codes that are considered retryable
 * With out of the box SSE, the client will reconnect when these errors are encountered
 */ const codes5xx = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"].BAD_GATEWAY,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"].SERVICE_UNAVAILABLE,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"].GATEWAY_TIMEOUT,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"].INTERNAL_SERVER_ERROR
];
/**
 * @see https://trpc.io/docs/client/links/httpSubscriptionLink
 */ function unstable_httpSubscriptionLink(opts) {
    const transformer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$transformer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransformer"])(opts.transformer);
    return ()=>{
        return ({ op })=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                const { type, path, input } = op;
                /* istanbul ignore if -- @preserve */ if (type !== 'subscription') {
                    throw new Error('httpSubscriptionLink only supports subscriptions');
                }
                const ac = new AbortController();
                const signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$signals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raceAbortSignals"])(op.signal, ac.signal);
                const eventSourceStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sseStreamConsumer"])({
                    url: async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$httpUtils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])({
                            transformer,
                            url: await urlWithConnectionParams(opts),
                            input,
                            path,
                            type,
                            signal: null
                        }),
                    init: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$urlWithConnectionParams$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultOf"])(opts.eventSourceOptions),
                    signal,
                    deserialize: transformer.output.deserialize,
                    EventSource: opts.EventSource ?? globalThis.EventSource
                });
                const connectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$behaviorSubject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["behaviorSubject"])({
                    type: 'state',
                    state: 'connecting',
                    error: null
                });
                const connectionSub = connectionState.subscribe({
                    next (state) {
                        observer.next({
                            result: state
                        });
                    }
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["run"])(async ()=>{
                    for await (const chunk of eventSourceStream){
                        switch(chunk.type){
                            case 'data':
                                const chunkData = chunk.data;
                                // if the `tracked()`-helper is used, we always have an `id` field
                                const data = 'id' in chunkData ? chunkData : chunkData.data;
                                observer.next({
                                    result: {
                                        data
                                    },
                                    context: {
                                        eventSource: chunk.eventSource
                                    }
                                });
                                break;
                            case 'opened':
                                {
                                    observer.next({
                                        result: {
                                            type: 'started'
                                        },
                                        context: {
                                            eventSource: chunk.eventSource
                                        }
                                    });
                                    connectionState.next({
                                        type: 'state',
                                        state: 'pending',
                                        error: null
                                    });
                                    break;
                                }
                            case 'serialized-error':
                                {
                                    const error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from({
                                        error: chunk.error
                                    });
                                    if (codes5xx.includes(chunk.error.code)) {
                                        //
                                        connectionState.next({
                                            type: 'state',
                                            state: 'connecting',
                                            error
                                        });
                                        break;
                                    }
                                    //
                                    // non-retryable error, cancel the subscription
                                    throw error;
                                }
                            case 'connecting':
                                {
                                    const lastState = connectionState.get();
                                    const error1 = chunk.event && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(chunk.event);
                                    if (!error1 && lastState.state === 'connecting') {
                                        break;
                                    }
                                    connectionState.next({
                                        type: 'state',
                                        state: 'connecting',
                                        error: error1
                                    });
                                    break;
                                }
                        }
                    }
                    observer.next({
                        result: {
                            type: 'stopped'
                        }
                    });
                    observer.complete();
                }).catch((error)=>{
                    observer.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRPCClientError"].from(error));
                });
                return ()=>{
                    observer.complete();
                    ac.abort();
                    connectionSub.unsubscribe();
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/retryLink.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "retryLink": (()=>retryLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.593/node_modules/@trpc/server/dist/observable/observable.mjs [app-client] (ecmascript)");
;
/* istanbul ignore file -- @preserve */ // We're not actually exporting this link
/**
 * @see https://trpc.io/docs/v11/client/links/retryLink
 */ function retryLink(opts) {
    // initialized config
    return ()=>{
        // initialized in app
        return ({ op, next })=>{
            // initialized for request
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"])((observer)=>{
                let next$;
                attempt(1);
                function attempt(attempts) {
                    next$ = next(op).subscribe({
                        error (error) {
                            const shouldRetry = opts.retry({
                                op,
                                attempts,
                                error
                            });
                            shouldRetry ? attempt(attempts + 1) : observer.error(error);
                        },
                        next (result) {
                            observer.next(result);
                        },
                        complete () {
                            observer.complete();
                        }
                    });
                }
                return ()=>{
                    next$.unsubscribe();
                };
            });
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$createTRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$createTRPCClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/createTRPCClient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$getFetch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/getFetch.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$TRPCClientError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/TRPCClientError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$contentTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/contentTypes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpBatchLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpBatchLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpBatchStreamLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpBatchStreamLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$loggerLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/loggerLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$splitLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/splitLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$wsLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/wsLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpSubscriptionLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/httpSubscriptionLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$internals$2f$retryLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/links/internals/retryLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$internals$2f$TRPCUntypedClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$11$2e$0$2e$0$2d$rc$2e$593_$40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$593$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+client@11.0.0-rc.593_@trpc+server@11.0.0-rc.593/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=77259_%40trpc_client_dist_2eb94e._.js.map