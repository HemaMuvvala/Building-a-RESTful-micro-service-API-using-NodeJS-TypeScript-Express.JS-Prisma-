await prisma.user.findUnique({
    where: {
        email: email,
    }
});