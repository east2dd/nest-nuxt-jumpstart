import pupa from 'pupa'

export const apiUrl = (url: string, params = {}) => {
  return pupa(url, params)
}
