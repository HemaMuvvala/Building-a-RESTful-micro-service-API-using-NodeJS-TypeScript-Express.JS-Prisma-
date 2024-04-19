const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hashSync(password, salt)