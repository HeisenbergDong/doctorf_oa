import request from '@/utils/request'

// 查询患者信息列表
export function listStatistics(query) {
  return request({
    url: '/doc/statistics/list',
    method: 'get',
    params: query
  })
}

