import preval from "next-plugin-preval";

async function Query() {
  const data = fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => res.json());

    return data;
}

export default preval(Query());