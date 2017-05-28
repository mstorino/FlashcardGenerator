function ClozeCard(partial, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(partial, cloze);
  }

  this.partial = partial;
  this.cloze = cloze;
  this.question = partial.replace(cloze, '...')
}

module.exports = ClozeCard