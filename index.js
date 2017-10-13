const app = "I don't do much."

function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var appendKitten = [kittens]
  appendKitten = [...kittens, name]
  return appendKitten
}

function prependKitten(name) {
  var prependKitten = [kittens]
  prependKitten = [name, ...kittens]
  return prependKitten
}

function removelastKitten() {
  return kittens.slice(kittens, kittens.length -1);
}
