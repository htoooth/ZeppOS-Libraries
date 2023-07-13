let messageBuilder;

export function prepareFetch(builder) {
    messageBuilder = builder;
}

export function clientFetch(url, params) {
    const fetchData = {
        method: "GET",
        url,
        ...params,
    };

    return messageBuilder.request({
        package: "fetch_fwd",
        data: fetchData
    }, {timeout: 12000}).then((r) => {
        return {
            status: r.status,
            json: () => Promise.resolve(r.json),
        }
    })
}

export function handleFetchRequest(ctx, request) {
    if(request.package !== "fetch_fwd") return;
    request = request.data;

    console.log(request.method, request.url, request);
    fetch(request).then((res) => {
        const data = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
        ctx.response({
            data: {
                status: data.status,
                json: data
            }
        })
    })
}