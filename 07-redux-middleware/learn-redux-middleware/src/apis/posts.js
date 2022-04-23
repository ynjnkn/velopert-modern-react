// n(ms)동안 기다리는 Promise를 만들어주는 함수
const sleep = (n) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n);
  });

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "consectetur adipiscing elit",
    body: "consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(1000);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(1000);
  return posts.find((post) => post.id === id);
};
