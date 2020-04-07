const sentence = "hello there from lighthouse labs";

for (const i in sentence) {
  const time = (i + 1) * 10
  setTimeout(() => {
    if (Number(i) === sentence.length - 1) {
      console.log(sentence[i])
    } else {
      process.stdout.write(sentence[i])
    }
  }, time)
}