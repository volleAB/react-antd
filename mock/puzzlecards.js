const random_jokes = [
  {
    id: 1,
    title: 'qui est esse',
    body: 'Inheritance',
  },
  {
    id: 2,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: "You must first understand what recursion is",
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'A satisfactory',
  },
];

// let random_joke_call_count = 0;

export default {
  'get /dev/scs_random_joke': function (req, res) {
    // const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    // random_joke_call_count += 1;
    setTimeout(() => {
      res.json(random_jokes);
    }, 3000);
  },
  'get /dev/err_random_joke': function (req, res) {
    res.status(500);
    res.json({});
  },
};
