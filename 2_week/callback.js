// 비동기적으로 데이터를 가져오는 함수
function fetcher(url, callback) {
  setTimeout(() => {
    console.log(`url: ${url}, run fetcher ...`)
    callback()
  }, Math.random() * 1000)
}

// fetcher('naver')
// fetcher('daum')
// fetcher('yahoo')
fetcher('naver', (url) => {
  console.log(url)
  fetcher('daum', (url) => {
    console.log(url)
    fetcher('yahoo', (url) => {
      console.log(url)
    })
  })
})
