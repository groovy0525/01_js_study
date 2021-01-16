// 비동기적으로 데이터를 가져오는 함수
function fetcher(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`url: ${url}, run fetcher ...`)
    })
  })
}

fetcher('naver')
  .then(() => {
    //  daum
  })
  .then(() => {
    // yahoo
  })
