const test = (req, res) => [
  res.status(200).json({test: 'Success!'})
];

export default { test };