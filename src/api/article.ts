import request from '@/helper/request'

export const getArticles = async (page: number, size: number) => {
    const res = await request({
        method: 'get',
        params: {
            page,
            size,
        },
        url: '/api/article/getArticles'
    })
    return res
}

type createArticleType = ({ content, title, imgs}: { content: string, title?: string, imgs?: string[] }) => Promise<{ success: boolean }>
export const createArticle: createArticleType = async ({ content, title, imgs}: { content: string, title?: string, imgs?: string[] }) => {
    const res: ReturnType<createArticleType> = await request({
        method: 'post',
        data: {
            content,
            title,
            imgs,
        },
        url: '/api/article/createArticle'
    })
    return res
}

export const updateArticle = async ({ id, content, title, imgs}: { id: number, content: string, title?: string, imgs?: string[] }) => {
    const res = await request({
        method: 'post',
        data: {
            id,
            content,
            title,
            imgs,
        },
        url: '/api/article/updateArticle'
    })
    return res
}

export const findArticle = async (id: number) => {
    const res = await request({
        method: 'get',
        params: {
            id
        },
        url: '/api/article/findArticle'
    })
    return res
}

export const delArticle = async (id: number) => {
    const res = await request({
        method: 'post',
        data: {
            id,
        },
        url: '/api/article/delArticle'
    })
    return res
}




