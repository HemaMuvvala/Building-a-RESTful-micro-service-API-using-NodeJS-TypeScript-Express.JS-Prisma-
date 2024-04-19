prisma = new PrismaClient();
await prisma.user.create({
    data: {
       email: input.email,
       password: hash,
       firstName: input.firstName, 
       lastName: input.lastName,
       dob: input.dob,
       active: false,
    }
 });