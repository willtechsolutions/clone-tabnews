function status(request, response) {
  response
    .status(200)
    .json({ chave: "viva cada dia como se fosse o ultimo dia" });
}
export default status;
