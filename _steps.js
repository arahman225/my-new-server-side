
/**
 * creating a post api on the server side such as: const newUser = req.body; newUser.id = users.length + 1;users.push(newUser); send: res.send(newUser) just below mongodb await client.connect()
 * Client side -----------------------------------start
 * Send data via post from client side such as below{
 * Set fetch method inside fetch option (second parameter)
 * Option will have three things: method ('POST)
 * Option will have headers : 'Content-type: "application/json"
 * body: JSON.stringify(data)}
 * client side ------------------------------------end
 * 
 * Have to .use(express.json()) middleware on the server side. if not found search on the internet in this way "express req.body is undefined"
 */
