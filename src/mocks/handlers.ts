import { rest } from 'msw';

export const handlers = [
    rest.get('https://jsonplaceholder.typecode.com/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([
            { name: "Bruce Wayn" },
            { name: "Clark Kent" },
            { name: "Princess Diana" },
        ]))
    })
]