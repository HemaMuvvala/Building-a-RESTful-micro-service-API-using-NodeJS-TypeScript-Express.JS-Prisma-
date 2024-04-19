
await prisma.user.update({
    where: {
        email: email,
    },
    data:{
        active: true,
    }
});