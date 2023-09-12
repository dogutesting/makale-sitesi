/* /filmler /makaleler gibi kategorilerde sıralama seçeneği koyacağım
sıralama seçeneğini bu api'ye istek atarak yapmak istiyorum böylelikle
her sayfa yenilendiğinde değilde sadece istek atıldığında yapılır
*/

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
