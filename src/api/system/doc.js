import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listDoc(query) {
  return request({
    url: '/system/doc/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getDoc(id) {
  return request({
    url: '/system/doc/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addDoc(data) {
  return request({
    url: '/system/doc',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateDoc(data) {
  return request({
    url: '/system/doc',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delDoc(id) {
  return request({
    url: '/system/doc/' + id,
    method: 'delete'
  })
}
