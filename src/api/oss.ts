import request from '@/helper/request'

export const uploadImg = async (file: NonNullable<HTMLInputElement["files"]>[number]) => {
    // console.log('file', file)
    const formData = new FormData()
    // formData.append('name', file.name)
    formData.append('file', file)
    const res = await request({
        method: 'post',
        data: formData,
        url: '/api/oss/uploadImg'
    })
    return res
}