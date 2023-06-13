import request from '@/utils/request'

// 新增表单文件
export function addFormFile(data) {
  return request({
    url: '/upload',
    method: 'post',
    data: data
  })
}

// 下载表单文件
export function updateFormFile(data) {
  return request({
    url: '/download',
    method: 'get',
    data: data
  })
}

// 删除表单文件
export function delFormFile(id) {
  return request({
    url: '/del' + id,
    method: 'delete'
  })
}
