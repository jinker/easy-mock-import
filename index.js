const {exec} = require('child_process')
const {request} = require('http')
const Buffer = require('buffer')

const cUrl = ``
const targetProjectId = ''
const requestHeaders = `
`

if (!cUrl || !targetProjectId || !requestHeaders) {
  console.error('Please read README.md，and get the cUrl, targetProjectId, requestHeaders')
}

const createMock = function (data) {
  const {url} = data
  const headers = {}
  requestHeaders.split(/\n/)
    .forEach((item) => {
      const [key, value] = item.split(': ')
      if (key !== 'Host' && value) {
        headers[key] = value
      }
    })

  headers['Content-Type'] = 'application/json;charset=UTF-8'

  const postData = JSON.stringify(data)
  headers['Content-Length'] = Buffer.Buffer.byteLength(postData)

  const req = request({
    hostname: 'mock.myscrm.cn',
    path: '/api/mock/create',
    method: 'POST',
    headers
  }, (res) => {
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
      try {
        const res = JSON.parse(chunk)
        if (res.code === 200) {
          console.info('Import success', `url: ${url}`)
        } else {
          console.error(`Import err`, `url: ${url}`, res.message)
        }
      } catch (e) {
        console.error(`Import err`, `url: ${url}`, e)
      }
    })
  })

  req.on('error', (e) => {
    console.error(`Import err`, `url: ${url}`, e.message)
  })

  // write data to request body
  req.write(postData)
  req.end()
}

exec(cUrl, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }

  try {
    const data = JSON.parse(stdout)

    data.data.mocks.forEach((mock) => {
      createMock({
        'mode': mock.mode,
        'url': mock.url,
        'method': mock.method,
        'description': mock.description,
        'project_id': targetProjectId
      })
    })

  } catch (e) {
    console.error(e)
  }
})

