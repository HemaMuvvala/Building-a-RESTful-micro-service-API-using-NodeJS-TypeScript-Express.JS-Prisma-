await prisma.user.delete({
    where: {
      email: email,
    },
})