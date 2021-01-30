// 비동기적으로 데이터를 가져오는 함수
function fetcher(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`url: ${url}, run fetcher ...`)
    })
  })
}

async function foo() {
  const job1 = await fetcher('naver')

  const job2 = await fetcher('daum')

  const job3 = await fetcher('yahoo')
}

foo()
